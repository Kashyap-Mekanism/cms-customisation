import React from 'react'

export const BeforeDashboard: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        marginBottom: '3rem',
        padding: '3rem',
        borderRadius: '12px',
        overflow: 'hidden',
        color: 'var(--theme-elevation-800)',
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
      }}
    >
      {/* Background Image & Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/newsroom_banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(to right, var(--theme-bg) 0%, var(--theme-bg) 30%, transparent 100%)',
          zIndex: 1,
          opacity: 0.95,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            backgroundColor: '#2563eb',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            color: '#ffffff',
          }}
        >
          Editor Desk
        </div>
        <h2
          style={{
            margin: '0 0 1rem',
            fontFamily: '"Newsreader", Georgia, serif',
            fontSize: '2.5rem',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--theme-elevation-1000)',
          }}
        >
          Good morning. Here is today's overview.
        </h2>
        <p
          style={{
            margin: 0,
            color: 'var(--theme-elevation-400)',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Manage your top stories, media assets, and site content. Monitor recent activity and keep
          your readers informed with the latest updates.
        </p>
      </div>
    </div>
  )
}
