const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const keys = require("./config/keys");
//Connect to MongoDB
mongoose.connect(
  keys.mongodb.dbURI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to MONGODB");
  }
);

app.set("view engine", "ejs");

app.use("/auth", authRoutes);
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("app now listening on 3000");
});
