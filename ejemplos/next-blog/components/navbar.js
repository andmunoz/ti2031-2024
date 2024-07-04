import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return (
        <main className="mb-32 grid text-center lg:max-w-8xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-center">
            <Link href="/">Página Principal</Link>
            <Link href="/about">Sobre el Blog</Link>
            <Link href="/api/posts">Datos Json</Link>
        </main>
    )
}