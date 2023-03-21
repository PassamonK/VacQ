const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/auth");

const {
  getHospital,
  getHospitals,
  createHospital,
  updateHospitals,
  deleteHospital,
  getVacCenters,
} = require("../controllers/hospital");

const appointmentRouter = require("./appointments");
router.use("/:hospitalId/appointments/", appointmentRouter);

router.route("/vacCenters").get(getVacCenters);

router
  .route("/")
  .get(getHospitals)
  .post(protect, authorize("admin"), createHospital);
router
  .route("/:id")
  .get(getHospital)
  .put(protect, authorize("admin"), updateHospitals)
  .delete(protect, authorize("admin"), deleteHospital);

module.exports = router;
