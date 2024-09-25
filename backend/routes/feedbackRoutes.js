const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const authUser = require("../middleware/authUser");
router.get("/:doctorId", authUser, feedbackController.getDoctorFeedback);
router.get("/stars/:doctorId", authUser, feedbackController.avgstars);
router.post("/", authUser, feedbackController.createFeedback);

module.exports = router;
