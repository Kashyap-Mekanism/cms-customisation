'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  if (!resolvedTheme) {
    return <div style={{ width: 40, height: 40 }} />
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      style={{
        background: 'transparent',
        border: '1px solid var(--border)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--foreground)',
      }}
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}
