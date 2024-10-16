import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '../../lib/mongodb';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Метод не поддерживается' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Заполните все поля' });
  }

  const db = await connectToDatabase();

  // Поиск пользователя по email
  const user = await db.collection('users').findOne({ email });

  if (!user) {
    return res.status(400).json({ message: 'Неверные учетные данные' });
  }

  // Проверка пароля
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: 'Неверные учетные данные' });
  }

  // Создание JWT
  const token = jwt.sign(
    { email: user.email, userId: user._id },
    process.env.JWT_SECRET!,
    { expiresIn: '1h' }
  );

  // Отправка токена как cookie
  res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/`);

  return res.status(200).json({ message: 'Вход выполнен' });
}
