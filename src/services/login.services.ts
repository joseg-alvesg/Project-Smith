import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { Login } from '../types/User';
import { ServiceResponse } from '../types/serviceResponse';
import tokenUtils from '../utils/token';

async function login(userInfos: Login): Promise<ServiceResponse<string>> {
  const { username, password } = userInfos;
  const findUser = await UserModel.findOne({ where: { username } });
  if (!findUser) {
    return {
      status: 'UNAUTHORIZED',
      data: { message: 'Username or password invalid' },
    };
  }
  const test = bcrypt.compareSync(password, findUser.dataValues.password);
  if (!test) {
    return {
      status: 'UNAUTHORIZED',
      data: { message: 'Username or password invalid' },
    };
  }

  const token = tokenUtils.generateToken(findUser.dataValues);
  return { status: 'SUCCESSFUL', data: token };
}

export default {
  login,
};
