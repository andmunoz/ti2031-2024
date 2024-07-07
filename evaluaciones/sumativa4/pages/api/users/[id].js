import { openDb } from '../../../db';

export default async function handler(req, res) {
  const db = await openDb();
  const { id } = req.query;

  if (req.method === 'GET') {
    const item = await db.get('SELECT * FROM users WHERE id = ?', [id]);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } else if (req.method === 'PUT') {
    const { username, password, real_name, email } = req.body;
    await db.run('UPDATE users SET username = ?, password = ?, real_name = ?, email = ? WHERE id = ?', [username, password, real_name, email, id]);
    res.status(200).json({ message: 'User updated' });
  } else if (req.method === 'DELETE') {
    await db.run('DELETE FROM users WHERE id = ?', [id]);
    res.status(200).json({ message: 'User deleted' });
  }
}