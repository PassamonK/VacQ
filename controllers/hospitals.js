const Hospital = require("../models/Hospital");
const vacCenter = require("../models/vacCenter");

exports.getVacCenters = (req, res, next) => {
  vacCenter.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Vaccine Centers.",
      });
    else res.send(data);
  });
};
