import React from 'react'
import './styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

import { ThemeProvider } from './ThemeProvider'
import { ThemeToggle } from '../../components/ThemeToggle'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <ThemeToggle />
          </div>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
