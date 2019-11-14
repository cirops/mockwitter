const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING,
      field: "first_name"
    },
    lastName: {
      type: Sequelize.STRING,
      field: "last_name"
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING
  },
  {
    freezeTableName: true,
    instanceMethods: {
      validPassword(password) {
        return password === this.password;
      }
    }
  }
);
module.exports = User;
