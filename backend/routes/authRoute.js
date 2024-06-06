const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.route("/login").post(authController.login);
router.route("/signup").post(authController.signup);
router.route("/get-users").get(authController.getUserData);

module.exports = router;
