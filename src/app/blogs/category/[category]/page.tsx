import { client, Blog } from '@/lib/microcms'
import { Category } from '@/lib/microcms'

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: categoryId } = await params
  const category = await client.getListDetail<Category>({
    endpoint: 'categories',
    contentId: categoryId,
  })
  const { contents: blogs } = await client.getList<Blog>({
    endpoint: 'blogs',
    queries: { filters: `category[equals]${category.id}` },
  })

  console.log(blogs)

  return (
    <div>
      <h1>{category.name}</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <a href={`/blogs/${blog.id}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
