import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '../../lib/mongodb';

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Метод не поддерживается' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Заполните все поля' });
  }

  const db = await connectToDatabase();

  // Проверка, существует ли пользователь
  const userExists = await db.collection('users').findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
  }

  // Хеширование пароля
  const hashedPassword = await bcrypt.hash(password, 10);

  // Сохранение пользователя
  const newUser = await db.collection('users').insertOne({
    email,
    password: hashedPassword,
  });

  return res.status(201).json({ message: 'Пользователь зарегистрирован', userId: newUser.insertedId });
}
