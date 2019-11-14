const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();

const path = require("path");

const db = require("./config/database");

db.authenticate()
  .then(() => console.log("Database Connected!"))
  .catch(err => console.log(err));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const userRoutes = require("./routes/user");

app.use("/user", userRoutes);

app.get("/", (req, res) => res.redirect("/user/login"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
