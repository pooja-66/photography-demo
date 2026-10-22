import React from 'react'
import { siteData } from '../data/siteData'

const Films = () => {
  return (
    <section id="films" className="section about">
      <div className="container">
        <h2 className="section-title">{siteData.films.title}</h2>
        <p className="section-subtitle">{siteData.films.subtitle}</p>

        <div className="about-content" style={{ marginTop: '60px' }}>
          <div className="about-image-wrapper">
            <img
              src={siteData.films.posterImage}
              alt="Cinematic wedding film"
              className="about-image"
              loading="lazy"
            />
          </div>
          <div className="about-text">
            <h3 className="service-title" style={{ textAlign: 'left', fontSize: '2rem' }}>
              Cinematic Storytelling
            </h3>
            <p>
              Our films are crafted with a cinematic eye, blending natural moments
              with artistic vision to create a film that feels intimate and grand
              all at once.
            </p>
            <p>
              Each frame is carefully composed, each transition thoughtfully
              paced, and each story uniquely told through the lens of emotion and
              beauty.
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              Demo content - Video playback requires a legitimate video source.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Films