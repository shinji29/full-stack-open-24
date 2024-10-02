const { getInfo } = require("../controllers/info.controller");
const router = require("express").Router();

router.get("/", getInfo);

module.exports = router;
