import { OrderModel } from '../models/orderModel.js';

export const createOrder = async (req, res) => {
    try {
        const { date, status } = req.body;
        
        const order = await OrderModel.create({ 
            date: date || new Date(),
            status: status || 'pending'
        });
        

        const { clientId, ...orderWithoutClientId } = order.toJSON();
        res.status(201).json(orderWithoutClientId);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: error.message });
    }
};

export const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderModel.findAll({
            order: [['date', 'DESC']]
        });
        

        const ordersWithoutClientId = orders.map(order => {
            const { clientId, ...rest } = order.toJSON();
            return rest;
        });
        
        res.json(ordersWithoutClientId);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: error.message });
    }
};

export const getOrderById = async (req, res) => {
    try {
        const order = await OrderModel.findByPk(req.params.id);
        if (order) {
            const { clientId, ...orderWithoutClientId } = order.toJSON();
            res.json(orderWithoutClientId);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ error: error.message });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const { date, status } = req.body;
        
        const [updated] = await OrderModel.update(
            { date, status },
            { where: { id: req.params.id } }
        );
        
        if (updated) {
            const updatedOrder = await OrderModel.findByPk(req.params.id);
            const { clientId, ...orderWithoutClientId } = updatedOrder.toJSON();
            res.json(orderWithoutClientId);
        } else {
            res.status(404).json({ error: 'заказ не найден' });
        }
    } catch (error) {
        console.error('ошибка обновления заказ:', error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const deleted = await OrderModel.destroy({
            where: { id: req.params.id }
        });
        
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'заказ не нйаден' });
        }
    } catch (error) {
        console.error('ошибка удаления заказа:', error);
        res.status(500).json({ error: error.message });
    }
};