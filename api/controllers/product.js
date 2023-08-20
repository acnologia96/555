const Product = require("../models/Product");

exports.list = async (req, res) => {
  try {
    const product = await Product.find()
      .sort([["createdAt", "desc"]])
      .exec();
      const products=JSON.stringify(product)
     res.status(200).json({status: 200,message: "OK",products})
    //res.send(product)


   // 
    //res.json({message:"ok",sta},products)
  } catch (err) {
    res.status(500).send("List Product Error!!");
  }
};

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const product = await new Product(req.body).save();
    const products=JSON.stringify(product)
    res.status(200).json({status: 200,message: "OK"})

  } catch (err) {
    res.status(500).send("Create Product Error!!");
  }
};

exports.read = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id })
    .exec();
    const products=JSON.stringify(product)
    res.status(200).json({status: 200,message: "OK",products})

  } catch (err) {
    res.status(500).send("Read Product Error!!");
  }
};
exports.update = async (req, res) => {
    try {
      const product = await Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      ).exec();
      const products=JSON.stringify(product)
      res.status(200).json({status: 200,message: "OK"})

    } catch (err) {
      //err
      res.status(500).send("Update Product Error!!");
    }
  };

  exports.remove = async (req, res) => {
    try {
      const deleted = await Product.findByIdAndRemove({
        _id: req.params.id,
      }).exec();
      
      res.json(deleted)
    } catch (err) {
      res.status(500).send("Remove Product Error!!");
    }
  };
  