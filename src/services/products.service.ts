import { Product } from '../types/Product';
import { ServiceResponse } from '../types/serviceResponse';
import productModel from '../database/models/product.model';

async function createProduct({
  name,
  price,
  orderId,
}: Product): Promise<ServiceResponse<Product>> {
  const data = await productModel.create({ name, price, orderId });
  if (!data) {
    return {
      status: 'INVALID_DATA',
      data: { message: 'something went wrong' },
    };
  }
  return { status: 'SUCCESSFUL', data: data.dataValues };
}

async function findAll(): Promise<ServiceResponse<Product[]>> {
  const data = await productModel.findAll();
  return { status: 'SUCCESSFUL', data: data.map((d) => d.dataValues) };
}

export default {
  createProduct,
  findAll,
};
