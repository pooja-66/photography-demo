import React from 'react'

const WEDDING_IMAGES = [
  'SaveClip.App_639670061_18344729272211321_6373495944714869894_n.jpg',
  'SaveClip.App_657551310_18142339180500774_4802232004838942982_n.jpg',
  'SaveClip.App_658177605_18142339198500774_4823865749761307303_n.jpg',
  'SaveClip.App_658842484_18586534012044106_2809456869556165624_n.jpg',
  'SaveClip.App_661327633_18142339189500774_6361949767672270104_n.jpg',
  'SaveClip.App_661493284_18313923553258570_919412985614204449_n.jpg',
  'SaveClip.App_662832378_18313923541258570_3738648963782592502_n.jpg',
  'SaveClip.App_669948894_18313923532258570_3476704247452762614_n.jpg',
  'SaveClip.App_671144386_18387555310095961_1873105949217545813_n.jpg',
  'SaveClip.App_672344066_18387555331095961_2511090101829597392_n.jpg',
  'SaveClip.App_672410974_18458332354102359_8802881131142943485_n.jpg',
  'SaveClip.App_683603951_18586533991044106_7136649206261169688_n.jpg',
  'SaveClip.App_683971618_18586534003044106_8155013704072469889_n.jpg',
  'SaveClip.App_684069416_18586533982044106_7748864528515821691_n.jpg',
  'SaveClip.App_733042315_18110160284282316_3142019556172136689_n.jpg',
  'SaveClip.App_733211148_18110160272282316_8802592723485253694_n.jpg',
  'SaveClip.App_795438488_18341831758254268_8022812680414060454_n.jpg',
  'SaveClip.App_799440191_18107504714600456_1660270957231545709_n.jpg',
  'SaveClip.App_799561412_18107504642600456_2413121128305632333_n.jpg',
  'SaveClip.App_799908572_18107504780600456_292185117419381842_n.jpg',
  'SaveClip.App_812940971_18341831725254268_7250634984783933794_n.jpg',
  'SaveClip.App_813332679_18341831743254268_6554032106273811317_n.jpg',
]

export default function WeddingGallery() {
  return (
    <section id="gallery" className="section wedding-gallery" aria-label="Wedding photography gallery">
      <div className="container">
        <div className="gallery-header">
          <p className="gallery-eyebrow">Wedding Gallery</p>
          <h2 className="gallery-title">Moments From Your Celebration</h2>
          <p className="gallery-subtitle">
            Candid moments, thoughtful portraits, and timeless details from the
            weddings we have documented.
          </p>
        </div>
        <div className="gallery-grid">
          {WEDDING_IMAGES.map((file, index) => (
            <div key={file} className="gallery-item">
              <img
                src={`/images/wedding/${file}`}
                alt={`Wedding photography by Aurelia Studios ${index + 1}`}
                className="gallery-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
