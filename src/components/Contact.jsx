import React, { useState } from 'react'
import { siteData } from '../data/siteData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    venue: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setErrors({
      ...errors,
      [e.target.name]: '',
    })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.eventType.trim()) newErrors.eventType = 'Event type is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSubmitStatus(null)
      return
    }

    const whatsappNumber = siteData.contact.whatsapp
    const message = `*New Booking Enquiry - Aurelia Studios*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEvent Type: ${formData.eventType}\nEvent Date: ${formData.eventDate || 'Not specified'}\nVenue: ${formData.venue || 'Not specified'}\nMessage: ${formData.message || 'No message'}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`

    window.open(whatsappUrl, '_blank')
    setSubmitStatus('success')
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      venue: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">{siteData.contact.title}</h2>
        <p className="section-subtitle">{siteData.contact.subtitle}</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Ready to create something beautiful together? Reach out to discuss
              your vision and secure your date.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <strong>Email</strong>
                <a href={`mailto:${siteData.contact.info.email}`}>
                  {siteData.contact.info.email}
                </a>
              </div>
              <div className="contact-item">
                <strong>Phone</strong>
                <a href={`tel:${siteData.contact.info.phone}`}>
                  {siteData.contact.info.phone}
                </a>
              </div>
              <div className="contact-item">
                <strong>Studio Location</strong>
                {siteData.contact.info.address}
              </div>
            </div>

            <a
              href={`https://wa.me/${siteData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-primary"
              style={{ display: 'inline-block' }}
            >
              Chat on WhatsApp
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                aria-label="Full Name"
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                aria-label="Email Address"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                aria-label="Phone Number"
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>

            <div>
              <input
                type="text"
                name="eventType"
                placeholder="Event Type (Wedding, Pre-Wedding, etc.) *"
                value={formData.eventType}
                onChange={handleChange}
                aria-label="Event Type"
              />
              {errors.eventType && (
                <p className="error-message">{errors.eventType}</p>
              )}
            </div>

            <input
              type="date"
              name="eventDate"
              placeholder="Event Date"
              value={formData.eventDate}
              onChange={handleChange}
              aria-label="Event Date"
            />

            <input
              type="text"
              name="venue"
              placeholder="Venue/Location"
              value={formData.venue}
              onChange={handleChange}
              aria-label="Venue/Location"
            />

            <textarea
              name="message"
              placeholder="Tell us about your story and requirements..."
              value={formData.message}
              onChange={handleChange}
              aria-label="Message"
            ></textarea>

            <button type="submit">Send Enquiry</button>

            {submitStatus === 'success' && (
              <p className="success-message">
                Form submitted. Opening WhatsApp to complete your enquiry.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact