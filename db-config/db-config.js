const sequelize = require("sequelize");
const sql = new sequelize('User_Management', 'root', 'password', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    sync: true,
    define: {
        paranoid: true
    }
});

sql.authenticate().catch(function(err) {
    if (err) {
      console.log("There is connection ERROR");
    }
  });

module.exports = sql;