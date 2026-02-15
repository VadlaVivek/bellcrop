const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Transaction = sequelize.define("Transaction", {
  title: DataTypes.STRING,
  amount: DataTypes.FLOAT,
  category: DataTypes.STRING,
  date: DataTypes.DATE,
  notes: DataTypes.TEXT,
  userId: DataTypes.INTEGER
});

module.exports = Transaction;
