
const STORAGE_KEYS = {
  leads: "trance_leads",
  analytics: "trance_analytics",
  talentStatus: "trance_talent_status",
  admin: "trance_admin_session"
};

const ADMIN_ACCESS_CODE = "trance2026";
const WHATSAPP_NUMBER = "918056918656";
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const STATUS_VALUES = ["Available", "Hold", "Touring"];
const REVEAL_SELECTORS = [
  ".page-hero .container > *",
  ".hero-copy-block > *",
  ".hero-card-stack > *",
  ".page-section > .container > *",
  ".service-card",
  ".talent-card",
  ".case-card",
  ".metric-card",
  ".surface-card",
  ".showcase-card",
  ".feature-card",
  ".quote-card",
  ".playbook-card",
  ".timeline-card",
  ".admin-card",
  ".stat-card",
  ".client-badge",
  ".cta-banner",
  ".info-panel",
  ".form-panel",
  ".hero-side-card"
];

let revealObserver = null;
let revealMutationObserver = null;

const EVENT_LABELS = {
  college_fest: "College Fest",
  corporate_event: "Corporate Event",
  guest_lecture: "Guest Lecture",
  brand_launch: "Brand Launch",
  private_concert: "Private Concert",
  institutional_event: "Institutional Event"
};

const CATEGORY_LABELS = {
  actors: "Actors",
  djs: "DJs",
  speakers: "Speakers",
  influencers: "Influencers",
  mixed: "Mixed lineup"
};

const TRUSTED_BY = [
  "North Axis University",
  "Asterion Consulting",
  "Harbor Life",
  "Aurora Tech",
  "FutureMinds Institute",
  "Metro Forum"
];

const TESTIMONIALS = [
  {
    quote:
      "The shortlist was practical from day one. We were not shown impossible options just to impress us.",
    name: "Ritika Sharma",
    role: "Cultural Secretary, North Axis University"
  },
  {
    quote:
      "What stood out was control. The event felt polished because every backstage handoff was already thought through.",
    name: "Aditi Menon",
    role: "Experience Lead, Asterion Consulting"
  },
  {
    quote:
      "We needed both credibility and energy. The Trance team understood the tone of the room before suggesting a speaker.",
    name: "Karthik Iyer",
    role: "Program Manager, FutureMinds Institute"
  }
];

const HERO_ROTATION_MS = 2800;

const GLOBAL_HERO_BACKGROUNDS = [
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=1800",
    position: "center 48%"
  },
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1800",
    position: "center 44%"
  },
  {
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1800",
    position: "center 46%"
  },
  {
    src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1800",
    position: "center 40%"
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1800",
    position: "center 36%"
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1800",
    position: "center 34%"
  }
];

const HERO_GALLERIES = {
  home: [
    {
      src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1800",
      position: "center 52%"
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178f50002cbc?auto=format&fit=crop&q=80&w=1800",
      position: "center 48%"
    },
    {
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1800",
      position: "center 34%"
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1800",
      position: "center 38%"
    }
  ],
  "services.html": [
    {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1800",
      position: "center 44%"
    },
    {
      src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1800",
      position: "center 46%"
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178f50002cbc?auto=format&fit=crop&q=80&w=1800",
      position: "center 48%"
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1800",
      position: "center 28%"
    }
  ],
  "talent.html": [
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1800",
      position: "center 48%"
    },
    {
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1800",
      position: "center 52%"
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1800",
      position: "center 38%"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1800",
      position: "center 36%"
    }
  ],
  "events.html": [
    {
      src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1800",
      position: "center 52%"
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1800",
      position: "center 50%"
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178f50002cbc?auto=format&fit=crop&q=80&w=1800",
      position: "center 48%"
    },
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1800",
      position: "center 46%"
    }
  ],
  "estimator.html": [
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1800",
      position: "center 28%"
    },
    {
      src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1800",
      position: "center 22%"
    },
    {
      src: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    }
  ],
  "booking.html": [
    {
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1800",
      position: "center 34%"
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178f50002cbc?auto=format&fit=crop&q=80&w=1800",
      position: "center 48%"
    },
    {
      src: "https://images.unsplash.com/photo-1633356713897-ef5651d6dcc1?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    },
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1800",
      position: "center 46%"
    }
  ],
  "contact.html": [
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1800",
      position: "center 28%"
    },
    {
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1800",
      position: "center 34%"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1800",
      position: "center 36%"
    }
  ],
  "planning-flow.html": [
    {
      src: "https://images.unsplash.com/photo-1633356713897-ef5651d6dcc1?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    },
    {
      src: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1800",
      position: "center 28%"
    },
    {
      src: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&q=80&w=1800",
      position: "center 46%"
    }
  ],
  "platform.html": [
    {
      src: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    },
    {
      src: "https://images.unsplash.com/photo-1633356713897-ef5651d6dcc1?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1800",
      position: "center 28%"
    },
    {
      src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1800",
      position: "center 46%"
    }
  ],
  "admin.html": [
    {
      src: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    },
    {
      src: "https://images.unsplash.com/photo-1633356713897-ef5651d6dcc1?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    },
    {
      src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1800",
      position: "center 22%"
    }
  ],
  "admin-leads.html": [
    {
      src: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    },
    {
      src: "https://images.unsplash.com/photo-1633356713897-ef5651d6dcc1?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1800",
      position: "center 28%"
    }
  ],
  "admin-roster.html": [
    {
      src: "https://images.unsplash.com/photo-1633356713897-ef5651d6dcc1?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1800",
      position: "center 48%"
    },
    {
      src: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    }
  ],
  "admin-analytics.html": [
    {
      src: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1800",
      position: "center 38%"
    },
    {
      src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1800",
      position: "center 22%"
    }
  ],
  "service:celebrity-booking": [
    {
      src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1800",
      position: "center 52%"
    },
    {
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1800",
      position: "center 52%"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1800",
      position: "center 38%"
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178f50002cbc?auto=format&fit=crop&q=80&w=1800",
      position: "center 48%"
    }
  ],
  "service:college-fest-management": [
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1800",
      position: "center 52%"
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1800",
      position: "center 48%"
    },
    {
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1800",
      position: "center 52%"
    },
    {
      src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1800",
      position: "center 52%"
    }
  ],
  "service:corporate-events": [
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1800",
      position: "center 34%"
    },
    {
      src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1800",
      position: "center 46%"
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178f50002cbc?auto=format&fit=crop&q=80&w=1800",
      position: "center 38%"
    },
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1800",
      position: "center 46%"
    }
  ],
  "service:guest-lectures": [
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1800",
      position: "center 36%"
    },
    {
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1800",
      position: "center 34%"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1800",
      position: "center 34%"
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1800",
      position: "center 38%"
    }
  ],
  "service:artist-coordination": [
    {
      src: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&q=80&w=1800",
      position: "center 42%"
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1800",
      position: "center 46%"
    },
    {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1800",
      position: "center 46%"
    }
  ],
  default: [
    {
      src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1800",
      position: "center 46%"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1800",
      position: "center 34%"
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178f50002cbc?auto=format&fit=crop&q=80&w=1800",
      position: "center 48%"
    }
  ]
};

const SERVICES = [
  {
    slug: "celebrity-booking",
    page: "celebrity.html",
    title: "Celebrity Booking",
    label: "Headline talent",
    short:
      "Source and confirm the right face for a launch, college night, or high-visibility event.",
    kicker:
      "The high-pressure lane for star talent, clean negotiations, and sponsor-ready appearances.",
    summary:
      "This service is for teams that need recognizable talent to lift attendance, sponsor confidence, or media value. We handle shortlist logic, commercial positioning, backups, rider management, and execution so the process stays controlled instead of dramatic.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1200",
    imagePosition: "center 52%",
    formats: ["College headliner nights", "Brand launches", "Corporate galas", "Festival showcases"],
    checklist: [
      "Audience, city, and commercial band are approved",
      "Primary and backup talent are shortlisted",
      "Rider, travel, and hospitality are aligned",
      "Sponsor moments are locked before announcement"
    ],
    deliverables: [
      ["Shortlist logic", "Recommendations based on audience pull, vibe, timing, and budget reality."],
      ["Commercial handling", "Fee positioning and approvals managed with decision-makers in mind."],
      ["Talent operations", "Travel, stay, rider, backstage, and call-sheet discipline covered."],
      ["Execution support", "One lane for stage timing, press windows, and last-minute changes."]
    ]
  },
  {
    slug: "college-fest-management",
    page: "college-fest.html",
    title: "College Fest Management",
    label: "Campus execution",
    short:
      "Build and run a campus event with stronger control over stage flow, crowd movement, and sponsor beats.",
    kicker:
      "For campuses that need hype without chaos and approvals without confusion.",
    summary:
      "College events look simple from the audience side but are operationally messy underneath. This service pulls together talent, production, permissions, sponsor moments, security rhythm, and show-day escalation into one clearer operating model.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1200",
    imagePosition: "center 52%",
    formats: ["Annual cultural fests", "Freshers and farewell nights", "Department showcases", "Campus celebrity activations"],
    checklist: [
      "Campus approvals and owners are identified",
      "Stage schedule and sponsor beats are documented",
      "Security and backstage movement are planned",
      "Artist call-sheet is locked before event day"
    ],
    deliverables: [
      ["Campus-ready show design", "Planning built for student energy and institutional approvals."],
      ["Talent sync", "Performer selection, travel, stage timing, and production mapped together."],
      ["Movement planning", "Gate flow, holding zones, and backstage routes coordinated early."],
      ["Show-day command", "One escalation path for delays, weather shifts, and live issues."]
    ]
  },
  {
    slug: "corporate-events",
    page: "corporate-events.html",
    title: "Corporate Events",
    label: "Premium formats",
    short:
      "Create sharper executive and brand-facing events without the room feeling over-produced or generic.",
    kicker:
      "Built for leadership audiences, launches, annual evenings, and polished internal experiences.",
    summary:
      "Corporate formats need more precision than most event teams admit. Stakeholders are varied, the timing matters more, and every visual moment reflects on the brand. We bring structure to speakers, entertainment, production, guest movement, and stakeholder reporting.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    imagePosition: "center 34%",
    formats: ["Annual meetings", "Leadership summits", "Award nights", "Brand showcase events"],
    checklist: [
      "Stakeholders and approval flow are mapped",
      "Brand moments and content windows are defined",
      "Rehearsals and venue timings are confirmed",
      "VIP and executive movement are planned"
    ],
    deliverables: [
      ["Program architecture", "Agenda shaping across keynote, entertainment, and sponsor visibility."],
      ["Premium coordination", "Travel, rehearsals, protocol, and backstage handling run cleanly."],
      ["Stakeholder reporting", "Briefing, run-of-show, and decision checkpoints kept visible."],
      ["Issue handling", "Real-time support for timing changes, AV issues, and movement."]
    ]
  },
  {
    slug: "guest-lectures",
    page: "guest-lectures.html",
    title: "Guest Lectures",
    label: "Speaker formats",
    short:
      "Bring in the right speaker for institutional, educational, and leadership-oriented sessions.",
    kicker:
      "Make the session feel credible, useful, and well produced instead of just formally arranged.",
    summary:
      "Speaker-led events need more than someone famous on stage. They need audience fit, session framing, moderation logic, timing control, and a room experience that feels deliberate. This service supports institutions and organizations that want the event to land cleanly.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
    imagePosition: "center 36%",
    formats: ["University sessions", "Leadership talks", "Faculty programs", "Professional development forums"],
    checklist: [
      "Objective and audience maturity are defined",
      "Speaker fit and topic guardrails are aligned",
      "Venue and Q&A structure are confirmed",
      "Documentation and media moments are planned"
    ],
    deliverables: [
      ["Speaker fit", "Relevant voices selected for topic value and room fit."],
      ["Session framing", "Moderation notes, topic outline, and Q&A pacing shaped early."],
      ["Operational readiness", "Travel, presentation requirements, arrival, and hospitality covered."],
      ["Audience experience", "Registration, seating, timing, and engagement protected."]
    ]
  },
  {
    slug: "artist-coordination",
    page: "artist-coordination.html",
    title: "Artist Coordination",
    label: "Execution control",
    short:
      "Run the logistics-heavy layer around a confirmed artist so the performance feels effortless on stage.",
    kicker:
      "Ideal when the talent is already decided but the coordination still needs a strong hand.",
    summary:
      "Sometimes the performer is confirmed but the operating system around them is weak. This service focuses on the details that actually decide how the night feels: call sheets, routes, rider details, green-room control, hospitality, security, and communication between teams.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&q=80&w=1200",
    imagePosition: "center 46%",
    formats: ["Single-artist nights", "Festival support", "Tour-stop coordination", "Guest appearances"],
    checklist: [
      "Artist details are verified against the latest rider",
      "Movement timeline is shared with every owner",
      "Backstage, security, and hospitality handoffs are defined",
      "Fallback cues are locked before arrival"
    ],
    deliverables: [
      ["Call-sheet discipline", "Arrival, checks, stage order, and exit movement documented."],
      ["Team communication", "Venue, artist team, hospitality, transport, and production aligned."],
      ["Backstage control", "Restricted movement, sponsor access, and security protocol managed."],
      ["Issue response", "Plan B routes and timing changes handled without confusion."]
    ]
  }
];

const TALENT = [
  {
    id: "celebrity-appearance-request",
    name: "Celebrity appearance request",
    category: "actors",
    title: "Share the name you want and we will check fit",
    vibe: "You bring the preferred celebrity, actor, or public figure. We check commercial reality, availability windows, room fit, and whether the event can support that ask cleanly.",
    fee: 1250000,
    status: "Available",
    city: "Multi-city",
    tags: ["Client-suggested name", "Commercial check", "Appearance handling"],
    formats: ["Brand Launch", "Corporate Event", "College Fest"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=900",
    imagePosition: "center 18%"
  },
  {
    id: "actor-host-request",
    name: "Actor host request",
    category: "actors",
    title: "For launches, chats, and guest appearances",
    vibe: "Useful when the room needs a recognizable guest, anchor, or moderated presence without pretending we already manage that celebrity on roster.",
    fee: 900000,
    status: "Hold",
    city: "Multi-city",
    tags: ["Hosted moments", "Guest appearance", "Event fit first"],
    formats: ["Corporate Event", "Brand Launch", "Institutional Event"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=900",
    imagePosition: "center 16%"
  },
  {
    id: "dj-headline-request",
    name: "DJ headline request",
    category: "djs",
    title: "For headline nights, closers, and crowd lift",
    vibe: "Tell us the artist, sound, and budget band you want. We will source, negotiate, and run the operating layer instead of showing a fake ready-made roster.",
    fee: 550000,
    status: "Available",
    city: "Multi-city",
    tags: ["Artist-led brief", "Crowd energy", "Execution support"],
    formats: ["College Fest", "Private Concert", "Corporate Event"],
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=900",
    imagePosition: "center 52%"
  },
  {
    id: "creator-collaboration-request",
    name: "Creator collaboration request",
    category: "influencers",
    title: "For launches, youth campaigns, and social amplification",
    vibe: "When the request is creator-led, we help judge whether the person, audience, and commercial expectations actually make sense for the event.",
    fee: 420000,
    status: "Hold",
    city: "Multi-city",
    tags: ["Audience fit", "Brand-safe review", "Campaign support"],
    formats: ["Brand Launch", "College Fest", "Corporate Event"],
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=900",
    imagePosition: "center 18%"
  },
  {
    id: "custom-talent-brief",
    name: "Custom talent brief",
    category: "mixed",
    title: "If you already have a preferred name, send it",
    vibe: "If the ask does not fit a single bucket, share the name, city, date, and budget band. We will tell you what is realistic, what needs backup, and how to run it cleanly.",
    fee: 800000,
    status: "Available",
    city: "Any city",
    tags: ["Preferred-name brief", "Backup planning", "Custom route"],
    formats: ["College Fest", "Corporate Event", "Private Concert"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=900",
    imagePosition: "center 20%"
  }
];

const CASE_STUDIES = [
  {
    title: "North Axis College Fest",
    type: "College Fest",
    city: "Pune",
    audience: "8,500 attendees",
    talent: "Headline DJ plus campus host",
    summary: "A sponsor-backed annual night that needed strong crowd control, headline energy, and smooth backstage movement.",
    result: "Crowd flow stabilized with clearer backstage and gate choreography.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1200",
    imagePosition: "center 52%"
  },
  {
    title: "Asterion Leadership Summit",
    type: "Corporate Event",
    city: "Mumbai",
    audience: "1,200 delegates",
    talent: "Leadership speaker and live closer",
    summary: "Executive audience format with premium staging and a tightly choreographed run-of-show.",
    result: "Stakeholder approval cycles were shortened because the format was clearer from the start.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
    imagePosition: "center 38%"
  },
  {
    title: "Aurora Product Reveal",
    type: "Brand Launch",
    city: "Bengaluru",
    audience: "650 invitees",
    talent: "Celebrity appearance and creator layer",
    summary: "Reveal event built around press coverage, influencer amplification, and sponsor visibility.",
    result: "The launch felt premium because the talent moments and media timing were designed together.",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1200",
    imagePosition: "center 46%"
  },
  {
    title: "FutureMinds Lecture Series",
    type: "Guest Lecture",
    city: "Delhi",
    audience: "900 students",
    talent: "Founder keynote and moderated Q&A",
    summary: "Institutional session designed for topic value, speaker relevance, and structured audience participation.",
    result: "The room stayed engaged because session framing and Q&A pacing were prepared in advance.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    imagePosition: "center 34%"
  },
  {
    title: "Harbor Private Concert",
    type: "Private Concert",
    city: "Goa",
    audience: "1,800 guests",
    talent: "Live crossover act plus DJ",
    summary: "A hospitality-driven event with tight arrival windows, VIP staging, and premium pacing.",
    result: "High-touch movement and green-room control protected the guest experience from avoidable noise.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1200",
    imagePosition: "center 52%"
  },
  {
    title: "Metro Forum Impact Session",
    type: "Institutional Event",
    city: "Hyderabad",
    audience: "520 delegates",
    talent: "Speaker duo and moderated panel",
    summary: "A policy-facing event that needed stronger timing, moderator briefing, and audience transition control.",
    result: "The event felt sharper because stage timing, content framing, and guest movement were all aligned.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200",
    imagePosition: "center 34%"
  }
];

const PLAYBOOK = [
  {
    title: "Brief clarity first",
    copy: "Define audience, city, timing, approvals, and budget.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=900"
  },
  {
    title: "Shortlist with logic",
    copy: "Filter options by fit, recall value, and feasibility.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=900"
  },
  {
    title: "Commercial alignment",
    copy: "Lock approvals, commercials, backups, and rider needs.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900"
  },
  {
    title: "Execution control",
    copy: "Own call sheets, backstage, sponsors, and escalation.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&q=80&w=900"
  }
];

const PLATFORM_FEATURES = [
  {
    title: "Live talent availability calendar",
    copy: "Block dates, travel holds, and option windows before they turn into spreadsheets."
  },
  {
    title: "Client proposal builder",
    copy: "Turn a brief into a polished commercial deck with lineup logic, budget bands, and deliverables."
  },
  {
    title: "Follow-up CRM sync",
    copy: "Push qualified inquiries into a pipeline with stages, reminders, and owner visibility."
  },
  {
    title: "Vendor ops cockpit",
    copy: "Map stage, sound, travel, hospitality, and security into one live operating view."
  },
  {
    title: "Content and sponsor reporting",
    copy: "Attach recap assets, audience scale, social moments, and sponsor outcomes after execution."
  },
  {
    title: "Client approval room",
    copy: "Share shortlist options, cost bands, and event snapshots without fragmented email threads."
  }
];

const FAQ_ITEMS = [
  {
    question: "How early should we start for a celebrity or large-format event?",
    answer: "Six to ten weeks is the comfortable window for shortlist logic, approvals, commercials, and production alignment."
  },
  {
    question: "Can you work with a fixed budget instead of an open-ended brief?",
    answer: "Yes. The system is built around budget-first curation, so the shortlist adjusts to commercial reality instead of pretending every event can support a headline act."
  },
  {
    question: "Do you only support Chennai events?",
    answer: "No. Chennai is the operating base, but the format is designed for multi-city execution across college, corporate, institutional, and brand-facing rooms."
  },
  {
    question: "What if we have already chosen the artist?",
    answer: "That is exactly where artist coordination becomes useful. We can take over the logistics-heavy layer around a confirmed act and make the execution more reliable."
  },
  {
    question: "Is this connected to a real backend yet?",
    answer: "Not in this demo build. Data is stored locally in the browser, but the UI is structured so a real backend or CRM can be plugged in later."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  window.requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
  });

  initPageTransitions();
  initNavigation();
  initDatePicker();
  initChatTriggers();
  initHeroSlides();
  initRevealSystem();
  initParallaxEffects();
  initCardInteractions();
  bindAdminActionButtons();
  renderClientRail();
  renderFeaturedServices();
  renderServiceDirectory();
  renderTestimonials();
  renderPlatformGrid();
  renderPlaybook();
  renderFaq();
  renderHomeTalent();
  initTalentDirectoryPage();
  renderCaseStudies();
  initServiceDetailPage();
  initEstimator();
  initBookingWizard();
  initAdminAccess();
  refreshInteractiveCards(document);
  trackPage();
});

function initPageTransitions() {
  if (REDUCED_MOTION) {
    return;
  }

  const isSameOrigin = (href) => {
    try {
      const url = new URL(href, window.location.href);
      return url.origin === window.location.origin;
    } catch {
      return false;
    }
  };

  document.addEventListener("click", (event) => {
    const anchor = event.target.closest("a[href]");
    if (!anchor) return;

    // Respect modified clicks and explicit targets.
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const href = anchor.getAttribute("href") || "";
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }

    if (anchor.hasAttribute("download")) return;
    if (anchor.getAttribute("target")) return;
    if (!isSameOrigin(href)) return;

    const url = new URL(href, window.location.href);
    if (url.pathname === window.location.pathname && url.search === window.location.search) {
      return;
    }

    event.preventDefault();
    document.body.classList.add("is-navigating");
    window.setTimeout(() => {
      window.location.href = url.toString();
    }, 170);
  });

  window.addEventListener("pageshow", () => {
    document.body.classList.remove("is-navigating");
  });
}

function initNavigation() {
  const toggle = document.querySelector(".mobile-toggle");
  const panel = document.getElementById("navPanel");
  const currentPage = normalizePageName(window.location.pathname.split("/").pop() || "trance.html");

  document.querySelectorAll(".nav-links a, .admin-tabs a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const target = normalizePageName(href.split("?")[0].split("/").pop() || "");
    if (target && target === currentPage) {
      link.classList.add("is-current");
    }
  });

  if (!toggle || !panel) {
    return;
  }

  const closeNav = () => {
    panel.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("is-lock-scroll");
  };

  toggle.addEventListener("click", () => {
    const open = panel.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("is-lock-scroll", open);
  });

  panel.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("click", () => {
      closeNav();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }
    if (!panel.classList.contains("is-open")) {
      return;
    }
    closeNav();
    toggle.focus();
  });

  document.addEventListener("click", (event) => {
    if (!panel.classList.contains("is-open")) {
      return;
    }
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    if (target.closest(".navbar")) {
      return;
    }
    closeNav();
  });

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 940) {
        closeNav();
      }
    },
    { passive: true }
  );
}

function initDatePicker() {
  const dateInput = document.getElementById("eventDate");
  const calendar = document.getElementById("datePickerCalendar");
  const calendarDates = document.getElementById("calendarDates");
  const monthYear = document.getElementById("monthYear");
  const prevMonth = document.getElementById("prevMonth");
  const nextMonth = document.getElementById("nextMonth");

  if (!dateInput || !calendar) return;

  let currentDate = new Date();

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    monthYear.textContent = currentDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric"
    });

    // Clear previous dates
    calendarDates.innerHTML = "";

    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    // Previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "calendar-date other-month";
      btn.textContent = day;
      btn.disabled = true;
      calendarDates.appendChild(btn);
    }

    // Current month's days
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "calendar-date";
      btn.textContent = day;

      const date = new Date(year, month, day);
      const dateStr = formatDate(date);

      // Disable past dates
      if (date < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
        btn.classList.add("disabled");
        btn.disabled = true;
      }

      // Highlight today
      if (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
      ) {
        btn.classList.add("today");
      }

      // Highlight selected date
      if (dateInput.value === dateStr) {
        btn.classList.add("selected");
      }

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        dateInput.value = dateStr;
        calendar.classList.remove("active");
        dateInput.dispatchEvent(new Event("change", { bubbles: true }));
      });

      calendarDates.appendChild(btn);
    }

    // Next month's days
    const totalCells = firstDay + daysInMonth;
    const nextMonthDays = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let day = 1; day <= nextMonthDays; day++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "calendar-date other-month";
      btn.textContent = day;
      btn.disabled = true;
      calendarDates.appendChild(btn);
    }
  }

  dateInput.addEventListener("click", (e) => {
    e.preventDefault();
    calendar.classList.toggle("active");
  });

  prevMonth.addEventListener("click", (e) => {
    e.preventDefault();
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextMonth.addEventListener("click", (e) => {
    e.preventDefault();
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  // Close calendar when clicking outside
  document.addEventListener("click", (e) => {
    if (!dateInput.parentElement.contains(e.target)) {
      calendar.classList.remove("active");
    }
  });

  renderCalendar();
}

function initChatTriggers() {
  document.querySelectorAll(".floating-whatsapp").forEach((trigger) => {
    trigger.textContent = "WhatsApp now";
    trigger.setAttribute("aria-label", "Message The Trance on WhatsApp");
    trigger.setAttribute("title", "WhatsApp +91 8056918656");
  });

  document.querySelectorAll(".chat-btn").forEach((trigger) => {
    trigger.setAttribute("title", "WhatsApp +91 8056918656");
  });

  document.querySelectorAll("[data-chat-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      updateAnalytics((analytics) => {
        analytics.chatClicks += 1;
      });

      const message =
        "Hi The Trance, I want to plan an event. I am reaching out from the " +
        normalizePageName(window.location.pathname.split("/").pop() || "trance.html").replace(".html", "") +
        " page.";
      window.open(buildWhatsAppLink(message), "_blank", "noopener");
    });
  });
}

function initCardInteractions() {
  if (document.body.dataset.cardInteractionsBound === "1") {
    return;
  }

  document.body.dataset.cardInteractionsBound = "1";

  document.addEventListener("click", (event) => {
    const card = event.target.closest(".is-interactive-card");
    if (!card || event.defaultPrevented) {
      return;
    }

    if (event.target.closest("a, button, input, select, textarea, summary, label")) {
      return;
    }

    if (window.getSelection && String(window.getSelection()).trim()) {
      return;
    }

    const href = card.dataset.cardLink;
    if (!href) {
      return;
    }

    window.location.href = href;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const card = event.target.closest(".is-interactive-card");
    if (!card) {
      return;
    }

    const href = card.dataset.cardLink;
    if (!href) {
      return;
    }

    event.preventDefault();
    window.location.href = href;
  });
}

function refreshInteractiveCards(root = document) {
  const scope = root && typeof root.querySelectorAll === "function" ? root : document;
  const selectors = [".service-card", ".talent-card", ".case-card", ".feature-card"];

  scope.querySelectorAll(selectors.join(",")).forEach((card) => {
    const primaryAction =
      card.dataset.cardLink ||
      card.querySelector(".card-cta[href], .mini-link[href], .btn[href], a[href]")?.getAttribute("href");

    if (!primaryAction) {
      return;
    }

    card.dataset.cardLink = primaryAction;
    card.classList.add("is-interactive-card");
    card.tabIndex = 0;
    card.setAttribute("role", "link");

    const label = card.querySelector("h3, h2")?.textContent?.trim();
    if (label && !card.getAttribute("aria-label")) {
      card.setAttribute("aria-label", label);
    }
  });
}

function initHeroSlides() {
  hydrateHeroGalleries();

  const galleries = Array.from(document.querySelectorAll(".hero-slides"));
  if (!galleries.length) {
    return;
  }

  galleries.forEach((gallery) => {
    const slides = Array.from(gallery.querySelectorAll(".hero-slide"));
    if (!slides.length) {
      return;
    }

    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === 0);
    });

    if (REDUCED_MOTION || slides.length < 2) {
      return;
    }

    let index = 0;
    window.setInterval(() => {
      slides[index].classList.remove("is-active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("is-active");
    }, HERO_ROTATION_MS);
  });
}

function hydrateHeroGalleries() {
  const gallery = heroGalleryForCurrentPage();
  if (!gallery.length) {
    return;
  }

  const homeHero = document.querySelector(".home-hero");
  if (homeHero) {
    const slidesHost = homeHero.querySelector(".hero-slides") || document.createElement("div");
    slidesHost.className = "hero-slides";
    slidesHost.setAttribute("aria-hidden", "true");
    slidesHost.innerHTML = buildHeroSlidesMarkup(gallery);

    if (!slidesHost.parentElement) {
      homeHero.prepend(slidesHost);
    }
    return;
  }

  const pageHero = document.querySelector(".page-hero");
  if (!pageHero) {
    return;
  }

  const slidesHost = pageHero.querySelector(".hero-slides") || document.createElement("div");
  slidesHost.className = "hero-slides";
  slidesHost.setAttribute("aria-hidden", "true");
  slidesHost.innerHTML = buildHeroSlidesMarkup(gallery);

  if (!slidesHost.parentElement) {
    pageHero.prepend(slidesHost);
  }

  pageHero.classList.add("has-hero-slides");
}

function heroGalleryForCurrentPage() {
  const key = currentHeroPageKey();
  const pageGallery = HERO_GALLERIES[key] || HERO_GALLERIES.default || [];
  const seen = new Set();
  return [...pageGallery, ...GLOBAL_HERO_BACKGROUNDS].filter((image) => {
    if (seen.has(image.src)) {
      return false;
    }
    seen.add(image.src);
    return true;
  });
}

function currentHeroPageKey() {
  const serviceKey = document.body.dataset.servicePage;
  if (serviceKey) {
    return `service:${serviceKey}`;
  }

  const currentPage = normalizePageName(window.location.pathname.split("/").pop() || "trance.html");
  if (!currentPage || currentPage === "index.html" || currentPage === "trance.html") {
    return "home";
  }

  return currentPage;
}

function buildHeroSlidesMarkup(images) {
  return images
    .map(
      (image, index) => `
        <div
          class="hero-slide${index === 0 ? " is-active" : ""}"
          style="background-image:url('${image.src}');--hero-position:${image.position || "center 38%"}"
        ></div>
      `
    )
    .join("");
}

function initRevealSystem() {
  if (REDUCED_MOTION) {
    registerRevealTargets(document);
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          // If a CSS var --reveal-delay was set, apply it as animation-delay
          try {
            const computed = window.getComputedStyle(el);
            const delay = computed.getPropertyValue("--reveal-delay").trim();
            if (delay) el.style.animationDelay = delay;
          } catch (e) {
            // silent
          }
          el.classList.add("is-visible");
          // marker for JS-driven animations
          el.classList.add("animated");
          revealObserver.unobserve(el);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  registerRevealTargets(document);

  // Mark viewport cards as immediately visible on first load
  window.requestAnimationFrame(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((el) => {
      if (el.getBoundingClientRect().bottom > 0 && el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("is-visible");
        revealObserver?.unobserve(el);
      }
    });
  });

  if (revealMutationObserver) {
    revealMutationObserver.disconnect();
  }

  revealMutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          registerRevealTargets(node);
        }
      });
    });
  });

  revealMutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
}

function registerRevealTargets(root) {
  const nodes = collectRevealTargets(root);
  nodes.forEach((node, index) => {
    if (!node.hasAttribute("data-reveal")) {
      node.setAttribute("data-reveal", "");
    }
    if (!node.dataset.revealBound) {
      // Premium stagger delay: 0.09s per item with smooth progression
      node.style.setProperty("--reveal-delay", `${(index % 12) * 0.09}s`);
      
      node.classList.add("anim-slide-left");
      
      // Add stagger delay class
      const delayIndex = (index % 10) + 1;
      node.classList.add(`anim-delay-${delayIndex}`);
      
      // Add reveal class for observer
      node.classList.add("reveal");
      
      node.classList.add("from-left");
      
      node.dataset.revealBound = "1";
    }
    if (REDUCED_MOTION) {
      node.classList.add("is-visible");
      return;
    }
    revealObserver?.observe(node);
  });
}

function initParallaxEffects() {
  if (REDUCED_MOTION) return;
  
  const parallaxElements = document.querySelectorAll(".service-visual, .case-visual, .talent-image");
  
  window.addEventListener("scroll", () => {
    parallaxElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      
      if (scrollPercent > 0 && scrollPercent < 1) {
        const offset = (scrollPercent - 0.5) * 8;
        el.style.transform = `translateY(${offset}px) scale(1.01)`;
      }
    });
  }, { passive: true });
}

function collectRevealTargets(root) {
  const scope = root && typeof root.querySelectorAll === "function" ? root : document;
  const matches = [];
  REVEAL_SELECTORS.forEach((selector) => {
    if (scope instanceof Element && scope.matches(selector)) {
      matches.push(scope);
    }
    scope.querySelectorAll(selector).forEach((node) => matches.push(node));
  });
  return [...new Set(matches)];
}

function renderClientRail() {
  const rail = document.getElementById("clientRail");
  if (!rail) {
    return;
  }
  rail.innerHTML = TRUSTED_BY.map((item) => `<span class="client-badge">${item}</span>`).join("");
}

function renderFeaturedServices() {
  const grid = document.getElementById("featuredServiceGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = SERVICES.slice(0, 3).map(renderServiceCard).join("");
  refreshInteractiveCards(grid);
}

function renderServiceDirectory() {
  const grid = document.getElementById("serviceDirectoryGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = SERVICES.map(renderServiceCard).join("");
  refreshInteractiveCards(grid);
}

function renderServiceCard(service) {
  const bookingHref = bookingLink({ serviceNeed: service.slug });
  return `
    <article class="service-card" data-card-link="${bookingHref}">
      <div
        class="service-visual"
        style="background-image:url('${service.image}');--media-position:${service.imagePosition || "center 40%"}"
      ></div>
      <span class="pill-label">${service.label}</span>
      <h3>${service.title}</h3>
      <p>${service.short}</p>
      <div class="chip-wrap">
        ${service.formats.slice(0, 3).map((item) => `<span class="chip">${item}</span>`).join("")}
      </div>
      <div class="card-action-row">
        <a class="card-cta" href="${bookingHref}">Book this lane</a>
        <a class="mini-link" href="${service.page}">View details</a>
      </div>
    </article>
  `;
}

function initServiceDetailPage() {
  const key = document.body.dataset.servicePage;
  if (!key) {
    return;
  }

  const service = SERVICES.find((item) => item.slug === key);
  if (!service) {
    return;
  }

  assignText("serviceName", service.title);
  assignText("serviceKicker", service.kicker);
  assignText("serviceSummary", service.summary);

  const formats = document.getElementById("serviceFormats");
  if (formats) {
    formats.innerHTML = service.formats.map((item) => `<span class="chip">${item}</span>`).join("");
  }

  const checklist = document.getElementById("serviceChecklist");
  if (checklist) {
    checklist.innerHTML = service.checklist.map((item) => `<li>${item}</li>`).join("");
  }

  const deliverables = document.getElementById("serviceDeliverables");
  if (deliverables) {
    deliverables.innerHTML = service.deliverables
      .map(
        ([title, copy]) => `
          <article class="surface-card">
            <span class="pill-label">Deliverable</span>
            <h3>${title}</h3>
            <p>${copy}</p>
          </article>
        `
      )
      .join("");
  }

  const related = document.getElementById("relatedServiceGrid");
  if (related) {
    related.innerHTML = SERVICES.filter((item) => item.slug !== service.slug)
      .slice(0, 3)
      .map(renderServiceCard)
      .join("");
    refreshInteractiveCards(related);
  }

  const bookingCta = document.getElementById("serviceBookLink");
  if (bookingCta) {
    bookingCta.href = bookingLink({ serviceNeed: service.slug });
  }

  document.title = `${service.title} | The Trance`;
  updateAnalytics((analytics) => {
    analytics.serviceViews[service.slug] = (analytics.serviceViews[service.slug] || 0) + 1;
  });
}

function renderHomeTalent() {
  const grid = document.getElementById("featuredTalentGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = TALENT.slice(0, 4).map(renderTalentCard).join("");
  refreshInteractiveCards(grid);
}

function initTalentDirectoryPage() {
  const grid = document.getElementById("fullTalentGrid");
  if (!grid) {
    return;
  }

  const search = document.getElementById("talentSearch");
  const sort = document.getElementById("talentSort");
  const count = document.getElementById("talentCount");
  let filter = "all";
  let searchTracked = false;

  const render = () => {
    const term = (search ? search.value : "").trim().toLowerCase();
    let list = TALENT.filter((talent) => {
      const matchesFilter = filter === "all" || talent.category === filter || (filter === "mixed" && talent.category === "mixed");
      const haystack = [
        talent.name,
        talent.title,
        talent.vibe,
        talent.city,
        talent.tags.join(" "),
        talent.formats.join(" ")
      ]
        .join(" ")
        .toLowerCase();
      return matchesFilter && (!term || haystack.includes(term));
    });

    const sortValue = sort ? sort.value : "name";
    if (sortValue === "budget-asc") {
      list = list.slice().sort((left, right) => left.fee - right.fee);
    } else if (sortValue === "budget-desc") {
      list = list.slice().sort((left, right) => right.fee - left.fee);
    } else {
      list = list.slice().sort((left, right) => left.name.localeCompare(right.name));
    }

    if (count) {
      count.textContent = `${list.length} talent request lanes`;
    }

    grid.innerHTML = list.length
      ? list.map(renderTalentCard).join("")
      : `<div class="empty-state">No request lane matches that combination yet. Try widening the category or search term.</div>`;

    refreshInteractiveCards(grid);
  };

  document.querySelectorAll("[data-roster-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      filter = button.dataset.rosterFilter || "all";
      document.querySelectorAll("[data-roster-filter]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      render();
    });
  });

  if (search) {
    search.addEventListener("input", () => {
      const hasValue = Boolean(search.value.trim());
      if (hasValue && !searchTracked) {
        updateAnalytics((analytics) => {
          analytics.rosterSearches += 1;
        });
      }
      searchTracked = hasValue;
      render();
    });
  }

  if (sort) {
    sort.addEventListener("change", render);
  }

  render();
}

function renderTalentCard(talent) {
  const status = getTalentStatus(talent.id, talent.status);
  const shortlistHref = bookingLink({ talentCategory: talent.category });
  return `
    <article class="talent-card" data-card-link="${shortlistHref}">
      <img
        class="talent-image"
        src="${talent.image}"
        alt="${talent.name}"
        loading="lazy"
        style="--media-position:${talent.imagePosition || "center 20%"}"
      >
      <span class="pill-label">${categoryLabel(talent.category)}</span>
      <div class="talent-footer">
        <h3>${talent.name}</h3>
        <span class="status-pill status-${slugify(status)}">${status}</span>
      </div>
      <p>${talent.vibe}</p>
      <div class="chip-wrap">
        <span class="chip">${talent.city}</span>
        <span class="chip">${talent.title}</span>
        ${talent.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
      </div>
      <div class="card-action-row is-split">
        <span>Typical brief from Rs ${formatCurrency(talent.fee)}</span>
        <a class="card-cta" href="${shortlistHref}">Start request</a>
      </div>
    </article>
  `;
}

function renderCaseStudies() {
  const previewGrid = document.getElementById("casePreviewGrid");
  if (previewGrid) {
    previewGrid.innerHTML = CASE_STUDIES.slice(0, 3).map(renderCaseCard).join("");
    refreshInteractiveCards(previewGrid);
  }

  const fullGrid = document.getElementById("caseStudyGrid");
  if (fullGrid) {
    fullGrid.innerHTML = CASE_STUDIES.map(renderCaseCard).join("");
    refreshInteractiveCards(fullGrid);
  }
}

function renderCaseCard(item) {
  const eventType = eventTypeKeyFromLabel(item.type);
  const planHref = bookingLink({
    eventType,
    serviceNeed: serviceSlugForEvent(eventType)
  });

  return `
    <article class="case-card" data-card-link="${planHref}">
      <div
        class="case-visual"
        style="background-image:url('${item.image}');--media-position:${item.imagePosition || "center 40%"}"
      ></div>
      <span class="pill-label">${item.type}</span>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="case-meta">
        <span>${item.city}</span>
        <span>${item.audience}</span>
      </div>
      <div class="helper-note">${item.result}</div>
      <div class="card-action-row is-split">
        <span>Want a similar format?</span>
        <a class="mini-link" href="${planHref}">Plan this type</a>
      </div>
    </article>
  `;
}

function renderTestimonials() {
  const grid = document.getElementById("testimonialGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = TESTIMONIALS.map(
    (item) => `
      <article class="quote-card">
        <span class="pill-label">Client voice</span>
        <blockquote>"${item.quote}"</blockquote>
        <div class="quote-role">
          <strong>${item.name}</strong>
          <span>${item.role}</span>
        </div>
      </article>
    `
  ).join("");
}

function renderPlaybook() {
  const grid = document.getElementById("playbookGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = PLAYBOOK.map(
    (item) => `
      <article class="playbook-card">
        <div class="playbook-visual" style="background-image:url('${item.image}')"></div>
        <span class="pill-label">Flow</span>
        <h3>${item.title}</h3>
        <p>${item.copy}</p>
      </article>
    `
  ).join("");
}

function renderPlatformGrid() {
  const grid = document.getElementById("platformGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = PLATFORM_FEATURES.map(
    (feature) => `
      <article class="feature-card">
        <span class="pill-label">Upgrade</span>
        <h3>${feature.title}</h3>
        <p>${feature.copy}</p>
      </article>
    `
  ).join("");
}

function renderFaq() {
  const list = document.getElementById("faqList");
  if (!list) {
    return;
  }

  list.innerHTML = FAQ_ITEMS.map(
    (item) => `
      <details class="faq-item">
        <summary>${item.question}</summary>
        <p>${item.answer}</p>
      </details>
    `
  ).join("");
}

function initEstimator() {
  const form = document.getElementById("estimatorForm");
  const result = document.getElementById("estimatorResult");
  const talentGrid = document.getElementById("estimateTalentGrid");
  if (!form || !result) {
    return;
  }

  const render = (track) => {
    const data = new FormData(form);
    const estimate = buildEstimate({
      eventType: normalizeEventType(data.get("estimateEventType")),
      category: normalizeCategory(data.get("estimateTalentCategory")),
      budget: toNumber(data.get("estimateBudget")),
      guests: toNumber(data.get("estimateGuests"))
    });

    result.innerHTML = `
      <div class="estimate-result">
        <span class="pill-label">Budget read</span>
        <h3>${estimate.status}</h3>
        <p>${estimate.copy}</p>
        <div class="estimate-band">
          <span>Suggested working band</span>
          <strong>Rs ${formatCurrency(estimate.low)} - Rs ${formatCurrency(estimate.high)}</strong>
        </div>
        <div class="mini-stat-grid">
          <article class="mini-stat"><span>Recommended lane</span><strong>${estimate.service}</strong></article>
          <article class="mini-stat"><span>Base logic</span><strong>${eventLabel(estimate.eventType)} x ${categoryLabel(estimate.category)}</strong></article>
        </div>
      </div>
    `;

    if (talentGrid) {
      const suggestions = matchTalent(estimate.category, estimate.high, estimate.eventType);
      talentGrid.innerHTML = suggestions.length
        ? suggestions.map(renderTalentCard).join("")
        : `<div class="empty-state">No tight-fit request lane matched that exact band yet. We would widen the talent search manually.</div>`;
    }

    if (track) {
      updateAnalytics((analytics) => {
        analytics.estimatorRuns += 1;
      });
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    render(true);
  });

  render(false);
}

function buildEstimate(input) {
  const base = {
    college_fest: 650000,
    corporate_event: 900000,
    guest_lecture: 280000,
    brand_launch: 1200000,
    private_concert: 1500000,
    institutional_event: 450000
  };

  const multiplier = {
    actors: 1.18,
    djs: 1.08,
    speakers: 0.92,
    influencers: 0.98,
    mixed: 1.28
  };

  const raw = roundToNearest(
    (base[input.eventType] || 500000) *
      (multiplier[input.category] || 1) *
      (1 + Math.min(input.guests, 5000) / 6500),
    50000
  );

  const low = roundToNearest(raw * 0.85, 50000);
  const high = roundToNearest(raw * 1.25, 50000);

  let status = "Budget looks realistic";
  let copy =
    "This range should support a cleaner execution shape without forcing weak compromises too early.";

  if (input.budget && input.budget < low) {
    status = "Budget may feel tight";
    copy =
      "The target budget is below the likely delivery band, so we would either simplify the scale, shift the talent lane, or reduce production ambition.";
  } else if (input.budget && input.budget > high) {
    status = "There is room for a premium layer";
    copy =
      "The target budget is above the working range, so there is room for stronger talent, richer staging, or a more premium guest experience.";
  }

  return {
    eventType: input.eventType,
    category: input.category,
    low,
    high,
    status,
    copy,
    service: serviceForEvent(input.eventType),
    suggestions: matchTalent(input.category, high, input.eventType).map((item) => item.name)
  };
}

function initBookingWizard() {
  const form = document.getElementById("bookingForm");
  if (!form) {
    return;
  }

  const steps = Array.from(form.querySelectorAll(".booking-step"));
  const progressButtons = Array.from(document.querySelectorAll("[data-step-jump]"));
  const response = document.getElementById("bookingResponse");
  let index = 0;

  prefillBooking(form);

  const showStep = (nextIndex) => {
    index = Math.max(0, Math.min(steps.length - 1, nextIndex));
    steps.forEach((step, stepIndex) => {
      step.classList.toggle("is-active", stepIndex === index);
    });
    progressButtons.forEach((button, buttonIndex) => {
      button.classList.toggle("is-active", buttonIndex === index);
    });
  };

  form.querySelectorAll("[data-next-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const currentStep = steps[index];
      const requiredFields = Array.from(currentStep.querySelectorAll("[required]"));
      const isValid = requiredFields.every((field) => field.reportValidity());
      if (!isValid) {
        return;
      }
      showStep(index + 1);
    });
  });

  form.querySelectorAll("[data-prev-step]").forEach((button) => {
    button.addEventListener("click", () => showStep(index - 1));
  });

  progressButtons.forEach((button, buttonIndex) => {
    button.addEventListener("click", () => {
      if (buttonIndex <= index) {
        showStep(buttonIndex);
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const lead = normalizeLead(
      {
        id: "lead-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        organization: formData.get("organization"),
        eventType: formData.get("eventType"),
        serviceNeed: formData.get("serviceNeed"),
        eventCity: formData.get("eventCity"),
        eventDate: formData.get("eventDate"),
        guests: formData.get("guests"),
        budget: formData.get("budget"),
        talentCategory: formData.get("talentCategory"),
        preferredTalent: formData.get("preferredTalent"),
        notes: formData.get("notes"),
        submittedAt: new Date().toISOString()
      },
      0
    );

    const leads = readLeads();
    leads.unshift(lead);
    writeJson(STORAGE_KEYS.leads, leads);
    updateAnalytics((analytics) => {
      analytics.bookings += 1;
      analytics.ctaClicks += 1;
    });

    if (response) {
      response.hidden = false;
      response.className = "form-response is-success";
      response.innerHTML = `
        Inquiry stored locally. Lead score: <strong>${lead.score}/100</strong>.
        Recommended next-fit talent lane: ${lead.recommendedTalent.join(", ") || "Open talent request lanes"}.
      `;
    }

    form.reset();
    prefillBooking(form);
    showStep(0);
  });

  showStep(0);
}

function prefillBooking(form) {
  const params = new URLSearchParams(window.location.search);
  const pairs = [
    ["serviceNeed", params.get("serviceNeed")],
    ["preferredTalent", params.get("preferredTalent")],
    ["talentCategory", params.get("talentCategory")],
    ["eventType", params.get("eventType")]
  ];

  pairs.forEach(([name, value]) => {
    if (!value) {
      return;
    }
    const field = form.elements.namedItem(name);
    if (field) {
      field.value = value;
    }
  });
}

function initAdminAccess() {
  const guard = document.querySelector("[data-admin-guard]");
  const shell = document.querySelector("[data-admin-shell]");
  const form = document.getElementById("adminUnlockForm");
  const status = document.getElementById("adminStatus");

  if (!guard || !shell || !form) {
    return;
  }

  const showShell = () => {
    sessionStorage.setItem(STORAGE_KEYS.admin, "1");
    guard.hidden = true;
    shell.hidden = false;
    renderAdminRoute();
  };

  const showGuard = (message) => {
    guard.hidden = false;
    shell.hidden = true;
    if (status) {
      status.textContent = message;
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const code = (document.getElementById("adminCode")?.value || "").trim();
    if (code === ADMIN_ACCESS_CODE) {
      showShell();
      return;
    }
    showGuard("That code did not match. Demo access code for this local build: trance2026");
  });

  if (sessionStorage.getItem(STORAGE_KEYS.admin) === "1") {
    showShell();
  } else {
    showGuard("Demo access code for this local build: trance2026");
  }
}

function renderAdminRoute() {
  renderAdminOverview();
  renderAdminLeads();
  renderAdminAnalytics();
  renderAdminRoster();
}

function renderAdminOverview() {
  const grid = document.getElementById("adminOverviewGrid");
  if (!grid) {
    return;
  }

  const metrics = computeMetrics(readLeads());
  grid.innerHTML = [
    {
      title: "Leads desk",
      copy: "Review inquiries, export raw data, and check high-intent briefs first.",
      href: "admin-leads.html",
      stat: `${metrics.totalLeads} leads`
    },
    {
      title: "Analytics board",
      copy: "Track page views, estimator usage, CTA taps, and which service lanes are pulling attention.",
      href: "admin-analytics.html",
      stat: `${sumValues(readAnalytics().pageViews)} page views`
    },
    {
      title: "Talent request board",
      copy: "Track the public request lanes and keep the booking path honest without listing fake celebrity rosters.",
      href: "admin-roster.html",
      stat: `${TALENT.length} active request lanes`
    }
  ]
    .map(
      (item) => `
        <article class="admin-card">
          <span class="pill-label">Admin lane</span>
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
          <div class="admin-summary">
            <strong>${item.stat}</strong>
            <a class="btn ghost-btn" href="${item.href}">Open page</a>
          </div>
        </article>
      `
    )
    .join("");

  assignText("metricLeads", String(metrics.totalLeads));
  assignText("metricPipeline", `Rs ${formatCurrency(metrics.pipeline)}`);
  assignText("metricHotLeads", String(metrics.hotLeads));
  assignText("metricAvgBudget", `Rs ${formatCurrency(metrics.averageBudget)}`);
}

function renderAdminLeads() {
  const container = document.getElementById("leadTable");
  if (!container) {
    return;
  }
  container.innerHTML = renderLeadTable(readLeads());
}

function renderAdminAnalytics() {
  const analyticsList = document.getElementById("analyticsList");
  const pageChart = document.getElementById("pageViewChart");
  const serviceChart = document.getElementById("serviceViewChart");
  if (!analyticsList && !pageChart && !serviceChart) {
    return;
  }

  const analytics = readAnalytics();
  if (analyticsList) {
    analyticsList.innerHTML = renderAnalyticsList(analytics);
  }
  if (pageChart) {
    pageChart.innerHTML = renderChartBars(analytics.pageViews);
  }
  if (serviceChart) {
    serviceChart.innerHTML = renderChartBars(
      Object.fromEntries(
        Object.entries(analytics.serviceViews).map(([key, value]) => [serviceLabel(key), value])
      )
    );
  }
}

function renderAdminRoster() {
  const board = document.getElementById("talentStatusBoard");
  if (!board) {
    return;
  }

  board.innerHTML = TALENT.map((talent) => {
    const currentStatus = getTalentStatus(talent.id, talent.status);
    return `
      <article class="status-card">
        <div>
          <span class="pill-label">${categoryLabel(talent.category)}</span>
          <h3>${talent.name}</h3>
          <p>${talent.title}</p>
        </div>
        <label>
          <span class="label-line">Status</span>
          <select data-status-select="${talent.id}">
            ${STATUS_VALUES.map(
              (status) => `<option value="${status}"${status === currentStatus ? " selected" : ""}>${status}</option>`
            ).join("")}
          </select>
        </label>
      </article>
    `;
  }).join("");

  board.querySelectorAll("[data-status-select]").forEach((select) => {
    select.addEventListener("change", () => {
      setTalentStatus(select.dataset.statusSelect, select.value);
      renderAdminRoster();
    });
  });
}

function bindAdminActionButtons() {
  document.querySelectorAll("[data-admin-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.adminAction;
      if (action === "seed") {
        seedDemoData();
        renderAdminRoute();
      }
      if (action === "export-leads") {
        exportLeads();
      }
      if (action === "export-dashboard") {
        exportDashboard();
      }
      if (action === "clear-leads") {
        if (window.confirm("Clear all locally stored leads?")) {
          writeJson(STORAGE_KEYS.leads, []);
          renderAdminRoute();
        }
      }
      if (action === "reset-metrics") {
        if (window.confirm("Reset analytics and talent status?")) {
          writeJson(STORAGE_KEYS.analytics, createBlankAnalytics());
          writeJson(STORAGE_KEYS.talentStatus, {});
          renderAdminRoute();
        }
      }
    });
  });
}

function renderLeadTable(leads) {
  if (!leads.length) {
    return `<div class="empty-state">No booking requests stored yet. Use the booking page or the demo seed action to populate this board.</div>`;
  }

  const rows = leads
    .slice()
    .sort((left, right) => new Date(right.submittedAt) - new Date(left.submittedAt))
    .map(
      (lead) => `
        <tr>
          <td>
            <strong>${escapeHtml(lead.name)}</strong>
            <span>${escapeHtml(lead.organization || lead.email || "Direct inquiry")}</span>
          </td>
          <td>${escapeHtml(eventLabel(lead.eventType))}</td>
          <td>${escapeHtml(serviceLabel(lead.serviceNeed))}</td>
          <td>Rs ${formatCurrency(lead.budget)}</td>
          <td><span class="status-pill status-${slugify(lead.temperature)}">${escapeHtml(lead.temperature)}</span></td>
          <td>${lead.score}/100</td>
          <td>${escapeHtml(lead.recommendedTalent.join(", ") || "Open talent request lanes")}</td>
          <td>${escapeHtml(formatDate(lead.submittedAt))}</td>
        </tr>
      `
    )
    .join("");

  return `
    <div class="lead-table-wrap">
      <table class="lead-table">
        <thead>
          <tr>
            <th>Lead</th>
            <th>Event</th>
            <th>Service</th>
            <th>Budget</th>
            <th>Heat</th>
            <th>Score</th>
            <th>Suggested shortlist</th>
            <th>Logged</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderAnalyticsList(analytics) {
  const topPage = topKey(analytics.pageViews);
  const topService = topKey(analytics.serviceViews);

  return [
    ["Total page views", String(sumValues(analytics.pageViews))],
    ["Bookings submitted", String(analytics.bookings)],
    ["Estimator runs", String(analytics.estimatorRuns)],
    ["WhatsApp clicks", String(analytics.chatClicks)],
    ["CTA taps", String(analytics.ctaClicks)],
    ["Roster searches", String(analytics.rosterSearches)],
    ["Top page", topPage ? `${topPage.replace(".html", "")} (${analytics.pageViews[topPage]})` : "No data"],
    ["Top service", topService ? `${serviceLabel(topService)} (${analytics.serviceViews[topService]})` : "No data"],
    ["Last update", analytics.lastUpdated ? formatDate(analytics.lastUpdated) : "No data"]
  ]
    .map(([label, value]) => `<li><span>${label}</span><strong>${value}</strong></li>`)
    .join("");
}

function renderChartBars(map) {
  const entries = Object.entries(map || {});
  if (!entries.length) {
    return `<div class="empty-state">No tracked data yet.</div>`;
  }

  const max = Math.max(...entries.map(([, value]) => value), 1);
  return `
    <div class="chart-list">
      ${entries
        .sort((left, right) => right[1] - left[1])
        .map(([label, value]) => {
          const width = `${Math.max(8, Math.round((value / max) * 100))}%`;
          return `
            <article class="chart-bar">
              <div class="label-line">
                <strong>${escapeHtml(label)}</strong>
                <span>${value}</span>
              </div>
              <div class="chart-track"><div class="chart-fill" style="width:${width}"></div></div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function seedDemoData() {
  const demoLeads = [
    {
      name: "Ritika Sharma",
      email: "ritika@northaxis.edu",
      phone: "+91-9999999991",
      organization: "North Axis College",
      eventType: "college_fest",
      serviceNeed: "college-fest-management",
      eventCity: "Pune",
      eventDate: "2026-08-14",
      guests: 8500,
      budget: 1800000,
      talentCategory: "djs",
      preferredTalent: "Client to confirm preferred DJ",
      notes: "Need headline closer, sponsor reveal moment, backstage control, and crowd flow."
    },
    {
      name: "Aditi Menon",
      email: "aditi@asterion.com",
      phone: "+91-9999999992",
      organization: "Asterion Consulting",
      eventType: "corporate_event",
      serviceNeed: "corporate-events",
      eventCity: "Mumbai",
      eventDate: "2026-07-09",
      guests: 1200,
      budget: 2400000,
      talentCategory: "actors",
      preferredTalent: "Client to confirm preferred celebrity guest",
      notes: "Premium annual leadership evening with awards and a hosted entertainment segment."
    },
    {
      name: "Karthik Iyer",
      email: "karthik@futureminds.org",
      phone: "+91-9999999993",
      organization: "FutureMinds Institute",
      eventType: "guest_lecture",
      serviceNeed: "guest-lectures",
      eventCity: "Delhi",
      eventDate: "2026-06-18",
      guests: 900,
      budget: 450000,
      talentCategory: "mixed",
      preferredTalent: "Founder or industry personality to be suggested",
      notes: "Looking for an industry personality with a moderated Q&A."
    },
    {
      name: "Sana Patel",
      email: "sana@auroratech.com",
      phone: "+91-9999999995",
      organization: "Aurora Tech",
      eventType: "brand_launch",
      serviceNeed: "celebrity-booking",
      eventCity: "Bengaluru",
      eventDate: "2026-07-30",
      guests: 650,
      budget: 1600000,
      talentCategory: "influencers",
      preferredTalent: "Creator name to be finalized",
      notes: "Creator amplification plus a recognizable face for the reveal."
    },
    {
      name: "Shivam Rao",
      email: "shivam@harborlife.in",
      phone: "+91-9999999994",
      organization: "Harbor Life Hospitality",
      eventType: "private_concert",
      serviceNeed: "artist-coordination",
      eventCity: "Goa",
      eventDate: "2026-09-21",
      guests: 1800,
      budget: 2100000,
      talentCategory: "mixed",
      preferredTalent: "Artist name shared by client",
      notes: "Need tight ops around travel, call-sheet, VIP movement, and stage timing."
    }
  ].map((lead, index) => normalizeLead(lead, index));

  writeJson(STORAGE_KEYS.leads, demoLeads);
  writeJson(STORAGE_KEYS.talentStatus, {
    "celebrity-appearance-request": "Available",
    "actor-host-request": "Hold",
    "dj-headline-request": "Available",
    "creator-collaboration-request": "Hold",
    "custom-talent-brief": "Available"
  });
  writeJson(STORAGE_KEYS.analytics, {
    pageViews: {
      "trance.html": 148,
      "services.html": 84,
      "talent.html": 63,
      "events.html": 41,
      "booking.html": 39,
      "estimator.html": 26
    },
    ctaClicks: 37,
    bookings: demoLeads.length,
    estimatorRuns: 26,
    chatClicks: 19,
    rosterSearches: 14,
    exports: { leads: 0, dashboard: 0 },
    serviceViews: {
      "celebrity-booking": 21,
      "college-fest-management": 16,
      "corporate-events": 14,
      "guest-lectures": 11,
      "artist-coordination": 8
    },
    lastUpdated: new Date().toISOString()
  });
}

function exportLeads() {
  updateAnalytics((analytics) => {
    analytics.exports.leads += 1;
  });
  downloadJson("trance-leads.json", readLeads());
}

function exportDashboard() {
  const leads = readLeads();
  updateAnalytics((analytics) => {
    analytics.exports.dashboard += 1;
  });
  downloadJson("trance-dashboard.json", {
    exportedAt: new Date().toISOString(),
    metrics: computeMetrics(leads),
    analytics: readAnalytics(),
    talentStatus: readJson(STORAGE_KEYS.talentStatus, {})
  });
}

function downloadJson(filename, payload) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function trackPage() {
  updateAnalytics((analytics) => {
    const key = normalizePageName(window.location.pathname.split("/").pop() || "trance.html");
    analytics.pageViews[key] = (analytics.pageViews[key] || 0) + 1;
  });
}

function readLeads() {
  const leads = readJson(STORAGE_KEYS.leads, []);
  return Array.isArray(leads) ? leads.map((lead, index) => normalizeLead(lead, index)) : [];
}

function normalizeLead(lead, index) {
  const normalized = {
    id: lead.id || `lead-${index}`,
    name: String(lead.name || "Unnamed lead"),
    email: String(lead.email || ""),
    phone: String(lead.phone || ""),
    organization: String(lead.organization || ""),
    eventType: normalizeEventType(lead.eventType),
    serviceNeed: normalizeService(lead.serviceNeed || lead.service),
    eventCity: String(lead.eventCity || lead.city || ""),
    eventDate: String(lead.eventDate || lead.date || ""),
    guests: toNumber(lead.guests || lead.expectedGuests),
    budget: toNumber(lead.budget),
    talentCategory: normalizeCategory(lead.talentCategory),
    preferredTalent: String(lead.preferredTalent || lead.preferred || ""),
    notes: String(lead.notes || ""),
    submittedAt: String(lead.submittedAt || lead.ts || new Date().toISOString())
  };

  normalized.score = Number.isFinite(lead.score) ? lead.score : computeLeadScore(normalized);
  normalized.temperature = lead.temperature || temperatureForScore(normalized.score);
  normalized.recommendedTalent = Array.isArray(lead.recommendedTalent)
    ? lead.recommendedTalent
    : matchTalent(normalized.talentCategory, normalized.budget, normalized.eventType).map((talent) => talent.name);
  return normalized;
}

function computeLeadScore(lead) {
  let score = 20;
  if (lead.budget >= 1500000) score += 30;
  else if (lead.budget >= 700000) score += 22;
  else if (lead.budget >= 300000) score += 14;
  if (lead.guests >= 3000) score += 18;
  else if (lead.guests >= 800) score += 12;
  if (lead.organization) score += 8;
  if (lead.preferredTalent) score += 10;
  if (lead.notes.length > 60) score += 8;
  if (lead.eventDate) score += 6;
  return Math.max(10, Math.min(100, score));
}

function temperatureForScore(score) {
  if (score >= 70) return "Hot";
  if (score >= 45) return "Warm";
  return "Cold";
}

function matchTalent(category, budget, eventType) {
  const wantedCategory = normalizeCategory(category);
  const wantedFormat = eventLabel(eventType);
  return TALENT.filter((talent) => {
    const categoryMatch =
      wantedCategory === "mixed" || talent.category === wantedCategory || talent.category === "mixed";
    const formatMatch = talent.formats.includes(wantedFormat);
    const priceMatch = !budget || talent.fee <= budget * 1.1 || talent.fee <= budget + 250000;
    return categoryMatch && (formatMatch || priceMatch);
  })
    .slice()
    .sort((left, right) => Math.abs(left.fee - budget) - Math.abs(right.fee - budget))
    .slice(0, 4);
}

function serviceForEvent(eventType) {
  return {
    college_fest: "College Fest Management",
    corporate_event: "Corporate Events",
    guest_lecture: "Guest Lectures",
    brand_launch: "Celebrity Booking",
    private_concert: "Artist Coordination",
    institutional_event: "Guest Lectures"
  }[normalizeEventType(eventType)] || "Celebrity Booking";
}

function serviceSlugForEvent(eventType) {
  return {
    college_fest: "college-fest-management",
    corporate_event: "corporate-events",
    guest_lecture: "guest-lectures",
    brand_launch: "celebrity-booking",
    private_concert: "artist-coordination",
    institutional_event: "guest-lectures"
  }[normalizeEventType(eventType)] || "celebrity-booking";
}

function eventTypeKeyFromLabel(value) {
  return {
    "college fest": "college_fest",
    "corporate event": "corporate_event",
    "guest lecture": "guest_lecture",
    "brand launch": "brand_launch",
    "private concert": "private_concert",
    "institutional event": "institutional_event"
  }[String(value || "").trim().toLowerCase()] || "college_fest";
}

function bookingLink(prefill) {
  const params = new URLSearchParams();
  Object.entries(prefill).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });
  const query = params.toString();
  return `booking.html${query ? `?${query}` : ""}`;
}

function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function readAnalytics() {
  const analytics = readJson(STORAGE_KEYS.analytics, createBlankAnalytics());
  return {
    ...createBlankAnalytics(),
    ...analytics,
    pageViews: { ...(analytics.pageViews || {}) },
    exports: { ...createBlankAnalytics().exports, ...(analytics.exports || {}) },
    serviceViews: { ...(analytics.serviceViews || {}) }
  };
}

function createBlankAnalytics() {
  return {
    pageViews: {},
    ctaClicks: 0,
    bookings: 0,
    estimatorRuns: 0,
    chatClicks: 0,
    rosterSearches: 0,
    exports: { leads: 0, dashboard: 0 },
    serviceViews: {},
    lastUpdated: ""
  };
}

function updateAnalytics(mutator) {
  const analytics = readAnalytics();
  mutator(analytics);
  analytics.lastUpdated = new Date().toISOString();
  writeJson(STORAGE_KEYS.analytics, analytics);
}

function computeMetrics(leads) {
  const pipeline = leads.reduce((total, lead) => total + lead.budget, 0);
  return {
    totalLeads: leads.length,
    pipeline,
    hotLeads: leads.filter((lead) => lead.temperature === "Hot").length,
    averageBudget: leads.length ? Math.round(pipeline / leads.length) : 0
  };
}

function getTalentStatus(id, fallback) {
  return readJson(STORAGE_KEYS.talentStatus, {})[id] || fallback || "Available";
}

function setTalentStatus(id, value) {
  const map = readJson(STORAGE_KEYS.talentStatus, {});
  map[id] = value;
  writeJson(STORAGE_KEYS.talentStatus, map);
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeEventType(value) {
  const raw = String(value || "").trim().toLowerCase();
  return {
    "college fest": "college_fest",
    college_fest: "college_fest",
    corporate: "corporate_event",
    "corporate event": "corporate_event",
    corporate_event: "corporate_event",
    "guest lecture": "guest_lecture",
    guest_lecture: "guest_lecture",
    "brand launch": "brand_launch",
    brand_launch: "brand_launch",
    "private concert": "private_concert",
    private_concert: "private_concert",
    "institutional event": "institutional_event",
    institutional_event: "institutional_event"
  }[raw] || "college_fest";
}

function normalizeCategory(value) {
  const raw = String(value || "").trim().toLowerCase();
  return {
    actor: "actors",
    actors: "actors",
    dj: "djs",
    djs: "djs",
    speaker: "speakers",
    speakers: "speakers",
    influencer: "influencers",
    influencers: "influencers",
    mixed: "mixed",
    "mixed talent lineup": "mixed"
  }[raw] || "actors";
}

function normalizeService(value) {
  const raw = String(value || "").trim().toLowerCase();
  return SERVICES.find((service) => service.slug === raw)?.slug || "celebrity-booking";
}

function normalizePageName(value) {
  return String(value || "").trim() || "";
}

function eventLabel(value) {
  return EVENT_LABELS[normalizeEventType(value)] || "College Fest";
}

function categoryLabel(value) {
  return CATEGORY_LABELS[normalizeCategory(value)] || "Actors";
}

function serviceLabel(slug) {
  return SERVICES.find((service) => service.slug === slug)?.title || "Celebrity Booking";
}

function assignText(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
}

function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function roundToNearest(value, step) {
  return Math.max(step, Math.round(value / step) * step);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Number(value) || 0);
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}

function sumValues(map) {
  return Object.values(map || {}).reduce((total, value) => total + value, 0);
}

function topKey(map) {
  return Object.keys(map || {}).sort((left, right) => (map[right] || 0) - (map[left] || 0))[0];
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1500);
});


window.addEventListener('scroll', () => {
  document.querySelector('.site-header')
    .classList.toggle('scrolled', window.scrollY > 60);
});

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  let current = 0;
  const step = target / 100;

  const interval = setInterval(() => {
    current += step;
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(interval);
  }, 20);
}

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObs.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.counter').forEach(el => {
  counterObs.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.15
  });

  reveals.forEach(el => observer.observe(el));
});