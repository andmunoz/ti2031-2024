// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
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
    ]   
  );
}
