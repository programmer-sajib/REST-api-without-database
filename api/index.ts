import router from "../routes/user.route";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Vercel");
});
app.use(router);
app.listen(3000, () => {
  console.log("server running");
});
module.exports = app;
