const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');

router.route("/register").post(registerUser);
router.route("/login").get(loginUser);
router.route("/logout").post(logoutUser);
// router.route("/logout").post();

module.exports = router;
