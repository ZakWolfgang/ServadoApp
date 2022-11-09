const { isValidObjectId } = require("mongoose");
const Restaurant = require("../models/restaurant");
const Review = require("../models/review");
const {
  sendError,
  formatMenu,
  averageRatingPipeline,
  relatedRestaurantAggregation,
  getAverageRatings,
  topRatedRestaurantPipeline,
} = require("../utils/helper");
const cloudinary = require("../cloud");

exports.createRestaurant = async (req, res) => {
  const { file, body } = req;
  const { name, description, status, menu } = body;

  const newRestaurant = new Restaurant({ name, description, status });
  if (menu) {
    for (let menuId of menu) {
      if (!isValidObjectId(menuId)) return sendError(res, "Invalid Menu ID");
    }
    newRestaurant.menu = menu;
  }

  // uploading poster
  if (file) {
    const {
      secure_url: url,
      public_id,
      responsive_breakpoints,
    } = await cloudinary.uploader.upload(file.path, {
      transformation: {
        width: 1280,
        height: 720,
      },
      responsive_breakpoints: {
        create_derived: true,
        max_width: 640,
        max_images: 3,
      },
    });

    const finalPoster = { url, public_id, responsive: [] };

    const { breakpoints } = responsive_breakpoints[0];
    if (breakpoints.length) {
      for (let imgObj of breakpoints) {
        const { secure_url } = imgObj;
        finalPoster.responsive.push(secure_url);
      }
    }
    newRestaurant.poster = finalPoster;
  }

  await newRestaurant.save();

  res.status(201).json({
    restaurant: {
      id: newRestaurant._id,
      name,
    },
  });
};

exports.updateRestaurant = async (req, res) => {
  const { restaurantId } = req.params;
  const { file } = req;

  if (!isValidObjectId(restaurantId))
    return sendError(res, "Invalid Restaurant ID");

  const restaurant = await Restaurant.findById(restaurantId);
  if (!restaurant) return sendError(res, "Restaurant Not Found", 404);

  const { name, description, status, menu } = req.body;

  restaurant.name = name;
  restaurant.description = description;
  restaurant.status = status;

  if (menu) {
    for (let menuId of menu) {
      if (!isValidObjectId(menuId)) return sendError(res, "Invalid menu id");
    }

    restaurant.menu = menu;
  }

  // update poster
  if (file) {
    // removing poster from cloud if there is any.
    const posterID = restaurant.poster?.public_id;
    console.log(posterID);
    if (posterID) {
      const { result } = await cloudinary.uploader.destroy(posterID);
      if (result !== "ok") {
        return sendError(res, "Could not update poster at the moment!");
      }

      // uploading poster
      const {
        secure_url: url,
        public_id,
        responsive_breakpoints,
      } = await cloudinary.uploader.upload(req.file.path, {
        transformation: {
          width: 1280,
          height: 720,
        },
        responsive_breakpoints: {
          create_derived: true,
          max_width: 640,
          max_images: 3,
        },
      });

      const finalPoster = { url, public_id, responsive: [] };

      const { breakpoints } = responsive_breakpoints[0];
      if (breakpoints.length) {
        for (let imgObj of breakpoints) {
          const { secure_url } = imgObj;
          finalPoster.responsive.push(secure_url);
        }
      }

      restaurant.poster = finalPoster;
    }
  }

  await restaurant.save();

  res.json({
    message: "Restaurant is updated",
    restaurant: {
      id: restaurant._id,
      name: restaurant.name,
      poster: restaurant.poster?.url,
      status: restaurant.status,
    },
  });
};

exports.removeRestaurant = async (req, res) => {
  const { restaurantId } = req.params;

  if (!isValidObjectId(restaurantId))
    return sendError(res, "Invalid Restaurant ID");

  const restaurant = await Restaurant.findById(restaurantId);
  if (!restaurant) return sendError(res, "Restaurant Not Found", 404);

  // check if there is poster or not.
  // if yes then we need to remove that.

  const posterId = restaurant.poster?.public_id;
  if (posterId) {
    const { result } = await cloudinary.uploader.destroy(posterId);
    if (result !== "ok")
      return sendError(res, "Could not remove poster from cloud!");
  }

  await Restaurant.findByIdAndDelete(restaurantId);

  res.json({ message: "Restaurant removed successfully" });
};

exports.getRestaurants = async (req, res) => {
  const { pageNo = 0, limit = 10 } = req.query;

  const restaurants = await Restaurant.find({})
    .sort({ createdAt: -1 })
    .skip(parseInt(pageNo) * parseInt(limit))
    .limit(parseInt(limit));

  const results = restaurants.map((restuarant) => ({
    id: restuarant._id,
    name: restuarant.name,
    poster: restuarant.poster?.url,
    responsivePosters: restuarant.poster?.responsive,
    status: restuarant.status,
  }));

  res.json({ restaurants: results });
};

exports.getRestaurantForUpdate = async (req, res) => {
  const { restaurantId } = req.params;

  if (!isValidObjectId(restaurantId)) return sendError(res, "Id is invalid");

  const restaurant = await Restaurant.findById(restaurantId).populate("menu");

  res.json({
    id: restaurant._id,
    name: restaurant.name,
    description: restaurant.description,
    poster: restaurant.poster?.url,
    status: restaurant.status,
    menu: restaurant.menu.map((m) => formatMenu(m)),
  });
};

exports.searchRestaurants = async (req, res) => {
  const { name } = req.query;

  if (!name.trim()) return sendError(res, "Invalid Request");

  const restaurants = await Restaurant.find({
    name: { $regex: name, $options: "i" },
  });
  res.json({
    results: restaurants.map((r) => {
      return {
        id: r._id,
        name: r.name,
        poster: r.poster?.url,
        status: r.status,
      };
    }),
  });
};

exports.getLatestUploads = async (req, res) => {
  const { limit = 5 } = req.query;

  const results = await Restaurant.find({ status: "piblic" })
    .sort("-createdAt")
    .limit(parseInt(limit));

  const restaurants = results.map((r) => {
    return {
      id: r._id,
      name: r.name,
      description: r.description,
      poster: r.poster?.url,
      responsivePosters: r.poster.responsive,
    };
  });
  res.json({ restaurants });
};

exports.getSingleRestaurant = async (req, res) => {
  const { restaurantId } = req.params;

  if (!isValidObjectId(restaurantId))
    return sendError(res, "Resturant id is not valid");

  const restuarant = await Restaurant.findById(restaurantId).populate("menu");

  const [aggregatedResponse] = await Review.aggregate(
    averageRatingPipeline(restuarant._id)
  );

  const reviews = {};

  if (aggregatedResponse) {
    const { ratingAvg, reviewCount } = aggregatedResponse;
    reviews.ratingAvg = parseFloat(ratingAvg).toFixed(1);
    reviews.reviewCount = reviewCount;
  }

  const { _id: id, name, description, menu, poster } = restuarant;

  res.json({
    restuarant: {
      id,
      name,
      description,
      poster: poster?.url,
      menu: menu.map((m) => ({
        id: m._id,
        name: m.name,
        description: m.description,
        poster: m.poster?.poster?.url,
      })),
      reviews: { ...reviews },
    },
  });
};

exports.getRelatedRestaurants = async (req, res) => {
  const { restaurantId } = req.params;
  if (!isValidObjectId(restaurantId))
    return sendError(res, "Invalid Restaurant Id");

  const restaurant = await Restaurant.findById(restaurantId);

  const restaurants = await Restaurant.aggregate(
    relatedRestaurantAggregation(restaurant.tags, restaurant._id)
  );

  const mapRestaurants = async (r) => {
    const reviews = await getAverageRatings(r._id);

    return {
      id: r._id,
      name: r.name,
      poster: r.poster,
      responsivePosters: r.responsivePosters,
      reviews: { ...reviews },
    };
  };
  const relatedRestaurants = await Promise.all(restaurants.map(mapRestaurants));

  res.json({ restaurants: relatedRestaurants });
};

exports.getTopRatedRestaurants = async (req, res) => {
  const { type = "Place" } = req.query;

  const restaurants = await Restaurant.aggregate(
    topRatedRestaurantPipeline(type)
  );

  const mapRestaurants = async (r) => {
    const reviews = await getAverageRatings(r._id);

    return {
      id: r._id,
      name: r.name,
      poster: r.poster,
      responsivePosters: r.responsivePosters,
      reviews: { ...reviews },
    };
  };

  const topRatedRestaurants = await Promise.all(
    restaurants.map(mapRestaurants)
  );

  res.json({ restaurants: topRatedRestaurants });
};

exports.searchPublicRestaurants = async (req, res) => {
  const { name } = req.query;

  if (!name.trim()) return sendError(res, "Invalid request");

  const restaurants = await Restaurant.find({
    name: { $regex: name, $options: "i" },
    status: "public",
  });

  const mapRestaurants = async (r) => {
    const reviews = await await getAverageRatings(r._id);

    return {
      id: r._id,
      name: r.name,
      poster: r.poster?.url,
      responsivePosters: r.poster?.responsive,
      reviews: { ...reviews },
    };
  };

  const results = await Promise.all(restaurants.map(mapRestaurants));

  res.json({ results });
};
