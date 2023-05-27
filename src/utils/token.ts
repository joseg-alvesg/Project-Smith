import jwt from 'jsonwebtoken';
import { User } from '../types/User';

const secret = process.env.JWT_SECRET || 'secret';

function generateToken(user: User): string {
  const token = jwt.sign({ user }, secret, { expiresIn: '1d' });
  return token;
}

export default { generateToken };