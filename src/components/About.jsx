import React from 'react'
import { siteData } from '../data/siteData'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-image-wrapper">
            <img
              src={siteData.about.image}
              alt="Aurelia Studios team"
              className="about-image"
              loading="lazy"
            />
          </div>
          <div className="about-text"><p className="section-eyebrow">{siteData.about.eyebrow}</p>
            <h2 className="section-title">{siteData.about.title}</h2>
            {siteData.about.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          <div className="about-cta"><a href={siteData.about.cta.link} className="hero-cta-primary">{siteData.about.cta.name}</a></div></div></div></div></section>
  )
}

export default About