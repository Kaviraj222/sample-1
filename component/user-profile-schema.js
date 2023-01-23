const db = require("../db-config/db-config");
const Sequelize = require("sequelize");
const Book = db.define('UserProfile', {
  name: Sequelize.STRING,
  dob: Sequelize.DATE,
  gender: Sequelize.STRING,
  maritalStatus: Sequelize.STRING,
  phone: Sequelize.STRING,
  aadharNumber: Sequelize.INTEGER
},
  {
    paranoid: true,
    underscored: true,
    timestamps: false
  }
);
Book.sync();

module.exports = { Book };