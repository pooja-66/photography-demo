import React, { useState } from 'react'
import { siteData } from '../data/siteData'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const filteredItems =
    activeFilter === 'All'
      ? siteData.portfolio.items
      : siteData.portfolio.items.filter((item) => item.category === activeFilter)

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const navigateImage = (direction) => {
    if (direction === 'prev') {
      setCurrentImage(
        (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
      )
    } else {
      setCurrentImage((prev) => (prev + 1) % filteredItems.length)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') navigateImage('prev')
    if (e.key === 'ArrowRight') navigateImage('next')
  }

  React.useEffect(() => {
    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxOpen])

  return (
    <>
      <section id="portfolio" className="section portfolio">
        <div className="container"><p className="section-eyebrow">{siteData.portfolio.eyebrow}</p>
          <h2 className="section-title">{siteData.portfolio.title}</h2>
          <p className="section-subtitle">{siteData.portfolio.subtitle}</p>

          <div className="portfolio-filters">
            {siteData.portfolio.filters.map((filter, index) => (
              <button
                key={index}
                className={`portfolio-filter-btn ${
                  activeFilter === filter ? 'active' : ''
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`portfolio-item ${item.wide ? 'wide' : ''}`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.image}
                  alt={`${item.category} photography`}
                  className="portfolio-image"
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-category">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
<div className="portfolio-cta"><a href={siteData.portfolio.cta.link} className="hero-cta-primary">{siteData.portfolio.cta.name}</a></div>
</div>
</section>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[currentImage].image}
              alt={filteredItems[currentImage].category}
              className="lightbox-image"
            />
          </div>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}

export default Portfolio