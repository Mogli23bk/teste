import { request, Request, response, Response } from 'express';

// Importação correta usando named imports
import { register, login } from '../services/auth-servicies';
export const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, cpf } = request.body;
    const newUser = await register(name, email, password, cpf);
    response.status(201).json(newUser);
  } catch (error: any) {
    response.status(400).json({ error: error.message });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = request.body;
    const loginData = await login(email, password);
    response.status(200).json(loginData);
  } catch (error: any) {
    response.status(400).json({ error: error.message });
  }
};