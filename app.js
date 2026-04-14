const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "mysql-31fbc075-honorzyramae-3338.e.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_UIVPVX6pSOHTRArUssi",
  database: "defaultdb",
  port: "13963"
});

app.get("/", (req, res) => {
  db.query("SELECT NOW()", (err, result) => {
    if (err) {
      res.send("Database connection failed");
    } else {
      res.send("Database Connected Successfully: " + result[0]["NOW()"]);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
