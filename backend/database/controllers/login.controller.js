const loginService = require("../services/login.service");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ data: { message: "Some required fields are missing" } });
    }
    const { status, data } = await loginService.login(email, password);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ data: { message: "LOGIN ERROR!" } });
  }
};

module.exports = {
  login,
};
