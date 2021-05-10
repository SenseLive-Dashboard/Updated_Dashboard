const express = require("express");
let router = express.Router();
const connection = require('./database')
cors = require("cors");
router.use(cors());

router.get("/current_avg", (req, res) => {
    
    const sql = "SELECT val FROM employee1 where data_type='Current' ORDER BY time_stamp DESC LIMIT 1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/voltage_avg", (req, res) => {
    const sql = "SELECT val FROM employee1 where data_type='Voltage' ORDER BY time_stamp DESC LIMIT 1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/power_avg", (req, res) => {
    const sql = "SELECT val FROM employee1 where data_type='Power' ORDER BY time_stamp DESC LIMIT 1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/active_power_avg", (req, res) => {
    const sql = "SELECT val FROM employee1 where data_type='Active Power' ORDER BY time_stamp DESC LIMIT 1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/reactive_power_avg", (req, res) => {
    const sql = "SELECT val FROM employee1 where data_type='Reactive Power' ORDER BY time_stamp DESC LIMIT 1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/apparent_power_avg", (req, res) => {
    const sql = "SELECT val FROM employee1 where data_type='Apparent Power' ORDER BY time_stamp DESC LIMIT 1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });

  module.exports= router;