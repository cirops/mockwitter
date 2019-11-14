const Sequelize = require("sequelize");

const db_info = {
  host: "localhost",
  username: "your db user here",
  password: "your password here",
  port: "3306"
};

// Option 1: Passing parameters separately
module.exports = new Sequelize(
  `mysql://${db_info["username"]}:${db_info["password"]}@${db_info["host"]}:${db_info["port"]}/mockwitter`
);
