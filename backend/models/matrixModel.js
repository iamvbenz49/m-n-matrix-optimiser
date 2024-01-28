const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const matrixSchema = new Schema({
    pincode: {
        type: Number,
        required:true
    },
    merchants: {
        type: [Number],
        required: true
    }
});

module.exports = mongoose.model("Matrix",matrixSchema);