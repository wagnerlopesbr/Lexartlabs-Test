const jwt = require("jsonwebtoken");
require("dotenv").config();

const tokenGenerator = (email) => {
  const keyword = process.env.JWT_SECRET;
  const jwtConfig = {
    expiresIn: "7d",
    algorithm: "HS256",
  };
  const token = jwt.sign({ email }, keyword, jwtConfig);
  return token;
};

const tokenVerifier = (token) => {
  const keyword = process.env.JWT_SECRET;
  try {
    const decoded = jwt.verify(token, keyword);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token!");
  }
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
