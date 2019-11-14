const db = require("../config/database");
const User = require("../models/User");

exports.getUserLogin = (req, res) => {
  res.render("login");
};

exports.postUserLogin = (req, res) => {
  let { email, password } = req.body;
  User.findAll({
    where: {
      email: email
    }
  })
    .then(result => {
      let messages = [];
      let errors = [];
      if (result.length > 0) {
        if (result[0].password !== password) {
          errors.push({ text: "Password incorrect.", class: "error" });
        }
      } else {
        errors.push({
          text: "No profile found for that email.",
          class: "error"
        });
      }
      if (errors.length > 0) {
        messages = errors;
      } else {
        messages = [
          { text: "You have succesfully logged in!", class: "success" }
        ];
      }

      res.render("login", { messages });
    })
    .catch(err => console.log("Error: " + err));
  //   res.redirect("/user/login");
};

exports.getAddDummyUser = (req, res) => {
  const data = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    password: "qwerty123"
  };

  let { firstName, lastName, email, password } = data;

  User.create({
    firstName,
    lastName,
    email,
    password
  })
    .then(user => res.send("Dummy User Created!"))
    .catch(err => console.log(err));
};
