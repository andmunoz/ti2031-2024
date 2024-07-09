import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Post({ post }) {
    return (
      <div className={`${inter.className}`}>
        <div className="text-center font-mono text-3xl font-extrabold tracking-wider m-8">
          Bienvenidos a mi Blog
        </div>
        <hr style={{ width: '100%' }} />
        <div className="container">
          <p className="m-2">Título: {post.title}</p>
          <p className="m-2">{post.body}</p>
          <p className="m-2">Autor: {post.author}</p>
        </div>
        <hr style={{ width: '100%' }} />
      </div>
    );
  }

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/posts');
    const posts = await res.json();
  
    const paths = posts.map(post => ({
      params: { id: post.id.toString() },
    }));
  
    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  const post = await res.json();
  return { props: { post } };
}