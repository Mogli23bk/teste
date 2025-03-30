import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../prisma/prisma-client";

const JWT_SECRET = process.env.JWT_SECRET!;

// Registrar novo usuário
export async function register(name: string, email: string, password: string, cpf: string) {
  try {
    const [existingEmail, existingCpf] = await Promise.all([
      prisma.user.findByEmail({ where: { email } }),
      prisma.user.findByCpf({ where: { cpf } }),
    ]);

    if (existingEmail) {
      throw new Error('Email já cadastrado');
    }

    if (existingCpf) {
      throw new Error('CPF já cadastrado');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        cpf,
        avatar: 'default-avatar.png',
        experience: 0,  // Ajuste o nome conforme seu schema (experience ou xp)
        level: 1,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        createdAt: true,
      },
    });

    return newUser;

  } catch (error) {
    console.error('Erro no registro:', error);
    throw error;
  }
}

// Login do usuário
export async function login(email: string, password: string) {
  try {
    const user = await prisma.user.findByEmail({ where: { email } });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Senha incorreta");
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });

    return { token, user: { id: user.id, name: user.name, email: user.email, avatar: user.avatar } };

  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
}
