import { openDb } from '../../../db';

export default async function handler(req, res) {
  const db = await openDb();

  if (req.method === 'GET') {
    const posts = await db.all('SELECT * FROM posts');
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const { title, body, author } = req.body;
    const lastPost = await db.all('SELECT max(id) as id FROM posts');
    const id = lastPost.id + 1;
    await db.run('INSERT INTO posts (id, title, body, author) VALUES (?, ?, ?, ?)', [id, title, body, author]);
    res.status(201).json({ message: 'Post created' });
  }
}
