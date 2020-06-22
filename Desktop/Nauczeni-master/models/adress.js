const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Address = sequelize.define("Address", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    country: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        notEmpty: true,
    },
    city: {
        type: Sequelize.STRING,
        autoIncrement: true,
        notEmpty: true,
    },
    postalcode: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        notEmpty: true,
    },
    street: {
        type: Sequelize.STRING, 
        autoIncrement: true,
        notEmpty: true,
    },
    buildingnumber: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        notEmpty: true,
    }
});
module.exports = Address;



