class optimisedSparseMatrix{

  constructor( pincodes,  merchants){

    this.pincodes = pincodes+1;
    this.merchants = merchants;
    this.matrix = Array.from({ length: this.pincodes }, () => new Set());

  }
  displayMatrix(){

    this.matrix.forEach((set, pincode) => {
      console.log(`At pincode ${pincode}:`, set);
    });    

  }

  insertSeller( pincode, seller){

    const setAtIndex = this.matrix[pincode];
    setAtIndex.add(seller);
    console.log(seller)
  }

  removeSeller(pincode , seller){

    const sellers = this.matrix[pincode];
    const isDeleted = sellers.delete(seller);

    return isDeleted;

  }
  getMatrix(){

    return this.displayMatrix;

  }
  checkIfAMerchantCanDeliever( pincode, seller ){

    const sellers = this.matrix[pincode];
    return sellers.has(seller);

  }
  getMerchantsAtPincode(pincode){

    return this.matrix[pincode];

  }
}


class optimisedSparseMatrixforDB{

  constructor( db){
    this.pincodes = 10;
    this.merchants = 10;
    this.matrix = Array.from({ length: this.pincodes }, () => new Set());
    db.forEach(document => {
      let set = new Set(document.merchants)
      console.log(set)
      this.matrix[document.pincode] = set;
    });

  }
  displayMatrix(){

    this.matrix.forEach((set, pincode) => {
      console.log(`At pincode ${pincode}:`, set);
    });    

  }

  insertSeller( pincode, seller){

    const setAtIndex = this.matrix[pincode];
    setAtIndex.add(seller);
    console.log(seller)
  }

  removeSeller(pincode , seller){

    const sellers = this.matrix[pincode];
    const isDeleted = sellers.delete(seller);

    return isDeleted;

  }
  getMatrix(){

    return this.displayMatrix;

  }
  checkIfAMerchantCanDeliever( pincode, seller ){

    const sellers = this.matrix[pincode];
    sellers.forEach(sell => {
      console.log(sell);
    })
    console.log(sellers,seller,sellers.has(seller))
    return sellers.has(seller);

  }
  getMerchantsAtPincode(pincode){

    return this.matrix[pincode];

  }
}

module.exports = {
                optimisedSparseMatrix,
                optimisedSparseMatrixforDB
              };

