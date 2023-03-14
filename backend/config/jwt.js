const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generateToken = (userId) => {
  const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET, { expiresIn: '15m' });
  return token;
};

const generateRefreshToken = (userId) => {
  const refreshToken = jwt.sign({ _id: userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
  return refreshToken;
};

module.exports = {
  generateToken,
  generateRefreshToken,
};
