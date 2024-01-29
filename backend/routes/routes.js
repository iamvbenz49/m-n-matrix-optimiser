const express = require("express");
const { createDimension, createIndices } = require("../controllers/controllers")
const router = express.Router();

router.get("/check", (req,res) => {
    console.log("got checked")
    res.status(200).json({message:"done"});
});

router.post("/check", (req,res) => {
    console.log("checked post");
    res.status(200).json({message:"done"});
});

router.post("/indices", createIndices);


router.post("/dimension",createDimension);

router.post("/matrix", (req,res) => {
    console.log("got matrix");
    res.status(200).json({message:"done"});
});

module.exports = router;