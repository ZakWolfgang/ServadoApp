const express = require("express");
const {
  createRestaurant,
  updateRestaurant,
  removeRestaurant,
  getRestaurants,
  getRestaurantForUpdate,
  searchRestaurants,
  getLatestUploads,
  getSingleRestaurant,
  getRelatedRestaurants,
  getTopRatedRestaurants,
  searchPublicRestaurants,
} = require("../controllers/restaurant");
const { isAuth, isAdmin } = require("../middlewares/auth");
const { parseData } = require("../utils/helper");
const { uploadImage } = require("../middlewares/multer");
const { validateRestaurant, validate } = require("../middlewares/validator");

const router = express.Router();

router.post(
  "/create",
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  parseData,
  validateRestaurant,
  validate,
  createRestaurant
);

router.patch(
  "/update/:restaurantId",
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  parseData,
  validateRestaurant,
  validate,
  updateRestaurant
);

router.delete("/:restaurantId", isAuth, isAdmin, removeRestaurant);

router.get("/restaurants", isAuth, isAdmin, getRestaurants);

router.get(
  "/for-update/:restaurantId",
  isAuth,
  isAdmin,
  getRestaurantForUpdate
);

router.get("/search", isAuth, isAdmin, searchRestaurants);

// for normal users
router.get("/latest-uploads", getLatestUploads);
router.get("/single/:restaurantId", getSingleRestaurant);
router.get("/related/:restaurantId", getRelatedRestaurants);
router.get("/top-rated", getTopRatedRestaurants);
router.get("/search-public", searchPublicRestaurants);

module.exports = router;
