const express = require('express');

const mysql= require('mysql');




let connection =mysql.createConnection({
    host:'localhost',
    user:'demo',
    password:'linux',
    database:'backend',
    multipleStatements: true
})



module.exports=connection;


/*

connection.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("connected")
    }
           
});

*/