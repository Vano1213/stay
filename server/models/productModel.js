import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const ProductModel = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  articul: {
    type: DataTypes.INTEGER,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL,
  },
  quantity: {
    type: DataTypes.INTEGER,
  }
}, {
  timestamps: false, // не создавать createdAt и updatedAt
});
