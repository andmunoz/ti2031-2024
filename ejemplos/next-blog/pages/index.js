import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <div className={`${inter.className}`}>
      <div className="text-center font-mono text-3xl font-extrabold tracking-wider m-8">
        Bienvenidos a mi Blog
      </div>
      <hr style={{ width: '100%' }} />
      <div className="container">
      { 
        posts && 
        posts.length > 0 &&
        posts.map((post) => {
          return (
            <p className="m-3">
              <Link href={`/posts/${post.id}`}>{ post.title }</Link>
              ({ post.author })
            </p>
          )
        })
      }
      </div>
      <hr style={{ width: '100%' }} />
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