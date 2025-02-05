export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div>
      <h1>ID {id} の記事詳細ページ</h1>
    </div>
  )
}
