const Matrix = require("../models/matrixModel")
const optimisedSparseMatrix = require("../generator/sparse_matrix_generator")
let sparseMatrix;

const createDimension = async (req,res) => {
    const {rows,columns} = req.body;
    console.log("sparse")
    try{
        sparseMatrix = new optimisedSparseMatrix(rows,columns);
        res.status(200).json("sparseMatrix");
    }catch(error){
        res.status(400).json({erro:error.message})
    }
    console.log("Done!!")
}

module.exports = {
    createDimension
}