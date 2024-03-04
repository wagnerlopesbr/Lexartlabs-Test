const productsService = require("../services/products.service");

const findAll = async (req, res) => {
  try {
    const { status, data } = await productsService.findAll();
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Products Find All Error" });
  }
};

const findByBrand = async (req, res) => {
  try {
    const { brand } = req.params;
    const { status, data } = await productsService.findByBrand(brand);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Products Find By Brand Error" });
  }
};

const insert = async (req, res) => {
  try {
    const newData = req.body;
    const { status, data } = await productsService.insert(newData);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Products Insert Error" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const { status, data } = await productsService.update(id, newData);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Products Update Error" });
  }
};

const exclude = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, data } = await productsService.exclude(id);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Products Exclude Error" });
  }
};

module.exports = {
  findAll,
  findByBrand,
  insert,
  update,
  exclude,
};
