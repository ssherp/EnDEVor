// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Quote_Item extends Model { }

// Quote_Item.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     quantity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     item_name: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     subtotal: {
//       type: DataTypes.FLOAT(10, 2),
//       allowNull: false,
//     },
//     quote_id: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//       references: {
//         model: 'quote',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'quote_item',
//   }

// );

module.exports = Quote_Item;