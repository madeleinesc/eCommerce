const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
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

    //key(column) -> product_id
    product_id: {
      //integer
      type: DataTypes.INTEGER,
      //refences the Product model's id
      references: {
        model: "Product", //Product table
        key: "id"}  //Product column -> primary key
    },

    //key(column) -> tag_id
    tag_id: {
      //integer
      type: DataTypes.INTEGER,
      //references the Tag model's id
      references: {
        model: "Tag",  //Tag table
        key: "id"}  //Tag column -> primary key
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

//export model (table)
module.exports = ProductTag;
