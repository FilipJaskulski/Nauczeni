const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Discipline = sequelize.define("Discipline", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
module.exports = Discipline;
