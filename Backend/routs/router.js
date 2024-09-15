const express = require('express');
const router = express.Router();
const { getDetails, createDetail, updateDetail, deleteDetail, getSingleDetail } = require('../controllers/controller');
const { registerUser, loginUser } = require('../controllers/authController');

router.route("/details").get( getDetails);
router.route("/details/:id").get(getSingleDetail);
router.route("/details/create").post( createDetail);
router.route("/details/update/:id").put(updateDetail);
router.route("/details/delete/:id").delete( deleteDetail);

module.exports = router;