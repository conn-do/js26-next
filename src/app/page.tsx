import Link from 'next/link'

export default function Home() {
  const blogs = [
    { id: 1, title: '今日はさむい' },
    { id: 2, title: '昨日は節分' },
    { id: 3, title: '明日は平日' },
  ]

  return (
    <div>
      <h1>ブログ一覧</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
