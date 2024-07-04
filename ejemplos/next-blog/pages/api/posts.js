export default function handler(req, res) {
  res.status(200).json(
    [
      { 
        id: 1, 
        title: 'Primer artículo',
        author: "Yo",
      }, 
      { 
        id: 2, 
        title: 'Segundo artículo',
        author: "Yo",
      }, 
      { 
        id: 3, 
        title: 'Tercer artículo',
        author: "Yo",
      }, 
      { 
        id: 4, 
        title: 'Cuarto artículo',
        author: "Yo",
      }
    ]   
  );
}
