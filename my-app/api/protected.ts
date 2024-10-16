import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default async function protectedRoute(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Нет доступа' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return res.status(200).json({ message: 'Доступ разрешён', user: decoded });
  } catch (error) {
    return res.status(401).json({ message: 'Неверный токен' });
  }
}
