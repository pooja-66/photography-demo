// Sample site data for Aurelia Studios
export const siteData = {
  brand: 'Aurelia Studios',
  logo: 'Aurelia Studios',

  navLinks: [
    { name: 'Home', link: '#hero' },
    { name: 'Gallery', link: '#gallery' },
    { name: 'Packages', link: '#packages' },
    { name: 'Contact', link: '#contact' },
  ],

  hero: {
    eyebrow: 'Wedding Photography & Cinematic Films',
    headline: 'Wedding Photography & Films, Told Beautifully',
    subheadline:
      'Candid moments, thoughtful portraits and cinematic wedding films that preserve the feeling of your celebration. Explore our approach, discover our collections and tell us what you are planning.',
    ctaPrimary: { name: 'Book Your Date', link: '#contact' },
    ctaSecondary: { name: 'Discover Our Approach', link: '#gallery' },
    supportingText: 'Wedding celebrations Â· Personal stories Â· Cinematic memories',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=3840&auto=format&fit=crop',
  },

  about: {
    eyebrow: 'The Art of Your Story',
    title: 'Wedding Photography & Films, Made Personal.',
    content: [
      'Every celebration has its own rhythm, emotions and unforgettable details. We capture the moments as they naturally unfold, combining documentary-style photography with carefully considered portraits and cinematic storytelling.',
    ],
    cta: { name: 'Tell Us Your Vision', link: '#contact' },
    image:
      'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2400&auto=format&fit=crop',
  },

  portfolio: {
    eyebrow: 'Selected Work / 20 Photographs',
    title: 'Less Posing. More Feeling.',
    subtitle:
      'A collection of moments, details and stories to inspire your own celebration.',
    cta: { name: 'Explore the Collection', link: '#portfolio' },
    filters: ['All', 'Wedding', 'Pre-Wedding', 'Engagement', 'Portraits', 'Events'],
    items: [
      {
        id: 1,
        category: 'Wedding',
        image:
          'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2400&auto=format&fit=crop',
        wide: false,
      },
      {
        id: 2,
        category: 'Pre-Wedding',
        image:
          'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2400&auto=format&fit=crop',
        wide: true,
      },
      {
        id: 3,
        category: 'Engagement',
        image:
          'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2400&auto=format&fit=crop',
        wide: false,
      },
      {
        id: 4,
        category: 'Wedding',
        image:
          'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2400&auto=format&fit=crop',
        wide: false,
      },
      {
        id: 5,
        category: 'Portraits',
        image:
          'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2400&auto=format&fit=crop',
        wide: true,
      },
      {
        id: 6,
        category: 'Events',
        image:
          'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2400&auto=format&fit=crop',
        wide: false,
      },
      {
        id: 7,
        category: 'Pre-Wedding',
        image:
          'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2400&auto=format&fit=crop',
        wide: false,
      },
      {
        id: 8,
        category: 'Engagement',
        image:
          'https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=2400&auto=format&fit=crop',
        wide: true,
      },
      {
        id: 9,
        category: 'Wedding',
        image:
          'https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?q=80&w=2400&auto=format&fit=crop',
        wide: false,
      },
    ],
  },

  whoWeWorkWith: {
    eyebrow: 'Who This Is For',
    title: 'Made Around Your Celebration.',
    items: [
      {
        id: 1,
        number: '01',
        title: 'Engaged Couples',
        description: 'For couples who want photographs that feel natural, personal and true to them.',
      },
      {
        id: 2,
        number: '02',
        title: 'Multi-Day Celebrations',
        description: 'Thoughtful coverage of ceremonies, family gatherings, pre-wedding events and receptions.',
      },
      {
        id: 3,
        number: '03',
        title: 'Destination Celebrations',
        description: 'A dedicated team ready to discuss celebrations wherever your plans take you.',
      },
      {
        id: 4,
        number: '04',
        title: 'Families & Planners',
        description: 'Clear coordination to capture important rituals, family connections and spontaneous moments.',
      },
    ],
  },

  packages: {
    eyebrow: 'Choose Your Experience',
    title: 'How Would You Like Your Story Told?',
    subtitle: 'Thoughtful coverage, clear deliverables and flexible options to make the experience your own.',
    items: [
      {
        id: 1,
        name: 'Intimate Celebration',
        badge: null,
        bestFor: 'Couples planning a small ceremony, a simple wedding or a single-day celebration.',
        coverage: 'Single-day coverage',
        price: '₹80,000',
        paymentNote: 'Reserve your date with a 20% advance, or ask about the full-payment option.',
        description: 'For intimate celebrations where every meaningful detail deserves to be remembered.',
        deliverables: [
          '2 photographers', '2 videographers', 'Drone cinematography, subject to availability and permissions', 'Edited photographs',
          '3–5 minute cinematic film', 'Traditional wedding film', 'Online gallery for sharing photographs with guests', 'Pen drive', 'Printed album'
        ],
        cta: 'Choose This Package',
        secondaryCta: 'Enquire About This Package',
      },
      {
        id: 2,
        name: 'Complete Celebration',
        badge: 'Most Chosen',
        bestFor: 'Couples who want the important moments of their wedding day documented as one complete story.',
        coverage: 'Full-day coverage',
        price: '₹1,20,000',
        paymentNote: 'Reserve your date with a 20% advance, or ask about the full-payment option.',
        description: 'A balanced collection of photography and films to preserve the celebration from beginning to end.',
        deliverables: [
          '2 photographers', '2 videographers', 'Drone cinematography, subject to availability and permissions', 'Edited photographs',
          '8–10 minute cinematic film', 'Traditional wedding film', 'Pre-wedding consultation', 'Online gallery for sharing photographs with guests', 'Premium printed album'
        ],
        cta: 'Choose This Package',
        secondaryCta: 'Enquire About This Package',
      },
      {
        id: 3,
        name: 'Grand & Multi-Day Celebration',
        badge: null,
        bestFor: 'Families planning multiple ceremonies and celebrations across several days.',
        coverage: 'Multi-day coverage',
        price: '₹2,00,000',
        paymentNote: 'Reserve your date with a 20% advance, or ask about the full-payment option.',
        description: 'An extended storytelling experience for celebrations that unfold over several days.',
        deliverables: [
          '3 photographers', '2 videographers', 'Multi-day coverage', 'Drone cinematography, subject to availability and permissions', 'Edited photographs',
          '12–15 minute cinematic feature film', 'Half-day pre-wedding shoot', 'Online gallery for sharing photographs with guests', 'Hardcover printed album'
        ],
        cta: 'Choose This Package',
        secondaryCta: 'Enquire About This Package',
      },
    ],
    custom: {
      heading: 'Something Different in Mind?',
      subheading: "Let's Create a Package Around You.",
      description: 'Tell us about your celebration and the moments you want captured. We can discuss a custom collection that fits your plans.',
      cta: 'Plan a Custom Shoot',
      note: 'Final coverage, travel requirements and deliverables will be confirmed before booking.',
    },
  },
  films: { title: "Cinematic Films", subtitle: "A glimpse into our cinematic storytelling - capturing the emotion and grandeur of your day through film.", posterImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=3840&auto=format&fit=crop", videoSrc: "" },

  weddingStories: {
    title: "Wedding Stories",
    subtitle: "Featured celebrations told with care, emotion and a cinematic eye.",
    items: [
      { id: 1, title: "A Tale of Timeless Grace", location: "", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2400&auto=format&fit=crop" },
      { id: 2, title: "A Celebration of Love", location: "", image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2400&auto=format&fit=crop" },
      { id: 3, title: "Sunset Romance", location: "", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2400&auto=format&fit=crop" }
    ]
  },
  experience:{eyebrow:"The Experience",title:"Clear From the Start. Calm on the Day.",items:[{id:1,number:"01",title:"Meet & Understand",description:"We learn about your story, priorities, celebration and the moments that matter most."},{id:2,number:"02",title:"Plan Every Chapter",description:"We discuss the schedule, important rituals, coverage requirements and creative direction."},{id:3,number:"03",title:"Enjoy the Celebration",description:"Be present with your people while we document the meaningful moments as they happen."},{id:4,number:"04",title:"Relive It Beautifully",description:"Your photographs and films are carefully edited and prepared for you to revisit and share."}]},
  faq: {
    eyebrow: 'The Practical Details',
    title: "A Little Clarity. Then Let's Create.",
    items: [
      {
        q: 'How much does wedding photography cost?',
        a: 'Pricing depends on the selected package and final requirements.'
      },
      {
        q: 'What is included in a wedding photography and videography package?',
        a: 'Each package lists deliverables; we can discuss specifics for your celebration.'
      },
      {
        q: 'Can I view examples of your wedding photography?',
        a: 'Explore the portfolio to see examples of the style and storytelling.'
      },
      {
        q: 'How do I enquire about availability and book a date?',
        a: 'Use the enquiry form to start a conversation about your date.'
      },
      {
        q: 'How does the planning process work?',
        a: 'We discuss your priorities, plan the details, document the celebration, and deliver your images and films.'
      }
    ]
  },
  ctaFinal:{eyebrow:'Your Next Chapter',title:"Let's Make Your Story Unforgettable.",description:'Every celebration deserves to be remembered in its own way. Start a conversation about your plans and the experience you have in mind.',primary:{name:'Start an Enquiry',link:'#contact'},secondary:{name:'Explore Our Work',link:'#portfolio'}},
  testimonials: {
    title: 'Kind Words',
    subtitle:
      'Heartfelt testimonials from couples who trusted us to capture their most precious moments.',
    items: [
      {
        id: 1,
        text: 'Aurelia Studios captured our wedding beautifully. Every photo tells a story, and we relive our day every time we look through them.',
        author: 'Priya & Arjun',
      },
      {
        id: 2,
        text: 'The cinematic film they created left us speechless. Professional, creative, and truly passionate about their craft.',
        author: 'Neha & Rohit',
      },
      {
        id: 3,
        text: 'Timeless, elegant, and full of emotion. Aurelia Studios exceeded all our expectations in every way.',
        author: 'Ananya & Vikram',
      },
    ],
  },

  contact: {
    title: "Your Story, Beautifully Remembered.",
    subtitle:
      'Start a conversation about your plans and the experience you have in mind.',
    info: { email: "", phone: "", address: "" },
    whatsapp: '919876543210',
  },

  footer: {
    description:
      'Photography and films for weddings, people and meaningful celebrations, created with a cinematic eye and a personal approach.',
    links: [
      { name: 'Gallery', link: '#gallery' },
      { name: 'Packages', link: '#packages' },
      { name: 'Contact', link: '#contact' },
    ],
    services: [
      'Wedding Photography',
      'Cinematic Wedding Films',
      'Pre-Wedding Shoots',
      'Engagement Sessions',
    ],
    social: [
      { name: 'Instagram', link: '#' },
      { name: 'Facebook', link: '#' },
      { name: 'Pinterest', link: '#' },
      { name: 'Vimeo', link: '#' },
    ],
  },
}







