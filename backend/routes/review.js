const router = require("express").Router();
const {
  addReview,
  updateReview,
  removeReview,
  getReviewsByRestuarant,
} = require("../controllers/review");
const { isAuth } = require("../middlewares/auth");
const { validateRatings, validate } = require("../middlewares/validator");

router.post("/add/:restaurantId", isAuth, validateRatings, validate, addReview);
router.patch("/:reviewId", isAuth, validateRatings, validate, updateReview);
router.delete("/:reviewId", isAuth, removeReview);
router.get("/get-reviews-by-restuarant/:restaurantId", getReviewsByRestuarant);

module.exports = router;
