import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <main className={`flex flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1>Todos los Artículos</h1>
      <hr style={{ width: '100%' }} />
      { 
        posts && 
        posts.length > 0 &&
        posts.map((post) => {
          return (
            <li>{ post.title } ({ post.author })</li>
          )
        })
      }
    </main>
  );
}

export async function getServerSideProps() {
  console.log("Get Server Side Props Running");
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}