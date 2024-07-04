import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="mb-32 grid text-center lg:max-w-1xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        Hola Mundo        
        <Link href="/">Link a la Página Principal</Link>
      </div>
        
    </main>
  );
}
