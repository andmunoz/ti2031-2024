import { openDb } from '../../../db';

export default async function handler(req, res) {
  const db = await openDb();
  const { id } = req.query;

  if (req.method === 'GET') {
    const post = await db.get('SELECT * FROM posts WHERE id = ?', [id]);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } else if (req.method === 'PUT') {
    const { title, body, author } = req.body;
    await db.run('UPDATE posts SET title = ?, body = ?, author = ? WHERE id = ?', [title, body, author, id]);
    res.status(200).json({ message: 'Post updated' });
  } else if (req.method === 'DELETE') {
    await db.run('DELETE FROM posts WHERE id = ?', [id]);
    res.status(200).json({ message: 'Post deleted' });
  }
}