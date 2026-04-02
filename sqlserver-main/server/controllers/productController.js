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
        console.error('ошибка получения продуктов:', error);
        res.status(500).json({ error: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        
        if (!product) {
            return res.status(404).json({ message: 'Продукт не найден' });
        }
        
        res.json(product);
    } catch (error) {
        console.error('ошибка получения продукта:', error);
        res.status(500).json({ error: error.message });
    }
};

export const updateProductPut = async (req, res) => {
    try {
        const { id } = req.params;
        const { articul, name, description, price, quantity } = req.body;
        
        const product = await Product.findByPk(id);
        
        if (!product) {
            return res.status(404).json({ message: 'Продукт не найден' });
        }
        
        await product.update({
            articul,
            name,
            description,
            price,
            quantity
        });
        
        res.json({ message: 'Продукт полностью обновлен', product });
    } catch (error) {
        console.error('ошибка обновления продукта (PUT):', error);
        res.status(500).json({ error: error.message });
    }
};

export const updateProductPatch = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        const product = await Product.findByPk(id);
        
        if (!product) {
            return res.status(404).json({ message: 'Продукт не найден' });
        }
        
        await product.update(updateData);
        
        res.json({ message: 'Продукт частично обновлен', product });
    } catch (error) {
        console.error('ошибка обновления продукта (PATCH):', error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        
        const product = await Product.findByPk(id);
        
        if (!product) {
            return res.status(404).json({ message: 'Продукт не найден' });
        }
        
        await product.destroy();
        
        res.json({ message: 'Продукт успешно удален' });
    } catch (error) {
        console.error('ошибка удаления продукта:', error);
        res.status(500).json({ error: error.message });
    }
};