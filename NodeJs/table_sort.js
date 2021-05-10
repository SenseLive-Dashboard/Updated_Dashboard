const express = require("express");
let router = express.Router();
const connection = require('./database')
cors = require("cors");
router.use(cors());

router.get("/live", (req, res) => {
    
    const sql = "SELECT * FROM employee1 WHERE time_stamp = CURRENT_TIMESTAMP"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/minute", (req, res) => {
    const sql = "SELECT * FROM employee1 WHERE time_stamp >= DATE_SUB(CURRENT_TIMESTAMP, interval 1 minute)"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/hour", (req, res) => {
    const sql = "SELECT * FROM employee1 WHERE time_stamp >= DATE_SUB(CURRENT_TIMESTAMP, interval 1 hour)"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/day", (req, res) => {
    const sql = "SELECT * FROM employee1 WHERE time_stamp >= DATE_SUB(CURRENT_TIMESTAMP, interval 1 day)"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/week", (req, res) => {
    const sql = "SELECT * FROM employee1 WHERE time_stamp >= DATE_SUB(CURRENT_TIMESTAMP, interval 1 week)"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/month", (req, res) => {
    const sql = "SELECT * FROM employee1 WHERE time_stamp >= DATE_SUB(CURRENT_TIMESTAMP, interval 1 month)"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });

  module.exports= router;