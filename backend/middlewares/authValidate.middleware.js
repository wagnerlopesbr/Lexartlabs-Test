const auth = require("../utils/auth");

const authValidate = (req, res, next) => {
  const headerInfo = req.header("Authorization");
  if (!headerInfo) {
    return res.status(401).json({ message: "Token not found" });
  }
  const token = headerInfo.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Expired or invalid token" });
  }
  const payload = auth.tokenVerifier(token);
  const timeNow = Math.floor(Date.now() / 1000);
  if (!payload || payload.exp < timeNow) {
    return res.status(401).json({ message: "Expired or invalid token" });
  }
  req.user = payload;
  next();
};

module.exports = { authValidate };
