import { openDb } from '../../db';

export default async function handler(req, res) {
  const db = await openDb();

  if (req.method === 'GET') {
    const posts = await db.all('SELECT * FROM posts');
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    await db.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content]);
    res.status(201).json({ message: 'Post created' });
  }
}
