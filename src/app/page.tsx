import Link from 'next/link'

import { client, Blog } from '@/lib/microcms'

export default async function Home() {
  const res = await client.get<{ contents: Blog[] }>({ endpoint: 'blogs' })

  console.log(res)

  // const blogs = [
  //   { id: 'aaa', title: '今日はさむい' },
  //   { id: 'bbb', title: '昨日は節分' },
  //   { id: 'ccc', title: '明日は平日' },
  // ]

  return (
    <div>
      <h1>ブログ一覧</h1>
      <ul>
        {res.contents.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
