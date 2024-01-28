// Import the optimisedSparseMatrix class
const optimisedSparseMatrix = require("../sparse_matrix_generator");

// Create an instance of the OptimisedSparseMatrix class
const matrix = new optimisedSparseMatrix(10, 5); // Example: 10 pincodes, 5 merchants

// Test the methods
console.log("Displaying Matrix:");
matrix.displayMatrix();

console.log("\nInserting a seller at pincode 2:");
matrix.insertSeller(2, "Seller1");

console.log("\nDisplaying Matrix after insertion:");
matrix.displayMatrix();

console.log("\nRemoving the seller from pincode 2:");
const isDeleted = matrix.removeSeller(2, "Seller1");
console.log("Seller removed:", isDeleted);

console.log("\nDisplaying Matrix after removal:");
matrix.displayMatrix();

console.log("\nChecking if a merchant can deliver to pincode 2:");
const canDeliver = matrix.checkIfAMerchantCanDeliever(2, "Seller1");
console.log("Can deliver:", canDeliver);

console.log("\nGetting merchants at pincode 2:");
const merchantsAtPincode2 = matrix.getMerchantsAtPincode(2);
console.log("Merchants at pincode 2:", merchantsAtPincode2);
