import React from 'react'
import { siteData } from '../data/siteData'

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title">{siteData.testimonials.title}</h2>
        <p className="section-subtitle">{siteData.testimonials.subtitle}</p>

        <div className="testimonials-grid">
          {siteData.testimonials.items.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials