const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
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

    //key(column) -> tag_name
    tag_name: {
      //string
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

//export model (table)
module.exports = Tag;
