/* <====================Imported Modules====================> */
require("dotenv").config({ path: "./configs/.env" });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Router } = require("./Routes/user.route");
const { home } = require("./Controllers/users.controller");

/* <====================app====================> */

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/api/users", Router);

/* <====================Error Handling ====================> */

app.get("/", (req, res) => {
  res.redirect("/api/users");
});

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
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
