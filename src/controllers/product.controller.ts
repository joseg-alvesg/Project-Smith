import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const product = req.body;
  const data = await productsService.createProduct(product);
  if (data.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(data.status)).json(data.data.message);
  }
  return res.status(201).json(data.data);
}

async function findAll(req: Request, res: Response): Promise<Response> {
  const data = await productsService.findAll();
  return res.status(200).json(data.data);
}

export default {
  createProduct,
  findAll,
};
