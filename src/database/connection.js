const { Sequelize } = require("sequelize");

const db = new Sequelize("db_holyways", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
  freezeTableName: true,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db; //gunakan di controller
