const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req.query.q);
  console.log(Buffer.from(req.query.q, "base64").toString("utf8"));
  console.log("--------------------------");
  res.end();
});

app.listen(3001);
