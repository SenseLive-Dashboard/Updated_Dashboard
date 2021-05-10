const express = require("express");
let router = express.Router();
const connection = require('./database')
cors = require("cors");
router.use(cors());

router.get("/current_graph",(req, res) => {
    // res.send('App Works !!!!');
    const sql = "SELECT time_stamp,val,phase1,phase2,phase3 FROM employee1 where data_type='Current' ORDER BY time_stamp DESC LIMIT 3"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/voltage_graph",(req, res) => {
    // res.send('App Works !!!!');
    const sql = "SELECT time_stamp,val,phase1,phase2,phase3 FROM employee1 where data_type='Voltage' ORDER BY time_stamp DESC LIMIT 3"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/power_graph",(req, res) => {
    // res.send('App Works !!!!');
    const sql = "SELECT time_stamp,val,phase1,phase2,phase3 FROM employee1 where data_type='Power' ORDER BY time_stamp DESC LIMIT 3"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/active_power_graph",(req, res) => {
    // res.send('App Works !!!!');
    const sql = "SELECT time_stamp,val,phase1,phase2,phase3 FROM employee1 where data_type='Active Power' ORDER BY time_stamp DESC LIMIT 3"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/reactive_power_graph",(req, res) => {
    // res.send('App Works !!!!');
    const sql = "SELECT time_stamp,val,phase1,phase2,phase3 FROM employee1 where data_type='Reactive Power' ORDER BY time_stamp DESC LIMIT 3"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });
  router.get("/apparent_power_graph",(req, res) => {
    // res.send('App Works !!!!');
    const sql = "SELECT time_stamp,val,phase1,phase2,phase3 FROM employee1 where data_type='Apparent Power' ORDER BY time_stamp DESC LIMIT 3"
    connection.query(sql, function(err, result, fields) {
      if (err) throw err;
      res.json(result);
      console.log({data:result});
    });
  });

  module.exports= router;