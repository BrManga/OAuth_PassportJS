const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const passportSetup = require("./config/passport-setup");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");

//Connect to MongoDB
mongoose.connect(
  keys.mongodb.dbURI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to MONGODB");
  }
);
//cookie Session
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "ejs");

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("app now listening on 3000");
});
