import { ProductModel as Product } from '../models/productModel.js';

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.error('ошибка создания продукта:', error);
        res.status(500).json({ error: error.message });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error('ошибка схватывания предметов:', error);
        res.status(500).json({ error: error.message });
    }
};