import React, { useState, useEffect, useRef } from 'react'
import { siteData } from '../data/siteData'

const WEDDING_VIDEOS = [
  '/videos/wedding/SaveClip.App_AQNPTV5d_sNt7MnfEAnfkToFT1NLrPrb3BWAgvpIUlbu63YH7q286fdMXTTMb5T8ZkAfhCRZCRAy6a9UASqfJ9ZeXiQ1trlhG8QLSe0.mp4',
  '/videos/wedding/SaveClip.App_AQMn6Kpds6uPRJ30LBeZbFH942ghsDDOM9MPF_Y6BdQl9Sk8OK6tMHS53GbPQ-JRIPUZNGIMTudYdcdr4P8LoXkrOG69_fyP4nZ1wiw.mp4',
  '/videos/wedding/SaveClip.App_AQNR7Oxsz6Kiad8HO2p5-FnZDYKxmNcl9O5MDx3QKylxnk6WPLcKIiDtpQXBLXNbOAausvatTsb38WrUL9EcxoVe92Ge3qjI8bStfaE.mp4',
]

const POSTER_FALLBACK =
  '/images/wedding/SaveClip.App_639670061_18344729272211321_6373495944714869894_n.jpg'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasError, setHasError] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const videoRef = useRef(null)
  const errorCountRef = useRef(0)
  const playedOnceRef = useRef(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(prefersReducedMotion.matches)
    const handleChange = (e) => setReduceMotion(e.matches)
    prefersReducedMotion.addEventListener('change', handleChange)
    return () => prefersReducedMotion.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    setHasError(false)
    errorCountRef.current = 0
  }, [currentIndex])

  const handleVideoEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % WEDDING_VIDEOS.length)
  }

  const handleVideoError = () => {
    errorCountRef.current += 1
    if (errorCountRef.current > WEDDING_VIDEOS.length) {
      setHasError(true)
      return
    }
    setCurrentIndex((prev) => (prev + 1) % WEDDING_VIDEOS.length)
  }

  const attemptPlay = (video) => {
    const playPromise = video.play()
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        errorCountRef.current += 1
        if (errorCountRef.current <= WEDDING_VIDEOS.length) {
          setCurrentIndex((prev) => (prev + 1) % WEDDING_VIDEOS.length)
        } else {
          setHasError(true)
        }
      })
    }
  }

  const handleCanPlay = () => {
    const video = videoRef.current
    if (video && video.paused && !playedOnceRef.current) {
      playedOnceRef.current = true
      attemptPlay(video)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.src = WEDDING_VIDEOS[currentIndex]
    video.load()
  }, [currentIndex])

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        {!reduceMotion && !hasError && WEDDING_VIDEOS.length > 0 && (
          <video
            ref={videoRef}
            className="hero-video"
            muted
            autoPlay
            playsInline
            preload="auto"
            poster={POSTER_FALLBACK}
            onEnded={handleVideoEnded}
            onError={handleVideoError}
            onCanPlay={handleCanPlay}
          >
            <source src={WEDDING_VIDEOS[currentIndex]} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        )}
        {(reduceMotion || hasError || WEDDING_VIDEOS.length === 0) && (
          <img
            src={POSTER_FALLBACK}
            alt="Wedding photography by Aurelia Studios"
            className="hero-image"
            loading="eager"
            fetchPriority="high"
          />
        )}
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">{siteData.hero.eyebrow}</p>
        <h1 className="hero-headline">{siteData.hero.headline}</h1>
        <p className="hero-subheadline">
          Candid moments, thoughtful portraits and cinematic wedding films.
        </p>
        <a href={siteData.hero.ctaPrimary.link} className="hero-cta">
          {siteData.hero.ctaPrimary.name}
        </a>
      </div>
    </section>
  )
}

export default Hero
