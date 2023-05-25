import { Router } from 'express';
import productController from '../database/controllers/product.controller';

const productRouter = Router();

productRouter.post('/', productController.createProduct);

export default productRouter;