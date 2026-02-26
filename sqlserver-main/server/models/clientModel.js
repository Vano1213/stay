import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const Client = sequelize.define('Client', {   
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bday: {
        type: DataTypes.DATEONLY,   
        allowNull: true,
    },
    rating: {
        type: DataTypes.DECIMAL(5, 2), 
        allowNull: true,
    },
}, {
    tableName: 'clients',           
    timestamps: false,
});
