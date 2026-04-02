import { Router } from "express";
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductPut,
    updateProductPatch,
    deleteProduct
} from '../controllers/productController.js';

const productRouter = Router();


productRouter.route('/')
    .get(getAllProducts)
    .post(createProduct);


productRouter.route('/:id')
    .get(getProductById)
    .put(updateProductPut)
    .patch(updateProductPatch)
    .delete(deleteProduct);

export default productRouter;