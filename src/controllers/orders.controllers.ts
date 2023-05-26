import { Response, Request } from 'express';
import ordersServices from '../services/orders.services';

async function findAll(req: Request, res: Response): Promise<Response> {
  const data = await ordersServices.findAll();
  if (data.status !== 'SUCCESSFUL') {
    return res.status(400).json({ message: 'something went wrong' });
  }
  return res.status(200).json(data.data);
}

export default {
  findAll,
};
