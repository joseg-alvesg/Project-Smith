import { Response, Request } from 'express';
import ordersServices from '../services/orders.services';

// interface Product {
//   id: number,
// }

async function findAll(req: Request, res: Response): Promise<Response> {
  const data = await ordersServices.findAll();
  const result = data.map((order) => {
    const { productIds } = order.dataValues;
    const tt = productIds?.map(
      (t: any) => t.dataValues.id,
    );
    return {
      id: order.dataValues.id,
      userId: order.dataValues.userId,
      productIds: tt,
    };
  });
  return res.status(200).json(result);
}

export default {
  findAll,
};
