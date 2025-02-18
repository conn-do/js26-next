import Link from 'next/link'
import { client, Blog } from '@/lib/microcms'

export default async function Home() {
  const { contents: blogs } = await client.getList<Blog>({
    endpoint: 'blogs',
  })

  console.log(blogs)

  // const blogs = [
  //   { id: 'aaa', title: 'あいうえお' },
  //   { id: 'bbb', title: 'かきくけこ' },
  //   { id: 'ccc', title: 'さしすせそ' },
  // ]

  return (
    <div>
      <h1>TOPページ</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
