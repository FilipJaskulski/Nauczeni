const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const { model } = require("../util/database");

const Trening = sequelize.define('Trening', {
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
module.exports = Trening;