const express = require("express");

const router = express.Router();

router.get("/check", (req,res) => {
    console.log("got checked")
    res.status(200).json({message:"done"});
});

router.post("/check", (req,res) => {
    console.log("checked post");
    res.status(200).json({message:"done"});
});

router.post("/dimension", (req,res) => {
    console.log("got dimension");
    res.status(200).json({message:"done"});
});

router.post("/matrix", (req,res) => {
    console.log("got matrix");
    res.status(200).json({message:"done"});
});

module.exports = router;