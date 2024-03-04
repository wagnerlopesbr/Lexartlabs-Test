const usersService = require("../services/users.service");
const auth = require("../../utils/auth");

const login = async (email, password) => {
  try {
    if (!email || !password) {
      return {
        status: 400,
        data: { message: "Some required fields are missing" },
      };
    }
    console.log("usersServices: ", usersService.findByEmail(email));
    const { status, data } = await usersService.findByEmail(email);
    console.log("status: ", status);
    console.log("data: ", data);
    if (status !== 200 || !data || data.password !== password) {
      return {
        status: 400,
        data: { message: "Incorrect email or password" },
      };
    }

    const token = auth.tokenGenerator(email);
    console.log("token: ", token);
    return {
      status: 200,
      data: { token },
    };
  } catch (error) {
    return {
      status: 500,
      data: { message: "Login Error" },
    };
  }
};

module.exports = {
  login,
};
