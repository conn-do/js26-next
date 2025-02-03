import './sample.css'

export default function SampleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="sample-wrapper">{children}</div>
}
