import { Router } from 'express';
import productCreateMiddlewares from '../middlewares/productCreate.middlewares';
import productController from '../controllers/product.controller';

const productRouter = Router();

productRouter.get('/', productController.findAll);
productRouter.post(
  '/',
  productCreateMiddlewares.validName,
  productCreateMiddlewares.validPrice,
  productController.createProduct,
);

export default productRouter;
