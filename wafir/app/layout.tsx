import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'وفير | Wafir - نظام مراقبة هدر الطعام والمياه',
  description: 'نحوّل بيانات الهدر إلى قرارات ذكية - الكويت',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: '#0A1628', minHeight: '100vh', fontFamily: "'Noto Sans Arabic', sans-serif" }}>
        <div style={{ display: 'flex', minHeight: '100vh', direction: 'rtl' }}>
          <Sidebar />
          <main style={{ flex: 1, marginRight: '240px', minHeight: '100vh', backgroundColor: '#0A1628' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
