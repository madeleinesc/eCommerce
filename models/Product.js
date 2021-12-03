// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
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

    //key(column) -> product_name
    product_name: {
      //string
      type: DataTypes.STRING,
      //doesnt allow null values
      allowNull: false,
    },

    //key(column) -> price
    price: {
      //decimal
      type: DataTypes.DECIMAL,
      //doesnt allow null values
      allowNull: false,
      //validates that the value is a decimal
      validate: {
        isDecimal: true} //checks for any numbers
    },

    //key(column) -> stock
    stock: {
      //integer
      type: DataTypes.INTEGER,
      //doesnt allow null values
      allowNull: false, 
      //set a default value of 10
      defaultValue: 10,
      //validates that the value is numeric
      validate: {
        isNumeric: true} //will only allow numbers
    },

    //key(column) -> category_id
    category_id: {
      //integer
      type: DataTypes.INTEGER,
      //references the Category model's id
      references: {
        model: "Category", //Category table
        key: "id"}  //Category column -> primary key
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

//export model (table)
module.exports = Product;
