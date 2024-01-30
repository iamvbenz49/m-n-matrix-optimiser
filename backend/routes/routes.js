const express = require("express");
const { createDimension, createIndices, createCheck } = require("../controllers/controllers")
const router = express.Router();



router.post("/check", createCheck);

router.post("/indices", createIndices);

router.post("/dimension",createDimension);

router.post("/matrix", (req,res) => {
    console.log("got matrix");
    res.status(200).json({message:"done"});
});

module.exports = router;