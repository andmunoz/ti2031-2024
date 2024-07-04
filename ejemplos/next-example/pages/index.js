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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        <Image
          className="relative"
          src="/programmer.webp"
          alt="Programmer"
          width={360}
          height={74}
          priority
        />
        
        <Link href="/dashboard">Link al Dashboard</Link>
        <Link href="/api/hello">Link a la API</Link>
        
      </div>
    </main>
  );
}
