import React from 'react'
import { siteData } from '../data/siteData'

const { eyebrow, title, subtitle, items, custom } = siteData.packages

export default function Packages() {
  return (
    <section id="packages" className="section packages" aria-label="Wedding packages">
      <div className="container">
        <div className="packages-header">
          <p className="packages-eyebrow">{eyebrow}</p>
          <h2 className="packages-title">{title}</h2>
          <p className="packages-subtitle">{subtitle}</p>
        </div>

        <div className="package-grid">
          {items.map((pkg) => (
            <article key={pkg.id} className="package-card">
              {pkg.badge && <span className="package-badge">{pkg.badge}</span>}
              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-price">{pkg.price}</p>
              <p className="package-coverage">{pkg.coverage}</p>
              <p className="package-best-for">{pkg.bestFor}</p>
              <p className="package-description">{pkg.description}</p>
              <ul className="package-deliverables">
                {pkg.deliverables.map((deliverable, index) => (
                  <li key={index}>{deliverable}</li>
                ))}
              </ul>
              <div className="package-ctas">
                <a href="#contact" className="package-btn package-btn-primary">
                  {pkg.cta}
                </a>
                <a href="#contact" className="package-btn package-btn-secondary">
                  {pkg.secondaryCta}
                </a>
              </div>
            </article>
          ))}
        </div>

        {custom && (
          <div className="package-custom">
            <p className="package-custom-heading">{custom.heading}</p>
            <p className="package-custom-subheading">{custom.subheading}</p>
            <p className="package-custom-description">{custom.description}</p>
            <a href="#contact" className="package-btn package-btn-primary">
              {custom.cta}
            </a>
            <p className="package-custom-note">{custom.note}</p>
          </div>
        )}
      </div>
    </section>
  )
}
