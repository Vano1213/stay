import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const CartModel = sequelize.define('carts', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  date: { 
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW 
  },
  status: { 
    type: DataTypes.ENUM('active', 'completed'), 
    defaultValue: 'active' 
  },
  items: {
    type: DataTypes.JSON, 
    allowNull: true,
    defaultValue: []
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  }
}, {
  timestamps: true,
});