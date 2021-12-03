const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

//model to represent mysql table
Category.init(
  {
    //key(column) -> id
    id: {
      //integer
      type: DataTypes.INTEGER,
      //doesnt allow null values
      allowNull: false,
      //set as primary key
      primaryKey: true,
      //uses auto increment
      autoIncrement: true,
    },

    //key(column) -> category_name
    category_name: {
      //string
      type: DataTypes.STRING,
      //doesnt allow null values
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false, 
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

//export model (table)
module.exports = Category;
