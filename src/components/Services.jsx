
import React from 'react'
import { siteData } from '../data/siteData'

const Services = () => {
  const services = siteData?.footer?.services || []

  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="section-eyebrow">What We Do</p>
        <h2 className="section-title">Photography & Cinematic Films</h2>
        <p className="section-subtitle">
          Thoughtful photography and films for weddings and meaningful
          celebrations.
        </p>

        <ul className="services-list">
          {services.map((item, index) => (
            <li key={index} className="services-list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services
