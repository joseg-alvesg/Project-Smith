import { OrderWithId } from '../types/Order';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/serviceResponse';

async function findAll(): Promise<ServiceResponse<OrderWithId[]>> {
  const data = await OrderModel.findAll({
    include: { model: ProductModel, as: 'productIds' },
  });
  const organizeOrders: OrderWithId[] = data.map(({ dataValues }) => ({
    id: dataValues.id,
    userId: dataValues.userId,
    productIds: dataValues.productIds?.map((e) => e.id),
  }));
  
  return { status: 'SUCCESSFUL', data: organizeOrders };
}

export default {
  findAll,
};
