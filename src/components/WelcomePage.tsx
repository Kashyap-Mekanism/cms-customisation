'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface WelcomePageProps {
  user: any
  payloadConfig: any
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ user, payloadConfig }) => {
  return (
    <div className="welcome-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <picture>
              <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/3.x/packages/ui/src/assets/payload-favicon.svg" />
              <Image
                alt="Payload Logo"
                height={80}
                src="https://raw.githubusercontent.com/payloadcms/payload/3.x/packages/ui/src/assets/payload-favicon.svg"
                width={80}
                priority
              />
            </picture>
          </div>

          <h1 className="hero-title">
            {user ? `Welcome back, ${user.email}! 👋` : 'Welcome to Your CMS 🚀'}
          </h1>

          <p className="hero-subtitle">
            {user
              ? 'You are logged in and ready to manage your content'
              : 'Get started with our powerful content management system'}
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <a
            href={payloadConfig.routes.admin}
            target="_blank"
            rel="noopener noreferrer"
            className="action-card admin-card"
          >
            <div className="action-icon">📊</div>
            <h3>Admin Dashboard</h3>
            <p>Manage collections, users, and content</p>
            <span className="action-link">Open →</span>
          </a>

          <a
            href="https://payloadcms.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="action-card docs-card"
          >
            <div className="action-icon">📚</div>
            <h3>Documentation</h3>
            <p>Learn how to use Payload CMS</p>
            <span className="action-link">Read →</span>
          </a>

          <a
            href="https://payloadcms.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="action-card blog-card"
          >
            <div className="action-icon">✍️</div>
            <h3>Blog</h3>
            <p>Latest updates and insights</p>
            <span className="action-link">Explore →</span>
          </a>

          <a
            href="https://github.com/payloadcms/payload"
            target="_blank"
            rel="noopener noreferrer"
            className="action-card github-card"
          >
            <div className="action-icon">💻</div>
            <h3>GitHub Repository</h3>
            <p>View source code and contribute</p>
            <span className="action-link">Visit →</span>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Payload CMS?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Blazing fast performance with Next.js and modern architecture</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Enterprise-grade security and authentication built-in</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎨</div>
            <h3>Customizable</h3>
            <p>Fully customizable UI and extensive API for your needs</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <h3>Responsive</h3>
            <p>Works seamlessly on desktop, tablet, and mobile devices</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🗄️</div>
            <h3>Database Agnostic</h3>
            <p>Support for MongoDB and PostgreSQL databases</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🌐</div>
            <h3>Headless Ready</h3>
            <p>Perfect for building modern web and mobile applications</p>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="getting-started">
        <h2>Getting Started</h2>
        <div className="getting-started-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Set Up Collections</h3>
            <p>Define your content structure using TypeScript in the admin dashboard</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Create Content</h3>
            <p>Add and manage your content through the intuitive admin interface</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Query & Display</h3>
            <p>Use the REST API or GraphQL to fetch and display your content</p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Deploy</h3>
            <p>Deploy your site to production with ease and confidence</p>
          </div>
        </div>
      </section>

      {/* User Status Section */}
      {user ? (
        <section className="user-status">
          <h3>You're All Set!</h3>
          <p>Your account is active and you can start managing content immediately.</p>
          <p className="user-email">
            Email: <strong>{user.email}</strong>
          </p>
        </section>
      ) : (
        <section className="user-status login-prompt">
          <h3>Want Full Access?</h3>
          <p>Log in to your account to unlock additional features and manage content.</p>
          <a
            href={payloadConfig.routes.admin}
            className="login-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign In Now
          </a>
        </section>
      )}

      {/* Footer */}
      <footer className="welcome-footer">
        <p>© 2024 Payload CMS. Built with ❤️</p>
        <div className="footer-links">
          <a href="https://payloadcms.com" target="_blank" rel="noopener noreferrer">
            Official Site
          </a>
          <a href="https://discord.gg/r6sCXqVk3d" target="_blank" rel="noopener noreferrer">
            Discord Community
          </a>
          <a href="https://twitter.com/payloadcms" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  )
}
