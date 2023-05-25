import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const product = req.body;
  const data = await productsService.createProduct(product);
  console.log(data);
  
  return res.status(201).json(data.data);
}

export default {
  createProduct,
};