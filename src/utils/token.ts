import jwt from 'jsonwebtoken';
import { User } from '../types/User';

const secret = process.env.JWT_SECRET || 'secret';

function generateToken(user: User): string {
  const token = jwt.sign({ user }, secret, { expiresIn: '1d' });
  return token;
}

function decodeToken(token: string): User | string {
  try {
    const decoded = jwt.verify(token, secret) as User;
    return decoded;
  } catch (err) {
    return 'invalid token';
  }
}

export default { generateToken, decodeToken };