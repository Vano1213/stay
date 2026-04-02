import { CartModel } from '../models/cartModel.js';


export const createCart = async (req, res) => {
    try {
        const cart = await CartModel.create(req.body);
        
        const { orderId, productId, ...cartData } = cart.toJSON();
        res.status(201).json(cartData);
    } catch (error) {
        console.error('Error creating cart:', error);
        res.status(500).json({ error: error.message });
    }
};


export const getAllCarts = async (req, res) => {
    try {
        const carts = await CartModel.findAll();

        const cartsData = carts.map(cart => {
            const { orderId, productId, ...cartData } = cart.toJSON();
            return cartData;
        });
        
        res.json(cartsData);
    } catch (error) {
        console.error('Error fetching carts:', error);
        res.status(500).json({ error: error.message });
    }
};


export const getCartById = async (req, res) => {
    try {
        const cart = await CartModel.findByPk(req.params.id);
        if (cart) {
            const { orderId, productId, ...cartData } = cart.toJSON();
            res.json(cartData);
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ error: error.message });
    }
};


export const updateCartPut = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, status, items, totalAmount } = req.body;
        
        const cart = await CartModel.findByPk(id);
        
        if (!cart) {
            return res.status(404).json({ error: 'корзина не найдена' });
        }
        

        await cart.update({
            date,
            status,
            items,
            totalAmount
        });
        
        const { orderId, productId, ...cartData } = cart.toJSON();
        res.json({ 
            message: 'корзина полностью обновлена', 
            cart: cartData 
        });
    } catch (error) {
        console.error('Error updating cart (PUT):', error);
        res.status(500).json({ error: error.message });
    }
};


export const updateCartPatch = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        const cart = await CartModel.findByPk(id);
        
        if (!cart) {
            return res.status(404).json({ error: 'крзина не найдена' });
        }
        

        await cart.update(updateData);
        
        const { orderId, productId, ...cartData } = cart.toJSON();
        res.json({ 
            message: 'корзина частична изменена', 
            cart: cartData 
        });
    } catch (error) {
        console.error('Error updating cart (PATCH):', error);
        res.status(500).json({ error: error.message });
    }
};


export const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deleted = await CartModel.destroy({
            where: { id: id }
        });
        
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (error) {
        console.error('Error deleting cart:', error);
        res.status(500).json({ error: error.message });
    }
};


export const clearCart = async (req, res) => {
    try {
        const { id } = req.params;
        
        const cart = await CartModel.findByPk(id);
        
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }
        

        await cart.update({
            items: [],
            totalAmount: 0
        });
        
        const { orderId, productId, ...cartData } = cart.toJSON();
        res.json({ 
            message: 'Cart cleared successfully', 
            cart: cartData 
        });
    } catch (error) {
        console.error('Error clearing cart:', error);
        res.status(500).json({ error: error.message });
    }
};


export const updateCart = async (req, res) => {
    try {
        const [updated] = await CartModel.update(req.body, {
            where: { id: req.params.id }
        });
        
        if (updated) {
            const updatedCart = await CartModel.findByPk(req.params.id);
            const { orderId, productId, ...cartData } = updatedCart.toJSON();
            res.json(cartData);
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (error) {
        console.error('Error updating cart:', error);
        res.status(500).json({ error: error.message });
    }
};