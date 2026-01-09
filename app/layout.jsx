import './globals.css'

export const metadata = {
  title: 'MVP Boilerplate',
  description: 'Next.js MVP boilerplate with Postgres, Docker, Auth, and Resend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

