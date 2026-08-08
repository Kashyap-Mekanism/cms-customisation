import React from 'react'

export const Logo: React.FC = () => {
  return (
    <div style={{ padding: '0.25rem 0' }}>
      <h1 className="editorial-logo" style={{ margin: 0 }}>
        The Daily<br />Chronicle<span className="editorial-logo-accent">.</span>
      </h1>
    </div>
  )
}
