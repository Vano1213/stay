import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js'; // Исправлен путь

export const Client = sequelize.define('clients', {
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
}, { // Добавлена запятая и открывающая скобка для options
    // Опции модели (можно оставить пустым)
    timestamps: false // если не нужны createdAt и updatedAt
});
