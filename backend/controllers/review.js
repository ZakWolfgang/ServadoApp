const { isValidObjectId } = require("mongoose");
const { sendError, getAverageRatings } = require("../utils/helper");
const Restauarant = require("../models/restaurant");
const Review = require("../models/review");

exports.addReview = async (req, res) => {
  const { restaurantId } = req.params;
  const { content, rating } = req.body;
  const userId = req.user._id;

  if (!isValidObjectId(restaurantId))
    return sendError(res, "Invalid Restaurant!");

  const restaurant = await Restauarant.findOne({
    _id: restaurantId,
    status: "public",
  });
  if (!restaurant) return sendError(res, "Restaurant not found!", 404);

  const isAlreadyReviewed = await Review.findOne({
    owner: userId,
    parentRestaurant: restaurant._id,
  });
  if (isAlreadyReviewed)
    return sendError(res, "Invalid request, review is already their!");

  // create and update review.
  const newReview = new Review({
    owner: userId,
    parentRestaurant: restaurant._id,
    content,
    rating,
  });

  // updating review for restaurant.
  restaurant.reviews.push(newReview._id);
  await restaurant.save();

  // saving new review
  await newReview.save();

  res.json({ message: "Your review has been added." });
};

exports.updateReview = async (req, res) => {
  const { reviewId } = req.params;
  const { content, rating } = req.body;
  const userId = req.user._id;

  if (!isValidObjectId(reviewId)) return sendError(res, "Invalid Review ID!");

  const review = await Review.findOne({ owner: userId, _id: reviewId });
  if (!review) return sendError(res, "Review not found!", 404);

  review.content = content;
  review.rating = rating;

  await review.save();

  res.json({ message: "Your review has been updated." });
};

exports.removeReview = async (req, res) => {
  const { reviewId } = req.params;
  const userId = req.user._id;

  if (!isValidObjectId(reviewId)) return sendError(res, "Invalid review ID!");

  const review = await Review.findOne({ owner: userId, _id: reviewId });
  if (!review) return sendError(res, "Invalid request, review not found!");

  const restaurant = await Restauarant.findById(review.parentRestaurant).select(
    "reviews"
  );
  restaurant.reviews = restaurant.reviews.filter(
    (rId) => rId.toString() !== reviewId
  );

  await Review.findByIdAndDelete(reviewId);

  await restaurant.save();

  res.json({ message: "Review removed successfully." });
};

exports.getReviewsByRestuarant = async (req, res) => {
  const { restaurantId } = req.params;

  if (!isValidObjectId(restaurantId))
    return sendError(res, "Invalid Restaurant ID!");

  const restaurant = await Restauarant.findById(restaurantId)
    .populate({
      path: "reviews",
      populate: {
        path: "owner",
        select: "name",
      },
    })
    .select("reviews name");

  const reviews = restaurant.reviews.map((r) => {
    const { owner, content, rating, _id: reviewID } = r;
    const { name, _id: ownerId } = owner;

    return {
      id: reviewID,
      owner: {
        id: ownerId,
        name,
      },
      content,
      rating,
    };
  });

  res.json({ restaurant: { reviews, name: restaurant.name } });
};
