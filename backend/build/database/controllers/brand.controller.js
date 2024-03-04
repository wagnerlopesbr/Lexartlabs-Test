const brandService = require("../services/brand.service");

const findAll = async (req, res) => {
  try {
    const { status, data } = await brandService.findAll();
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Brand Find All Error" });
  }
};

const insert = async (req, res) => {
  try {
    const newData = req.body;
    const { status, data } = await brandService.insert(newData);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Brand Insert Error" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const { status, data } = await brandService.update(id, newData);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Brand Update Error" });
  }
};

const exclude = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, data } = await brandService.exclude(id);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Brand Exclude Error" });
  }
};

module.exports = {
  findAll,
  insert,
  update,
  exclude,
};
