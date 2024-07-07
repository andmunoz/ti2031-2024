import { openDb } from '../../../db';

export default async function handler(req, res) {
  const db = await openDb();

  if (req.method === 'GET') {
    const posts = await db.all('SELECT * FROM products');
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const { id, code, category, name, description, location, availability, timebox } = req.body;
    await db.run('INSERT INTO products (id, code, category, name, description, location, availability, timebox) VALUES (?, ?, ?, ?, ?)', [id, code, category, name, description, location, availability, timebox]);
    res.status(201).json({ message: 'Product created' });
  }
}