const express = require("express");
let router = express.Router();
const connection = require('./database')
cors = require("cors");
router.use(cors());

router.get("/company", (req, res) => {
    
    const sql = "SELECT DISTINCT company FROM employee1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/meter_name", (req, res) => {
    const sql = "SELECT DISTINCT meter_name FROM employee1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/data_type", (req, res) => {
    const sql = "SELECT DISTINCT data_type FROM employee1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });

  module.exports= router;