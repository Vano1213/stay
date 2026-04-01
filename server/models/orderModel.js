import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const OrderModel = sequelize.define('orders', {
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
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'), 
    defaultValue: 'pending' 
  },
});