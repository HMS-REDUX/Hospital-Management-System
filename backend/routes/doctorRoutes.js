const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");
const auth = require("../middleware/auth");

router.get("/getById", auth, doctorController.getDoctorProfile);
router.put("/putById", auth, doctorController.updateDoctorProfile);

module.exports = router;
