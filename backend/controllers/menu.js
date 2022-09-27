const {
  sendError,
  averageRatingPipeline,
  relatedMenuItemAggregation,
  getAverageRatings,
  topRatedMenuPipeline,
} = require("../utils/helper");
const cloudinary = require("../cloud");
const Menu = require("../models/menu");
const Review = require("../models/review");
const { isValidObjectId } = require("mongoose");

exports.createMenuItem = async (req, res) => {
  const { file, body } = req;

  const { name, description, status, type, tags } = body;

  const newMenuItem = new Menu({
    name,
    description,
    status,
    type,
    tags,
  });

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
    newMenuItem.poster = finalPoster;
  }

  await newMenuItem.save();

  res.status(201).json({
    menuItem: {
      id: newMenuItem._id,
      name,
    },
  });
};

exports.updateMenuItem = async (req, res) => {
  const { menuItemId } = req.params;
  const { file } = req;

  if (!isValidObjectId(menuItemId))
    return sendError(res, "Invalid Menu Item ID");

  const menuItem = await Menu.findById(menuItemId);
  if (!menuItem) return sendError(res, "Menu Item Not Found!", 404);

  const { name, description, status, type, tags } = req.body;

  menuItem.name = name;
  menuItem.description = description;
  menuItem.status = status;
  menuItem.type = type;
  menuItem.tags = tags;

  // update poster
  if (file) {
    // removing poster from cloud if there is any.
    const posterID = menuItem.poster?.public_id;
    if (posterID) {
      const { result } = await cloudinary.uploader.destroy(posterID);
      if (result !== "ok") {
        return sendError(res, "Could not update picture at the moment!");
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

      menuItem.poster = finalPoster;
    }
  }

  await menuItem.save();

  res.json({
    message: "Menu Item is updated",
    menuItem: {
      id: menuItem._id,
      name: menuItem.name,
      poster: menuItem.poster?.url,
      status: menuItem.status,
    },
  });
};

exports.removeMenuItem = async (req, res) => {
  const { menuItemId } = req.params;

  if (!isValidObjectId(menuItemId))
    return sendError(res, "Invalid Menu Item ID");

  const menuItem = await Menu.findById(menuItemId);
  if (!menuItem) return sendError(res, "Menu Item Not Found!", 404);

  // check if there is poster or not.
  const posterId = menuItem.poster?.public_id;
  if (posterId) {
    const { result } = await cloudinary.uploader.destroy(posterId);
    if (result !== "ok")
      return sendError(res, "Could not remove picture from cloud!");
  }

  await Menu.findByIdAndDelete(menuItemId);

  res.json({ message: "Menu Item removed successfully" });
};

exports.getMenu = async (req, res) => {
  const { pageNo = 0, limit = 10 } = req.query;

  const menu = await Menu.find({})
    .sort({ createdAt: -1 })
    .skip(parseInt(pageNo) * parseInt(limit))
    .limit(parseInt(limit));

  const results = menu.map((menuItem) => ({
    id: menuItem._id,
    name: menuItem.name,
    poster: menuItem.poster?.url,
    responsivePosters: menuItem.poster?.responsive,
    status: menuItem.status,
  }));

  res.json({ menu: results });
};

exports.getMenuItemForUpdate = async (req, res) => {
  const { menuItemId } = req.params;

  if (!isValidObjectId(menuItemId)) return sendError(res, "Id is invalid!");

  const menuItem = await Menu.findById(menuItemId);

  res.json({
    menuItem: {
      id: menuItem._id,
      name: menuItem.name,
      description: menuItem.description,
      poster: menuItem.poster?.url,
      status: menuItem.status,
      type: menuItem.type,
      tags: menuItem.tags,
    },
  });
};

exports.searchMenu = async (req, res) => {
  const { name } = req.query;

  if (!name.trim()) return sendError(res, "Invalid request!");

  const menu = await Menu.find({ name: { $regex: name, $options: "i" } });
  res.json({
    results: menu.map((m) => {
      return {
        id: m._id,
        name: m.name,
        poster: m.poster?.url,
        status: m.status,
      };
    }),
  });
};

exports.getLatestUploads = async (req, res) => {
  const { limit = 5 } = req.query;

  const results = await Menu.find({ status: "public" })
    .sort("-createdAt")
    .limit(parseInt(limit));

  const menu = results.map((m) => {
    return {
      id: m._id,
      name: m.name,
      description: m.description,
      poster: m.poster?.url,
    };
  });
  res.json({ menu });
};
