const express = require("express");

const router = express.Router();

const geo_controller = require("../controllers/geo.controller");

router.get("/test", geo_controller.test);
module.exports = router;
