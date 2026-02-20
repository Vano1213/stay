// const express = require('express') синхронный модуль common.js
//esm
import express from 'express'
import 'dotenv/config'
import { sequelize } from './db.js'
import { Client } from './models/clientModel.js'
//import { Users} from './models/users.js'
const app = express()
const port = process.env.SERVER_PORT
const start = async () => {
    try { // конструкция безопасности кода
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('connection has been established successfully.');
    app.listen(port, () => {
    console.log(`Сервер запущен http://localhost:${port}`)
})

} catch (error) {
    console.error('Unable to connect to the database', error);
}
}

//Маршрут с Api endpoint GET
// app.get('/', (req, res) => {
 // res.send('Hello World!')
// })
// вызывается функция listen для прослушивания порта и запуска сервера
start()