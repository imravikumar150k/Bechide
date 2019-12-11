var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rk123"
});

//create database if not there
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    //create db
    var sql = "CREATE DATABASE IF NOT EXISTS UsersDB";

    con.query(sql, function (err) {
        if (err) throw err;

    });
    console.log("DB Created!");

    //create table
    var sql = "CREATE TABLE IF NOT EXISTS UsersDB.UsersTable(Id INT PRIMARY KEY AUTO_INCREMENT)";

    con.query(sql, function (err) {
        if (err) throw err;

    });
    console.log("table Created!");

});
