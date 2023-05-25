import { Product } from 'src/types/Product';
import { ServiceResponse } from '../../types/serviceResponse';
import productModel from '../models/product.model';

async function createProduct({ name, price, orderId }: Product): Promise<ServiceResponse<Product>> {
  const data = await productModel.create({ name, price, orderId });
  if (!data) return { status: 'INVALID_DATA', data: { message: 'something went wrong' } };
  return { status: 'SUCCESSFUL', data: data.dataValues };
}

export default {
  createProduct,
};