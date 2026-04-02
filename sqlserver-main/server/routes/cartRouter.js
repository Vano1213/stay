import express from 'express';
import {
    createCart,
    getAllCarts,
    getCartById,
    updateCartPut,
    updateCartPatch,
    deleteCart,
    clearCart
} from '../controllers/cartController.js';

const router = express.Router();


router.post('/', createCart);
router.get('/', getAllCarts);


router.get('/:id', getCartById);
router.put('/:id', updateCartPut);
router.patch('/:id', updateCartPatch);
router.delete('/:id', deleteCart);


router.patch('/:id/clear', clearCart);

export default router;