import { NextFunction, Request, Response } from 'express';

const login = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: '"username" and "password" are required' });
  }
  return next();
};

export default { login };