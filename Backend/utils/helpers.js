
const jwt = require("jsonwebtoken");
exports = {};

exports.getToken = (email,user) =>{
  const token = JwtStrategy.sign({identifier:user._id},"thisisaclone");

  return token;
}