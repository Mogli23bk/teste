import { Router } from 'express';
import { registerController, loginController } from '../controller/auth.controller';

const router = Router()

router.post("/rigister", registerController)

router.post("/login",loginController)