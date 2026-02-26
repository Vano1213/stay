import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

export const Order = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'NEW' 
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  paymentMethod: {
    type: DataTypes.STRING
  },
  deliveryAddress: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});
