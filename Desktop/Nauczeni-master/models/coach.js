const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Coach= sequelize.define('Coach', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        autoIncrement: true,
        notEmpty: true,
    },
    discipline: {
        type: Sequelize.STRING,
        autoIncrement: true,
        notEmpty: true
    }
});
module.exports = Coach;