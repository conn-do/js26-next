import Link from 'next/link'

export default function Home() {
  const blogs = [
    { id: 'aaa', title: 'あいうえお' },
    { id: 'bbb', title: 'かきくけこ' },
    { id: 'ccc', title: 'さしすせそ' },
  ]

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
