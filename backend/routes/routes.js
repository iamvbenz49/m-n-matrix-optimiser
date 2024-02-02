const express = require("express");
const { createDimension, createIndices, createCheck, getSearchDB } = require("../controllers/controllers")
const router = express.Router();



router.post("/check", createCheck);

router.post("/indices", createIndices);

router.post("/dimension",createDimension);

router.get("/searchdb",getSearchDB );

module.exports = router;