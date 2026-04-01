import express from 'express';
import {
    createCart,
    getAllCarts
} from '../controllers/cartController.js';

const router = express.Router();

router.post('/', createCart);
router.get('/', getAllCarts);

export default router;