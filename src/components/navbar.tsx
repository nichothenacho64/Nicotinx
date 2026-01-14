import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-600 text-white">
            <div className="flex justify-between items-center mx-auto px-4 py-3 max-w-6xl">
                <div className="font-semibold nav-links-container">
                    <Link href="/">Nico</Link>
                </div>

                <div className="flex gap-20 text-lg nav-links-container">
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}