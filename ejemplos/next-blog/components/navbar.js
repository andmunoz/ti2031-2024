import Link from "next/link";

export default function NavBar() {
    return (
        <main className="mb-32 grid text-center lg:max-w-8xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center">
            <Link className="ring-red-2 hover:bg-red-800 transform motion-safe:hover:scale-110" href="/">Página Principal</Link>
            <Link className="ring-red-2 hover:bg-red-800 transform motion-safe:hover:scale-110" href="/admin/posts">Administración</Link>
            <Link className="ring-red-2 hover:bg-red-800 transform motion-safe:hover:scale-110" href="/about">Sobre el Blog</Link>
            <Link className="ring-red-2 hover:bg-red-800 transform motion-safe:hover:scale-110" href="/api/posts">Datos Json</Link>
        </main>
    )
}