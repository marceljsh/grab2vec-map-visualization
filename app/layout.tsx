import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grab2Vec',
  description: 'Next Spatio-Temporal Location Prediction with Deep Learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' min-h-screen bg-stone-900'}>
        <main className="max-w-7xl min-h-screen mx-auto py-4">
          {children}
        </main>
      </body>
    </html>
  )
}
