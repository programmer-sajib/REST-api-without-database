/* <====================Imported Modules====================> */
require("dotenv").config({ path: "./configs/.env" });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Router = require("./routes/user.route.js");


/* <====================app====================> */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));

/* <====================Error Handling ====================> */

app.use("/", Router);

app.use("*", (req, res, next) => {
  res.status(404).json({ message: "404 Page Not Found!" });
});

app.use((err, req, res, next) => {
  res
    .status(500)
    .json({ message: "500 Internal Server Errors!", foundError: err.message });
  console.log(err);
});

/* <====================Server Listening On====================> */
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
