const Matrix = require("../models/matrixModel");
const {optimisedSparseMatrix, optimisedSparseMatrixforDB} = require("../generator/sparse_matrix_generator");

let sparseMatrix;
let sparseMatrixdb;
let isAvailable = false;


const createDimension = async (req,res) => {
    const {rows,columns} = req.body;
    try{
        sparseMatrix = new optimisedSparseMatrix(rows,columns);
        res.status(200).json("sparseMatrix");
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const createIndices = async (req,res) => {
    const {row,column,type} = req.body;
    try{
        sparseMatrix.insertSeller(row, column);
        sparseMatrix.displayMatrix();
        res.status(200).json("sparseMatrix");
    }catch(error){
        console.log("wtf")
        res.status(400).json({erro:error})
     }
}


const createCheck = async (req,res) => {
    const {row,column,type} = req.body;
    try{
        console.log("success")
        res.status(200).json({message:sparseMatrix.checkIfAMerchantCanDeliever(row, column)});
    }catch(error){
        console.log(error)
        res.status(400).json({message:error.message})
    }
}

const getSearchDB = async (req,res) => {
    const db = await Matrix.find();
    console.log(db);
    sparseMatrixdb = new optimisedSparseMatrixforDB(db);
    console.log(db[0].pincode+"okk")
}

const createSearchDB = async (req,res) => {
    const {row,column} = req.body;
    try{
        // console.log(sparseMatrixdb.checkIfAMerchantCanDeliever(row, column))
        res.status(200).json({message:sparseMatrixdb.checkIfAMerchantCanDeliever(row, column)});
    }catch(error){
        console.log(error)
        res.status(400).json({message:error.message})
    }
}


const createSearch = async (req,res) => {
    const {row,column} = req.body;
    try{
        // console.log(sparseMatrixdb.checkIfAMerchantCanDeliever(row, column))
        res.status(200).json({message:sparseMatrixdb.checkIfAMerchantCanDeliever(row, column)});
    }catch(error){
        console.log(error)
        res.status(400).json({message:error.message})
    }
}

module.exports = {
    createDimension,
    createIndices,
    createCheck,
    getSearchDB,
    createSearchDB,
    createSearch
}