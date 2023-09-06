// var express = require("express")
var mysql = require('mysql2')
// var app = express();


var con = mysql.createPool({
    port: "3306",
    host: "127.0.0.1",
    user: "root",
    password: "sharanya",
    insecureAuth: true
})
// con.connect(function (err) {
//     if (err) throw err
//     console.log("connected")

// })

module.exports = con
