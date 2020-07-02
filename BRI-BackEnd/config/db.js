const mysql = require("mysql2");

// Create a connection to the database

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_keluarga_berencana"
});

// open the MySQL connection

connection.connect(function (err) {
    if (err) throw err;
    console.log("Successfully connected to the database");

});

module.exports = connection;