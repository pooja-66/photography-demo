import React from 'react'
import { siteData } from '../data/siteData'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">{siteData.brand}</div>
            <p className="footer-desc">{siteData.footer.description}</p>
            <div className="footer-social">
              {siteData.footer.social.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Gallery</h4>
            <div className="footer-links">
              {siteData.footer.links.map((link, index) => (
                <a key={index} href={link.link}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Packages</h4>
            <div className="footer-links">
              {siteData.footer.services.map((service, index) => (
                <a key={index} href="#packages">
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="footer-contact">
              <p>Get in touch to discuss your plans.</p>
              {siteData.contact.info.email && (
                <p>
                  <a href={`mailto:${siteData.contact.info.email}`}>
                    {siteData.contact.info.email}
                  </a>
                </p>
              )}
              {siteData.contact.info.phone && (
                <p>
                  <a href={`tel:${siteData.contact.info.phone}`}>
                    {siteData.contact.info.phone}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Aurelia Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
