import { Response, Request } from 'express';
import ordersServices from '../services/orders.services';

async function findAll(req: Request, res: Response): Promise<Response> {
  const data = await ordersServices.findAll();
  if (data.status !== 'SUCCESSFUL') {
    return res.status(400).json({ message: 'something went wrong' });
  }
  return res.status(200).json(data.data);
}

async function orderCreate(req: Request, res: Response): Promise<Response> {
  const { productIds, userId } = req.body;
  const data = await ordersServices.orderCreate({ productIds, userId });
  return res.status(201).json(data.data);
}

export default {
  findAll,
  orderCreate,
};
