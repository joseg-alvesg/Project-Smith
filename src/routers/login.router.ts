import { Router } from 'express';
import loginController from '../controllers/login.controllers';
import loginMiddleware from '../middlewares/login';

const loginRouter = Router();

loginRouter.post('/', loginMiddleware.login, loginController.login);

export default loginRouter;