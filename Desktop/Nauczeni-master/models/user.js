const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    notEmpty: true
  },
  email: { 
      type: Sequelize.STRING,
      allowNull: false },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_login: {
    type: Sequelize.DATE
  },
  status: {
    type: Sequelize.ENUM("active", "inactive"),
    defaultValue: "active"
  },
  role: {
    type: Sequelize.ENUM("user", "coach", "admin"),
    defaultValue: "user"
  }
});
module.exports = User;