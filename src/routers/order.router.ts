import { Router } from 'express';
import tokenValidation from '../middlewares/token.validation';
import orderMiddleware from '../middlewares/order.middleware';
import ordersControllers from '../controllers/orders.controllers';

const orderRouter = Router();

orderRouter.get('/', ordersControllers.findAll);
orderRouter.post(
  '/',
  tokenValidation.tokenValid,
  orderMiddleware.userIdValid,
  orderMiddleware.productIdsValid,
  ordersControllers.orderCreate,
);

export default orderRouter;
