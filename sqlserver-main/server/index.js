import express from 'express';
import 'dotenv/config';
import { sequelize } from './db.js';
import { ClientModel } from './models/clientModel.js';
import { OrderModel } from './models/orderModel.js';
import { CartModel } from './models/cartModel.js';
import { ProductModel } from './models/productModel.js';
import cors from 'cors';
import router from './routes/router.js';

import './models/associations.js';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Server is running! Use /api/clients to access the API');
});

app.use('/api', router);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({ alter: true });
    console.log('All tables synchronized with database.');

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

start();