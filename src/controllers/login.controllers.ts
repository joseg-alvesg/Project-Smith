import { Request, Response } from 'express';
import loginService from '../services/login.services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  const findUser = await loginService.login({ username, password });
  if (findUser.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(findUser.status)).json(findUser.data);
  }
  return res.status(200).json({ token: findUser.data });
}

export default { login };