import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <div className={`flex flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1>Administrador de Artículos</h1>
      <hr style={{ width: '100%' }} />
      { 
        posts && 
        posts.length > 0 &&
        posts.map((post) => {
          return (
            <li>
              <Link href={`/posts/${post.id}`}>{ post.title }</Link>
              ({ post.author })
            </li>
          )
        })
      }
    </div>
  );
}

export async function getStaticProps() {
  console.log("Get Server Side Props Running");
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}