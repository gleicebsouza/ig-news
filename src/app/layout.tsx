// _app.tsx
import '../styles/global.scss'

export const metadata = {
  title: 'ig.news',
  description: 'Home | ig.news'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
