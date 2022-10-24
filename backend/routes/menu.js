const express = require("express");
const {
  createMenuItem,
  updateMenuItem,
  removeMenuItem,
  getMenu,
  getMenuItemForUpdate,
  searchMenu,
  getLatestUploads,
} = require("../controllers/menu");
const { isAuth, isAdmin } = require("../middlewares/auth");
const { uploadImage } = require("../middlewares/multer");
const { validateMenu, validate } = require("../middlewares/validator");
const { parseData } = require("../utils/helper");

const router = express.Router();
// admin features
router.post(
  "/create",
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  parseData,
  validateMenu,
  validate,
  createMenuItem
);
router.patch(
  "/update/:menuItemId",
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  parseData,
  validateMenu,
  validate,
  updateMenuItem
);
router.delete("/:menuItemId", isAuth, isAdmin, removeMenuItem);
router.get("/menu", isAuth, isAdmin, getMenu);
router.get("/for-update/:menuItemId", isAuth, isAdmin, getMenuItemForUpdate);
router.get("/search", isAuth, isAdmin, searchMenu);

// normal user features
router.get("/latest-uploads", getLatestUploads);

module.exports = router;
