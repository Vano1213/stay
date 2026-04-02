import express from 'express';
import {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrderPut,
    updateOrderPatch,
    deleteOrder
} from '../controllers/orderController.js';

const router = express.Router();


router.post('/', createOrder);
router.get('/', getAllOrders);


router.get('/:id', getOrderById);
router.put('/:id', updateOrderPut);
router.patch('/:id', updateOrderPatch);
router.delete('/:id', deleteOrder);

export default router;