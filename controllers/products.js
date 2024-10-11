const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "Product Testing Route" });
};

const getAllProducts = async (req, res) => {
  const { featured } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
