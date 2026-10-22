import React, { useEffect, useState } from 'react'

const menuLinks = [
  { name: 'Home', link: '#hero' },
  { name: 'Gallery', link: '#gallery' },
  { name: 'Packages', link: '#packages' },
  { name: 'Contact', link: '#contact' },
]

const actionLink = { name: 'Book Us', link: '#contact' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a
          href="#hero"
          className="nav-logo"
          onClick={() => setIsOpen(false)}
          aria-label="Aurelia Studios home"
        >
          <span className="nav-logo-main">Aurelia</span>
          <span className="nav-logo-sub">STUDIOS</span>
        </a>

        <div className="nav-menu">
          {menuLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={actionLink.link}
            className="nav-link nav-book-link"
            onClick={() => setIsOpen(false)}
          >
            {actionLink.name}
          </a>
        </div>

        <button
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>
    </nav>
  )
}
