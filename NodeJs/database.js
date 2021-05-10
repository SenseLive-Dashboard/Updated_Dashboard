const mysql = require('mysql')

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'internship_project'
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connection eshtablished succesfully");
});

module.exports = connection;