import { NextFunction, Request, Response } from 'express';
import token from '../utils/token';

const tokenValid = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const decode = token.decodeToken(authorization);

  if (decode === 'invalid token') {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

export default { tokenValid };
