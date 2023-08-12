const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quote_Item extends Model {}

Quote_Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity : {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'service',
        key: 'id',
      },
    },
    quote_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'quote',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'quote_item',
  }

  );

  module.exports = Quote_Item;