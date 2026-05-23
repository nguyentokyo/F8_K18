import Link from "next/link";
import BackButton from "@/component/button/button";

export default async function ProductDetail(
    { params,}: { params: Promise<{ id: number }> }) {
    const { id } = await params

    return (
        <div>
            <h1>Product ID: {id}</h1>
            <Link href="/product">Quay lại</Link>
            <BackButton />
        </div>
    )
}