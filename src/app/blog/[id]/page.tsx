export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const { id } = await params

  return (
    <div>
      <h1>記事ID {id} のブログを表示するよ</h1>
    </div>
  )
}
