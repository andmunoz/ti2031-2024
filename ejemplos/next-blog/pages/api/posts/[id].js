export default function handler(req, res) {
    const { id } = req.query;
    const posts = [
        { 
          id: 1, 
          title: 'Primer artículo',
          body: 'Este es el primer artículo',
          author: "Yo",
        }, 
        { 
          id: 2, 
          title: 'Segundo artículo',
          body: 'Este es el segundo artículo',
          author: "Yo",
        }, 
        { 
          id: 3, 
          title: 'Tercer artículo',
          body: 'Este es el tercer artículo',
          author: "Yo",
        }, 
        { 
          id: 4, 
          title: 'Cuarto artículo',
          body: 'Este es el cuarto artículo',
          author: "Yo",
        }
    ];
    const post = posts.find((p) => p.id === parseInt(id));

    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found" });
    }    
}
  