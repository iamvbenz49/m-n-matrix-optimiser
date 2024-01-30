const Matrix = require("../models/matrixModel")
const optimisedSparseMatrix = require("../generator/sparse_matrix_generator")
let sparseMatrix;

const createDimension = async (req,res) => {
    const {rows,columns} = req.body;
    try{
        sparseMatrix = new optimisedSparseMatrix(rows,columns);
        res.status(200).json("sparseMatrix");
    }catch(error){
        res.status(400).json({erro:error.message})
    }
}

const createIndices = async (req,res) => {
    const {row,column,type} = req.body;
  //  try{
        sparseMatrix.insertSeller(row, column);
        sparseMatrix.displayMatrix();
        res.status(200).json("sparseMatrix");
    // }catch(error){
    //     console.log("wtf")
    //     res.status(400).json({erro:error.message})
    // }
}

module.exports = {
    createDimension,
    createIndices
}