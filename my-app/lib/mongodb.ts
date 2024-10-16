import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('Пожалуйста, добавьте MONGODB_URI в ваш .env.local файл');
}

if (!client) {
  client = new MongoClient(uri!);
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  // Возвращаем подключение
  return clientPromise.then((client) => client.db());
}
