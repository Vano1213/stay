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