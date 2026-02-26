import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

export const Cart = sequelize.define('cart', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  items: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  totalItems: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});

