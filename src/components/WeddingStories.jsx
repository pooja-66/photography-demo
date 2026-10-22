import React from 'react'
import { siteData } from '../data/siteData'

const WeddingStories = () => {
  return (
    <section id="wedding-stories" className="section portfolio">
      <div className="container">
        <h2 className="section-title">{siteData.weddingStories.title}</h2>
        <p className="section-subtitle">{siteData.weddingStories.subtitle}</p>

        <div className="portfolio-grid">
          {siteData.weddingStories.items.map((story, index) => (
            <div
              key={story.id}
              className={`portfolio-item ${index % 3 === 1 ? 'wide' : ''}`}
            >
              <img
                src={story.image}
                alt={story.title}
                className="portfolio-image"
                loading="lazy"
              />
              <div className="portfolio-overlay">
                <span className="portfolio-category">
                  {story.title} • {story.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeddingStories