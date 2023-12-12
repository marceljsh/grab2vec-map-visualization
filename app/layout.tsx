import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

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
        <div className="relative flex flex-col h-screen">
          <Navbar />
          <main className="container my-2 mx-auto max-w-7xl flex-grow">
            {children}
          </main>
          {/* footer */}
        </div>
      </body>
    </html>
  )
}
