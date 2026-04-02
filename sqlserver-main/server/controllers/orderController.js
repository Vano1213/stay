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


export const updateOrderPut = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, status } = req.body;
        
        const order = await OrderModel.findByPk(id);
        
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        
        await order.update({
            date: date || order.date,
            status: status || order.status
        });
        
        const { clientId, ...orderWithoutClientId } = order.toJSON();
        res.json({ 
            message: 'Order fully updated', 
            order: orderWithoutClientId 
        });
    } catch (error) {
        console.error('Error updating order (PUT):', error);
        res.status(500).json({ error: error.message });
    }
};


export const updateOrderPatch = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        const order = await OrderModel.findByPk(id);
        
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        
        await order.update(updateData);
        
        const { clientId, ...orderWithoutClientId } = order.toJSON();
        res.json({ 
            message: 'Order partially updated', 
            order: orderWithoutClientId 
        });
    } catch (error) {
        console.error('Error updating order (PATCH):', error);
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
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        console.error('Error deleting order:', error);
        res.status(500).json({ error: error.message });
    }
};