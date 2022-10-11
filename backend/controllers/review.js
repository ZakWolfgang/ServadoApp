const { isValidObjectId } = require("mongoose");
const { sendError } = require("../utils/helper");
const Menu = require("../models/menu");
const Review = require("../models/review");

exports.addReview = async (req, res) => {
  const { menuItemId } = req.params;
  const { content, rating } = req.body;
  const userId = req.user._id;

  if (!isValidObjectId(menuItemId)) return sendError(res, "Invalid Menu Item!");

  const menuItem = await Menu.findOne({ _id: menuItemId, status: "public" });
  if (!menuItem) return sendError(res, "Menu Item not found!", 404);

  const isAlreadyReviewed = await Review.findOne({
    owner: userId,
    parentMenuItem: menuItem._id,
  });
  if (isAlreadyReviewed)
    return sendError(res, "Invalid request, review is already their!");

  // create and update review.
  const newReview = new Review({
    owner: userId,
    parentMenuItem: menuItem._id,
    content,
    rating,
  });

  // updating review for menu item.
  menuItem.reviews.push(newReview._id);
  await menuItem.save();

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

  const menuItem = await Menu.findById(review.parentMenuItem).select("reviews");
  menuItem.reviews = menuItem.reviews.filter(
    (rId) => rId.toString() !== reviewId
  );

  await Review.findByIdAndDelete(reviewId);

  await menuItem.save();

  res.json({ message: "Review removed successfully." });
};

exports.getReviewsByMenuItem = async (req, res) => {
  const { menuItemId } = req.params;

  if (!isValidObjectId(menuItemId))
    return sendError(res, "Invalid Menu Item ID!");

  const menuItem = await Menu.findById(menuItemId)
    .populate({
      path: "reviews",
      populate: {
        path: "owner",
        select: "name",
      },
    })
    .select("reviews");

  const reviews = menuItem.reviews.map((r) => {
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

  res.json({ reviews });
};
