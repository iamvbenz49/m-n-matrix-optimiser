const express = require("express");
const { createDimension, createIndices, createCheck, getSearchDB, createSearchDB } = require("../controllers/controllers")
const router = express.Router();



router.post("/check", createCheck);

router.post("/indices", createIndices);

router.post("/dimension",createDimension);

router.get("/searchdb",getSearchDB );

router.post("/searchdb",createSearchDB);

module.exports = router;