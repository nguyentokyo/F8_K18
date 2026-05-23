export default async function UserDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    return (
        <div>
            <h1>User Detail</h1>
            <h2>user {id}</h2>
        </div>
    )
}