import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Post({ post }) {
    return (
    <main className={`flex flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1>Título: { post.title }</h1>
      <hr style={{ width: '100%' }} />
      <p>{ post.body }</p>
      <p>Autor: { post.author }</p>
    </main>
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
  console.log("Get Server Side Props Running");
  const res = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  const post = await res.json();
  console.log(post);
  return { props: { post } };
}