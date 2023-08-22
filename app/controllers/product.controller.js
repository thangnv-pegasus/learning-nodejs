const Product = require("../models/product.model");

exports.get_all_product = (req, res) => {
  Product.get_all((data) => {
    res.send(data);
  });
};

exports.get_id = (req, res) => {
  Product.getId(req.params.id, (product) => {
    res.send(product);
  });
};

exports.add_product = (req, res) => {
  const data = req.body;
  console.log({ data });
  Product.add_product(data, (response) => {
    // console.log(req.body);
    res.send(response);
  });
};

exports.remove_product = (req, res) => {
  const id = req.params.id;
  Product.remove_product(id, (response) => {
    res.send(response);
  });
};

exports.update_product = (req, res) => {
  const product = req.body;
  console.log({ product });
  Product.update_product(product, (response) => {
    res.send(response);
  });
};
