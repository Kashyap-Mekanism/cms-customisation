import React from 'react'

export const Icon: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'var(--theme-elevation-800)',
        color: 'var(--theme-elevation-0)',
        width: '100%',
        height: '100%',
        minWidth: '32px',
        minHeight: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Newsreader", Georgia, serif',
        fontWeight: 'bold',
        fontSize: '20px',
        borderRadius: '2px',
      }}
    >
      TDC
    </div>
  )
}
