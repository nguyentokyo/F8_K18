import Link from "next/link";


export default function Navigation() {
    return (
        <nav className="flex-row flex-col p-2">
            <Link className="border border-1 p-2" href="/">Trang Chu</Link>
            <Link className="border border-1 p-2" href="/about">Gioi Thieu</Link>
            <Link className="border border-1 p-2" href="/product">Product</Link>
        </nav>
    )
}
