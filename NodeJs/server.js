const express = require("express");
const app = express();
const graph= require("./graph");
const accordion_parameter= require("./accordion_parameter");
const metercard= require("./metercard");
const table= require("./table");
const table_sort= require("./table_sort");
const table_filter= require("./table_filter");
bodyParser = require("body-parser");

port = 3080;

app.use(express.json());
app.use("/accordion_parameter",accordion_parameter);
app.use("/graph",graph);
app.use("/metercard",metercard);
app.use("/table",table);
app.use("/table_sort",table_sort);
app.use("/table_filter",table_filter);
app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});


