
import { ClientModel } from './clientModel.js';
import { OrderModel } from './orderModel.js';
import { CartModel } from './cartModel.js';
import { ProductModel } from './productModel.js';


ClientModel.hasMany(OrderModel, {
  foreignKey: 'clientId',
  as: 'orders'
});


OrderModel.belongsTo(ClientModel, {
  foreignKey: 'clientId',
  as: 'client'
});


OrderModel.belongsToMany(ProductModel, {
  through: CartModel,
  foreignKey: 'orderId',
  otherKey: 'productId',
  as: 'products'
});


ProductModel.belongsToMany(OrderModel, {
  through: CartModel,
  foreignKey: 'productId',
  otherKey: 'orderId',
  as: 'orders'
});

export default {};