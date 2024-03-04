const modelService = require("../services/model.service");

const findAll = async (req, res) => {
  try {
    const { status, data } = await modelService.findAll();
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Model Find All Error" });
  }
};

const insert = async (req, res) => {
  try {
    const newData = req.body;
    const { status, data } = await modelService.insert(newData);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Model Insert Error" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const { status, data } = await modelService.update(id, newData);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Model Update Error" });
  }
};

const exclude = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, data } = await modelService.exclude(id);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Model Exclude Error" });
  }
};

module.exports = {
  findAll,
  insert,
  update,
  exclude,
};
