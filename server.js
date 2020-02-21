const express = require("express");
const app = express();
const connectDb = require("./config/mongoose");
connectDb();

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(8000, () => console.log("Server is listening on port no 8000"));
