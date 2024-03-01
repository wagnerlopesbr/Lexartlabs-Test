const usersService = require("../services/users.service");

const findAll = async (req, res) => {
  try {
    const { status, data } = await usersService.findAll();
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Users Find All Error" });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, data } = await usersService.findById(id);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Users Find By Id Error" });
  }
};

const findByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const { status, data } = await usersService.findByEmail(email);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Users Find By Email Error" });
  }
};

const insert = async (req, res) => {
  try {
    const user = req.body;
    const { status, data } = await usersService.insert(user);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Users Insert Error" });
  }
};

const update = async (req, res) => {
  try {
    const user = req.body;
    const { status, data } = await usersService.update(user);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Users Update Error" });
  }
};

module.exports = {
  findAll,
  findById,
  findByEmail,
  insert,
  update,
};
