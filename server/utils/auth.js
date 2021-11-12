const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


const secret = process.env.AUTH_SECRET;
const expiration = process.env.AUTH_EXPIRATION;

module.exports = {
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};