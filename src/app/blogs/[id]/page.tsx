import { client, Blog } from '@/lib/microcms'

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const blog = await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId: id,
  })

  return (
    <div>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      <div>
        カテゴリー:
        <a href={`/blogs/category/${blog.category.id}`}>{blog.category.name}</a>
      </div>
    </div>
  )
}
