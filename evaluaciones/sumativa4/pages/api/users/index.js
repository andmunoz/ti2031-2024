import { openDb } from '../../../db';

export default async function handler(req, res) {
  const db = await openDb();

  if (req.method === 'GET') {
    const posts = await db.all('SELECT * FROM users');
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const { id, username, password, real_name, email } = req.body;
    await db.run('INSERT INTO users (id, username, password, real_name, email) VALUES (?, ?, ?, ?, ?)', [id, username, password, real_name, email]);
    res.status(201).json({ message: 'User created' });
  }
}