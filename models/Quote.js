const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Quote extends Model {}

//moved foreign keys to bottom, check comments
Quote.init(

  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    project_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     project_due_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userFirst: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userLast: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPhone: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
    client_first: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client_last: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client_phone: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
    client_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    client_address_2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    client_city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    client_state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    client_zip: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Quote',
  }
);

module.exports = Quote;