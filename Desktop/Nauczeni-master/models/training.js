const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const { model } = require("../util/database");

const Training = sequelize.define('Training', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date_time: {
        type: Sequelize.DATE,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    isComplted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})
module.exports = Training;