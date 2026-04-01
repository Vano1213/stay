import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js'; 

export const ClientModel = sequelize.define('clients', {
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
        type: DataTypes.DATE,
        allowNull: true,
    },
    rating: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
}, { 
    timestamps: false // если не нужны createdAt и updatedAt
});
