'use-client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CookiesProvider } from 'react-cookie'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notes App',
  description: 'Simple Note Application to write down notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  )
}
