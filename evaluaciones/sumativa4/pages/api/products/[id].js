import { openDb } from '../../../db';

export default async function handler(req, res) {
  const db = await openDb();
  const { id } = req.query;

  if (req.method === 'GET') {
    const item = await db.get('SELECT * FROM products WHERE id = ?', [id]);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } else if (req.method === 'PUT') {
    const { code, category, name, description, location, availability, timebox } = req.body;
    await db.run('UPDATE products SET code = ?, category = ?, name = ?, description = ?, location = ?, availability = ?, timebox = ? WHERE id = ?', [code, category, name, description, location, availability, timebox, id]);
    res.status(200).json({ message: 'Product updated' });
  } else if (req.method === 'DELETE') {
    await db.run('DELETE FROM products WHERE id = ?', [id]);
    res.status(200).json({ message: 'Product deleted' });
  }
}