const express = require("express");
let router = express.Router();
const connection = require('./database')
cors = require("cors");
router.use(cors());

router.get("/current_avg", (req, res) => {
    
    const sql = "SELECT Current_Avg FROM sensordata ORDER BY reading_time DESC LIMIT 1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/voltage_avg", (req, res) => {
    const sql = "SELECT Voltage_Avg FROM sensordata ORDER BY reading_time DESC LIMIT 1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/power_avg", (req, res) => {
    const sql = "SELECT Power_Factor FROM sensordata ORDER BY reading_time DESC LIMIT 1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/active_power_avg", (req, res) => {
    const sql = "SELECT Active_Power FROM sensordata ORDER BY reading_time DESC LIMIT 1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/reactive_power_avg", (req, res) => {
    const sql = "SELECT Reactive_Power FROM sensordata ORDER BY reading_time DESC LIMIT 1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/apparent_power_avg", (req, res) => {
    const sql = "SELECT Apparent_Power FROM sensordata ORDER BY reading_time DESC LIMIT 1"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  // router.get("/kwh", (req, res) => {
  //   const sql = "SELECT KWH FROM sensordata ORDER BY reading_time DESC LIMIT 1"
  //   connection.query(sql, function(err, result, fields) {
  //     if (err) throw err;
  //     res.json(result);
  //     console.log({data:result});
  //   });
  // });
  // router.get("/kvarh", (req, res) => {
  //   const sql = "SELECT kVARh FROM sensordata ORDER BY reading_time DESC LIMIT 1"
  //   connection.query(sql, function(err, result, fields) {
  //     if (err) throw err;
  //     res.json(result);
  //     console.log({data:result});
  //   });
  // });
  // router.get("/kvah", (req, res) => {
  //   const sql = "SELECT kVAh FROM sensordata ORDER BY reading_time DESC LIMIT 1"
  //   connection.query(sql, function(err, result, fields) {
  //     if (err) throw err;
  //     res.json(result);
  //     console.log({data:result});
  //   });
  // });

  module.exports= router;