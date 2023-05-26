import { Router } from 'express';
import ordersControllers from '../controllers/orders.controllers';

const orderRouter = Router();

orderRouter.get('/', ordersControllers.findAll);

export default orderRouter;