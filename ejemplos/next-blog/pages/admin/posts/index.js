import { Inter } from "next/font/google";
import { useState, useEffect } from 'react';
import PostForm from '../../../components/postform';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Se preparan las variables del modelo virtual
  const [posts, setPosts] = useState([]);
  const [actualPost, setActualPost] = useState(null);

  // Se obtienen los posts desde el servicio API y se agregan al modelo
  const fetchPosts = async () => {
    const response = await fetch('/api/posts');
    const data = await response.json();
    setPosts(data);
  };

  // Se actualizan los posts cuando ocurre un cambio de estado 
  useEffect(() => {
    fetchPosts();
  }, []);

  // Maneja la presentación de un post para edición
  const handleEdit = (post) => {
    setActualPost(post);
  };

  // Realiza el eliminado del artículo actual para edición
  const handleReset = () => {
    setActualPost(null);
  };

  // Realiza el borrado de un post
  const handleDelete = async (id) => {
    await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
    fetchPosts();
  };

  // Devuelve la estructura de la página con la referencia al formulario
  return (
    <div className={`flex flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="text-center font-mono text-3xl font-extrabold tracking-wider m-8">
        Administración de Artículos
      </div>
      <hr style={{ width: '100%' }} />
      <PostForm post={ actualPost } onSubmit={ fetchPosts } onReset={ handleReset }></PostForm>
      <hr style={{ width: '100%' }} />
      <div className="container">
        <table className="table-fixed" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            { 
              posts && 
              posts.length > 0 &&
              posts.map((post) => {
                return (
                  <tr key={post.id}>
                    <td>{ post.title }</td>
                    <td>{ post.author }</td>
                    <td>
                      <button className="m-2" onClick={() => handleEdit(post)}>Editar</button>
                      <button className="m-2" onClick={() => handleDelete(post.id)}>Eliminar</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <hr style={{ width: '100%' }} />
    </div>
  );
}