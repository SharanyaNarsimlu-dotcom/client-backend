var routes = require("express").Router();
const UserService  = require('../services/ClientServices.js');

const cors = require("cors");
routes.use(cors());
console.log("in index.js")


routes.use('/client',require('./ClientRoutes'))

module.exports = routes




