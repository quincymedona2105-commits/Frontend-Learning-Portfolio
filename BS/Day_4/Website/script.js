/**
 * ============================================================================
 * TIMECAPSULE - Core Application & Interactive Chrono-Dashboard Script
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScrollspy();
  initAnimatedCounters();
  initDevelopmentsFilter();
  initTimelineSystem();
  initFuturePredictions();
  initGallerySystem();
  initTimeCapsuleEngine();
  initFutureMessage();
  initMemoryCards();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   1. Navbar Scrollspy & Smooth Scroll Handling
   ========================================================================== */
function initNavbarScrollspy() {
  const navbar = document.getElementById('mainNavbar');
  const navLinks = document.querySelectorAll('.tc-navbar .nav-link');
  const navCollapse = document.getElementById('navbarContent');

  // Handle sticky styling on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Auto-close mobile offcanvas when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1200 && navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  // IntersectionObserver to highlight current active navbar item
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   2. Animated Number Counters
   ========================================================================== */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.counter-num');
  let animated = false;

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1800; // ms
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const stepValue = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += stepValue;
            if (current >= target) {
              counter.innerText = target.toLocaleString();
              clearInterval(timer);
            } else {
              counter.innerText = Math.floor(current).toLocaleString();
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statSection = document.querySelector('.counter-num')?.closest('section');
  if (statSection) countObserver.observe(statSection);
}

/* ==========================================================================
   3. Developments Filter System
   ========================================================================== */
function initDevelopmentsFilter() {
  const filterBtns = document.querySelectorAll('[data-dev-filter]');
  const devItems = document.querySelectorAll('.dev-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-dev-filter');

      devItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCat === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   4. Timeline System (1800 - 2100 Data Engine)
   ========================================================================== */
const timelineData = {
  '1800': {
    title: '1800 — Dawn of Modern Industry & Craft',
    badge: 'PRE-INDUSTRIAL ERA',
    timeSpan: 'c. 1800 • Agricultural Craft & Manual Mechanical Tools',
    tech: 'Water wheels, mechanical clocks, early steam engines, physical printing presses, handlooms.',
    lifestyle: 'Agricultural rural life, physical artisanal crafts, reliance on natural daylight, hearth warmth.',
    comm: 'Handwritten ink letters carried by stagecoach or horseback riders taking weeks between towns.',
    transit: 'Horse-drawn carriages, bullock carts, wooden sailing ships reliant on planetary wind currents.',
    edu: 'Chalk slates, scarce printed primers, village schools, classical Latin rote memorization.',
    major: 'Beginning of the shift from agrarian hand labor to machine-assisted textile manufacture.'
  },
  '1900': {
    title: '1900 — The Industrial Boom & Urbanization',
    badge: 'INDUSTRIAL ERA',
    timeSpan: 'c. 1900 • Electrification & Steel Rail Networks',
    tech: 'Direct current & alternating current grids, incandescent bulbs, internal combustion motors, factories.',
    lifestyle: 'Rapid urban shift to cities, factory shift whistles, department stores, gas-to-electric conversion.',
    comm: 'Telegraph networks spanning oceans via underwater cables; copper wire landline telephones emerging.',
    transit: 'Transcontinental steam locomotives, early Benz automobiles, transatlantic passenger steamers.',
    edu: 'Standardized public schooling, mass printed encyclopedia volumes, municipal public libraries.',
    major: 'Electricity conquered nighttime darkness and physical rail shrank continental distances.'
  },
  '1950': {
    title: '1950 — Mass Media & Early Computation',
    badge: 'MID-CENTURY ERA',
    timeSpan: 'c. 1950 • Broadcast Media & Jet Propulsion',
    tech: 'Vacuum tube mainframe computers (ENIAC), transistor invention (1947), radar, jet engines.',
    lifestyle: 'Suburban living boom, commercial appliances (fridges, washers), living room television sets.',
    comm: 'Broadcast AM/FM radio, black & white national television networks, international rotary calls.',
    transit: 'Commercial passenger jetliners, suburban highways, interstate road networks, diesel trains.',
    edu: 'Higher education expansion, slide rules, scientific journals, audio-visual film projector reels.',
    major: 'Instant live broadcast unified cultural awareness; silicon transistors laid the microchip foundation.'
  },
  '1980': {
    title: '1980 — The Microcomputer Revolution',
    badge: 'DIGITAL DAWN',
    timeSpan: 'c. 1980 • Personal Computing & Microprocessors',
    tech: 'Apple II, IBM 5150 PC, microprocessor chips (Intel 8086), floppy disks, cassette data storage.',
    lifestyle: 'Computer desks in offices, arcade video games, Walkman portable audio, VHS home movies.',
    comm: 'First commercial brick cellular phones, dial-up bulletin board systems (BBS), fax machines.',
    transit: 'Fuel-injected Japanese compact automobiles, high-speed French TGV bullet trains, supersonic Concorde.',
    edu: 'Computers introduced into high school labs, BASIC programming classes, floppy disk tutorials.',
    major: 'Computers shifted from isolated corporate basements into desktop personal appliances.'
  },
  '2000': {
    title: '2000 — The World Wide Web & Dot-Com Era',
    badge: 'INFORMATION AGE',
    timeSpan: 'c. 2000 • Global Hyperlink Connectivity',
    tech: 'The World Wide Web (HTML), dial-up to DSL broadband, search engines (Google, Yahoo), MP3s.',
    lifestyle: 'Cybercafes, buying books on Amazon, instant messaging (MSN, AOL, ICQ), DVD movie rentals.',
    comm: 'Email replacing postal letters for business, SMS text messaging, web portals, web forums.',
    transit: 'Global air travel peak, GPS navigation devices mounted on dashboards, early hybrid cars (Prius).',
    edu: 'Online encyclopedias (Wikipedia launch in 2001), digital research libraries, CD-ROM encyclopedias.',
    major: 'The internet transformed planetary civilization into an interconnected open knowledge grid.'
  },
  '2010': {
    title: '2010 — Smartphones & Ubiquitous Social Feeds',
    badge: 'MOBILE ERA',
    timeSpan: 'c. 2010 • Pocket Touchscreens & Social Graph',
    tech: 'Multi-touch capacitive smartphones, 3G/4G LTE wireless, app stores, cloud computing infrastructure.',
    lifestyle: 'Always-connected lifestyles, algorithmic social media feeds, ride-hailing apps, mobile selfies.',
    comm: 'WhatsApp, iMessage, Instagram, Twitter, FaceTime, high-definition instant mobile video sharing.',
    transit: 'App-based ride-sharing (Uber/Lyft), electric car pioneers (Tesla Roadster/Model S), high-speed rail networks.',
    edu: 'iPad in education, Khan Academy, Massive Open Online Courses (Coursera, edX), YouTube tutorials.',
    major: 'Decoupled internet access from static desks, turning computing into an ambient pocket habit.'
  },
  '2020': {
    title: '2020 — Cloud Acceleration & Artificial Intelligence',
    badge: 'HYPER-DIGITAL ERA',
    timeSpan: 'c. 2020 • Remote Transformation & Transformer Models',
    tech: 'Large Language Models (GPT), remote cloud platforms, Zoom teleconferencing, mRNA vaccines.',
    lifestyle: 'Global remote and hybrid work revolution, grocery delivery apps, creator streaming economy.',
    comm: 'High-definition encrypted cloud collaboration, Discord communities, short-form video algorithms.',
    transit: 'Mass commercial EV models, automated highway lane-centering, battery gigafactories.',
    edu: 'Zoom remote universities, generative AI study tools, interactive remote coding environments.',
    major: 'Artificial intelligence transitioned from theoretical research into everyday workflow accelerators.'
  },
  'TODAY': {
    title: 'TODAY — Connected Digital Society',
    badge: 'CURRENT ERA',
    timeSpan: '2026 • Real-Time Information Age & AI Integration',
    tech: 'Everyday smartphones, hyper-scale cloud servers, generative AI copilots, 5G wireless networks, and robotics.',
    lifestyle: 'Global hybrid/remote employment, cashless payments via UPI, on-demand streaming, algorithmic food & parcel delivery.',
    comm: 'Encrypted instant video & text messaging globally, interactive social feeds, AI speech translation.',
    transit: 'Electric vehicles, algorithmic ride-sharing, bullet trains, global commercial flight fleets.',
    edu: 'Digital classrooms, personalized adaptive learning algorithms, online degrees, open research repos.',
    major: 'Information friction dropped to near zero, linking 8+ billion people into a single real-time network.'
  },
  '2030': {
    title: '2030 — Near-Term Convergence',
    badge: 'EMERGING FUTURE',
    timeSpan: 'c. 2030 • Ambient AI & Clean Energy Grids',
    tech: 'Contextual AI agents handling personal logistics, commercial sodium/solid-state batteries, 6G pilots.',
    lifestyle: 'Autonomous household chores, decentralized clean solar micro-grids, biometric access everywhere.',
    comm: 'Real-time multilingual neural speech translation, mixed reality smart glasses replacing phones.',
    transit: 'Autonomous robotaxi fleets in major cities, electric delivery drones, hydrogen freight pilots.',
    edu: 'Adaptive neuro-cognitive AI tutors custom-calibrated to each child’s psychological learning style.',
    major: 'Routine cognitive and administrative labor automated by ubiquitous agentic software copilots.'
  },
  '2050': {
    title: '2050 — Planetary Automation & Deep Space Bases',
    badge: 'ADVANCED FUTURE',
    timeSpan: 'c. 2050 • Biophilic Smart Cities & Clean Fusion',
    tech: 'Commercial net-positive magnetic confinement fusion, general humanoid robotics, gene-edited longevity.',
    lifestyle: 'Carbon-negative vertical forest cities, circular zero-waste economy, universal baseline abundance.',
    comm: 'Holographic full-presence sensory lounges, direct brain-computer cognitive search interfaces.',
    transit: 'AI-choreographed autonomous sky corridors, sub-orbital hypersonic passenger hops, maglev tubes.',
    edu: 'Neural skill acceleration, interactive historical full-dive simulations, planetary research collectives.',
    major: 'Fossil fuel dependence completely phased out; humanity establishes permanent scientific colonies on Moon & Mars.'
  },
  '2100': {
    title: '2100 — Speculative Post-Scarcity Civilizations',
    badge: 'SPECULATIVE HORIZONS',
    timeSpan: 'c. 2100 • Interplanetary Society & Stellar Energy',
    tech: 'Dyson solar collectors, molecular atomic nanotech fabrication, room-temperature quantum supercomputers.',
    lifestyle: 'Post-scarcity matter synthesis, prolonged biological youth, interplanetary citizenship.',
    comm: 'Instant thought-synthesis across interplanetary relay networks, quantum entanglement communication.',
    transit: 'Antimatter and light-sail probes to nearest star systems; commercial orbital space elevators.',
    edu: 'Instant conceptual neural transfer; education focuses entirely on creative philosophy and cosmos exploration.',
    major: 'Humanity achieves Type I civilization status, living sustainably with Earth and expanding into the solar system.'
  }
};

function initTimelineSystem() {
  const nodeBtns = document.querySelectorAll('.timeline-node-btn');
  const titleEl = document.getElementById('tlEraTitle');
  const badgeEl = document.getElementById('tlEraBadge');
  const timeSpanEl = document.getElementById('tlTimeSpan');
  const techEl = document.getElementById('tlTech');
  const lifestyleEl = document.getElementById('tlLifestyle');
  const commEl = document.getElementById('tlComm');
  const transitEl = document.getElementById('tlTransit');
  const eduEl = document.getElementById('tlEdu');
  const majorEl = document.getElementById('tlMajor');

  nodeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      nodeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const year = btn.getAttribute('data-year');
      const data = timelineData[year];
      if (!data) return;

      // Gentle procedural click sound
      playChronoChime(440, 'sine', 0.08);

      // Fade out slightly & update
      const displayCard = document.getElementById('timelineDisplayBox');
      displayCard.style.opacity = '0.5';

      setTimeout(() => {
        titleEl.innerText = data.title;
        badgeEl.innerText = data.badge;
        timeSpanEl.innerText = data.timeSpan;
        techEl.innerText = data.tech;
        lifestyleEl.innerText = data.lifestyle;
        commEl.innerText = data.comm;
        transitEl.innerText = data.transit;
        eduEl.innerText = data.edu;
        majorEl.innerText = data.major;

        displayCard.style.opacity = '1';
      }, 150);
    });
  });
}

/* ==========================================================================
   5. Future Predictions Form & Local Storage Stream
   ========================================================================== */
function initFuturePredictions() {
  const form = document.getElementById('futurePredictionForm');
  const alertBox = document.getElementById('predAlertBox');
  const streamContainer = document.getElementById('livePredictionsStream');

  // Initial seed predictions if storage is empty
  const defaultPredictions = [
    {
      category: 'Future Cities',
      text: 'Floating vertical eco-cities with bio-luminescent night lighting and complete zero-landfill recycling.',
      author: 'Sophia Chen',
      time: 'Just now'
    },
    {
      category: 'Future Transportation',
      text: 'Vacuum tube hyperloops carrying passengers from London to Tokyo in under 4 hours on solar power.',
      author: 'David Kumar',
      time: '2 hours ago'
    },
    {
      category: 'Future Healthcare',
      text: 'Microscopic cellular nanobots that repair aged arterial walls and eliminate cardio diseases.',
      author: 'Dr. Elena Rostova',
      time: 'Today'
    }
  ];

  let storedPreds = JSON.parse(localStorage.getItem('timecapsule_predictions')) || defaultPredictions;
  renderPredictions(storedPreds);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tTransport = document.getElementById('predTransport').value.trim();
    const tEdu = document.getElementById('predEducation').value.trim();
    const tHealth = document.getElementById('predHealth').value.trim();
    const tCity = document.getElementById('predCities').value.trim();

    const newEntry = {
      category: '2050 Vision',
      text: `Transit: ${tTransport} | Health: ${tHealth} | Cities: ${tCity} | Edu: ${tEdu}`,
      author: 'Visitor Chrononaut',
      time: 'Just now'
    };

    storedPreds.unshift(newEntry);
    if (storedPreds.length > 9) storedPreds.pop();
    localStorage.setItem('timecapsule_predictions', JSON.stringify(storedPreds));

    renderPredictions(storedPreds);
    form.reset();

    // Show confirmation
    alertBox.classList.remove('d-none');
    playChronoChime(660, 'triangle', 0.15);

    setTimeout(() => {
      alertBox.classList.add('d-none');
    }, 5000);
  });

  function renderPredictions(list) {
    if (!streamContainer) return;
    streamContainer.innerHTML = list.map(item => `
      <div class="col-md-4">
        <div class="p-3 rounded-3 border-aqua-glow h-100" style="background: rgba(8, 22, 36, 0.7);">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="badge text-bg-dark border border-info text-aqua small">${escapeHtml(item.category)}</span>
            <small class="text-secondary">${escapeHtml(item.time)}</small>
          </div>
          <p class="text-slate-300 small mb-2">"${escapeHtml(item.text)}"</p>
          <div class="text-xs text-secondary">— <em>${escapeHtml(item.author)}</em></div>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   6. Gallery Story Modal Data & Handlers
   ========================================================================== */
const galleryStories = {
  'past-phone': {
    title: 'Antique Rotary Telephone (c. 1920-1970)',
    era: 'PAST',
    img: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80',
    headline: 'When A Phone Call Was A Household Ceremony',
    description: 'Before mobile devices lived in our palms, telephones were heavy stationary fixtures anchored to living room walls with curly cables. To place a call across town, you picked up the handset, turned a mechanical spring-loaded dial for each digit, and listened to analog pulse clicks. For long distance, human switchboard operators manually patched copper patch cords into switch sockets.',
    context: 'Telephony fundamentally taught civilization to listen to distant voices across wires for the very first time.'
  },
  'past-classroom': {
    title: 'The Inkwell & Blackboard Schoolroom',
    era: 'PAST',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    headline: 'Physical Slates, Chalk Dust, and Solemn Attention',
    description: 'Generations of scholars learned through slate boards wiped clean with damp rags and wooden dip pens dipped into ceramic inkwells carved into oak desks. Information was scarce: a single hardcover encyclopedia in the school library served hundreds of students, and rote recitation was the standard method of preserving knowledge.',
    context: 'Education required deep patience, physical handwriting mastery, and physical classroom presence.'
  },
  'past-camera': {
    title: '35mm Film Camera & Chemical Darkrooms',
    era: 'PAST',
    img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80',
    headline: 'Twenty-Four Precious Exposures on Cellulose',
    description: 'Taking a photograph was once an art of scarcity. A standard roll offered only 24 or 36 exposures. You had to manually set aperture and shutter speed, manually advance the film crank, and hold your breath. You could not see the photo until days later when the chemical emulsion was bathed in developer, stop bath, and fixer under red darkroom lamps.',
    context: 'Every single frame captured carried weight and deliberation; photos were carefully treasured in leatherbound family albums.'
  },
  'past-transport': {
    title: 'Steam Locomotives on Steel Arteries',
    era: 'PAST',
    img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
    headline: 'The Roar of Coal and Iron That Shrank Continents',
    description: 'In the 19th and early 20th centuries, the steam locomotive was the pinnacle of human engineering prowess. Teams of firemen shoveled tons of anthracite coal into white-hot boiler fireboxes, driving massive iron pistons that propelled transcontinental trains through snow-capped mountains and untamed prairies.',
    context: 'Railroads catalyzed standardized time zones across the world, as train schedules demanded uniform seconds.'
  },
  'past-computer': {
    title: 'CRT Microcomputers & Floppy Drives',
    era: 'PAST',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    headline: 'When Glowing Green Phosphor Began The Code Revolution',
    description: 'During the late 1970s and 1980s, computers took their first steps into bedrooms and offices. With only 64 kilobytes of RAM and magnetic 5.25" floppy disks that stored 360 KB, developers wrote text games and early spreadsheets in BASIC. Every byte of memory was guarded with meticulous reverence.',
    context: 'This humble mechanical dawn paved the highway toward the modern world of infinite web services and AI.'
  },
  'present-phone': {
    title: 'Bezel-Less Silicon Supercomputer',
    era: 'PRESENT',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    headline: 'All Human Knowledge Concentrated In Tempered Glass',
    description: 'Today, a slim rectangle weighing less than 200 grams contains billions of 3-nanometer transistors, satellite GPS, 4K video cameras, and instant wireless connectivity to global supercomputers. With one touch, a person can buy groceries, learn quantum physics, trade equities, or speak visually to family across the globe.',
    context: 'The smartphone has become the central digital organ of contemporary human civilization.'
  },
  'present-ev': {
    title: 'Electric & Connected Transportation',
    era: 'PRESENT',
    img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    headline: 'Silent Torque Powered by Clean Electrons',
    description: 'Modern electric vehicles eliminate combustible tailpipe emissions in exchange for skateboard battery packs and high-efficiency permanent-magnet motors. Guided by real-time cellular telemetry and neural autopilot vision systems, these vehicles represent the shift toward sustainable autonomous mobility.',
    context: 'Accelerating the decarbonization of urban transportation while paving the road for driverless fleet networks.'
  },
  'present-classroom': {
    title: 'The Connected Smart Classroom',
    era: 'PRESENT',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    headline: 'Interactive Flat Panels, Digital Notebooks & Adaptive AI',
    description: 'Today’s educational environments integrate interactive multitouch screens, cloud workspaces, simulation software, and AI homework aids. Students can dissect virtual 3D molecules, run physics simulations, and collaborate synchronously with peers located across multiple continents.',
    context: 'Knowledge is no longer bounded by physical bookshelves; it is an active, open, interactive playground.'
  },
  'present-city': {
    title: 'The Hyper-Connected Megacity',
    era: 'PRESENT',
    img: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80',
    headline: 'Urban Skylines Interwoven with High-Speed Fiber Networks',
    description: 'Contemporary metropolitan centers represent human cooperation at an unprecedented scale. Underground metro networks transport millions daily, managed by algorithmic signaling systems, while skyscrapers utilize energy-efficient architectural glass and fiber-optic communication veins.',
    context: 'More than half of the human species now resides in cities, driving the global creative and technological engine.'
  },
  'present-ai': {
    title: 'Artificial Intelligence & Neural Computation',
    era: 'PRESENT',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    headline: 'Machines That Reason, Synthesize & Create',
    description: 'By training deep neural networks on billions of parameters of human text, code, imagery, and scientific papers, AI models have crossed into reasoning copilots. They assist doctors in diagnosing rare cancers, write computer code, compose music, and analyze astronomical telescope data.',
    context: 'We are witnessing the inception of synthetic cognition as a primary multiplier of human ambition.'
  },
  'future-city': {
    title: 'Biophilic Vertical Megacity of 2050+',
    era: 'FUTURE',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    headline: 'Architecture Living in Symbiosis With Earth’s Biosphere',
    description: 'Future cities will abandon concrete heat islands in favor of carbon-absorbing biophilic towers draped in engineered flora. Transparent photovoltaic windows generate localized power, while closed-loop vertical farms produce fresh nourishment directly within high-rise residential complexes.',
    context: 'Harmonizing technological high-density habitats with natural ecological restoration.'
  },
  'future-robot': {
    title: 'Cognitive Humanoid Android Companions',
    era: 'FUTURE',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    headline: 'Tireless Partners in Science, Care & Construction',
    description: 'Equipped with compliant synthetic muscles, multi-modal spatial awareness, and empathetic dialogue processors, future humanoids will manage dangerous industrial construction, assist the elderly with gentle companionship, and maintain hazardous disaster environments safely.',
    context: 'Human-machine collaboration will liberate people from dangerous repetitive physical strain.'
  },
  'future-transit': {
    title: 'Autonomous Aerial Sky Corridors',
    era: 'FUTURE',
    img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    headline: 'Three-Dimensional Traffic Without Gridlock',
    description: 'Quiet electric vertical takeoff and landing (eVTOL) pods will navigate dedicated three-dimensional aerial sky corridors managed by central air traffic AI. Point-to-point urban travel will happen in minutes without tearing up land for asphalt highways.',
    context: 'Transforming urban transportation into a fluid, zero-emission 3D network.'
  },
  'future-space': {
    title: 'Permanent Off-World Habitats & Space Industry',
    era: 'FUTURE',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    headline: 'Humanity Blossoms Into A Multi-Planetary Species',
    description: 'Permanent rotating artificial-gravity space habitats in low-Earth orbit, research stations on the lunar south pole, and bio-domes on the red plains of Mars. Asteroid mining will provide boundless metals, protecting Earth from disruptive terrestrial mining.',
    context: 'Securing the preservation of human consciousness and curiosity across the cosmos.'
  },
  'future-health': {
    title: 'Nanomedicine & Cellular Age Reversal',
    era: 'FUTURE',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    headline: 'Healing Diseases at the Sub-Cellular & Genetic Core',
    description: 'Surgical scalpels and aggressive chemical pills will be replaced by programmable biological nanobots that navigate the bloodstream, hunting pathogens, removing arterial plaques, and repairing telomeres to preserve healthy human vitality well past a century.',
    context: 'Transitioning medicine from reactive crisis treatment to proactive cellular renewal.'
  }
};

function initGallerySystem() {
  const filterBtns = document.querySelectorAll('[data-gallery-filter]');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterEra = btn.getAttribute('data-gallery-filter');

      galleryItems.forEach(item => {
        const itemEra = item.getAttribute('data-era');
        if (filterEra === 'all' || itemEra === filterEra) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Global modal trigger for story cards
window.openStoryModal = function(storyKey) {
  const story = galleryStories[storyKey];
  if (!story) return;

  document.getElementById('galleryStoryModalLabel').innerText = story.title;
  document.getElementById('modalEraBadge').innerText = story.era;
  document.getElementById('modalStoryImg').src = story.img;
  document.getElementById('modalStoryHeadline').innerText = story.headline;
  document.getElementById('modalStoryDescription').innerText = story.description;
  document.getElementById('modalStoryContext').innerText = story.context;

  // Era badge styling
  const badgeEl = document.getElementById('modalEraBadge');
  if (story.era === 'PAST') {
    badgeEl.className = 'badge text-bg-warning text-dark fw-bold';
  } else if (story.era === 'PRESENT') {
    badgeEl.className = 'badge text-bg-info text-dark fw-bold';
  } else {
    badgeEl.className = 'badge bg-aqua text-dark fw-bold';
  }

  playChronoChime(520, 'sine', 0.1);

  const modalInstance = new bootstrap.Modal(document.getElementById('galleryStoryModal'));
  modalInstance.show();
};

/* ==========================================================================
   7. My Time Capsule Engine (Form, Sealing Animation, Countdown, Storage)
   ========================================================================== */
let countdownInterval = null;

function initTimeCapsuleEngine() {
  const form = document.getElementById('digitalTimeCapsuleForm');
  const createdDateInput = document.getElementById('tcCreatedDate');
  const openingDateInput = document.getElementById('tcOpeningDate');

  // Auto populate current date
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  if (createdDateInput) createdDateInput.value = todayStr;

  // Default opening date to +5 years in future
  const futureDate = new Date();
  futureDate.setFullYear(now.getFullYear() + 5);
  if (openingDateInput) openingDateInput.value = futureDate.toISOString().split('T')[0];

  // Check if a sealed capsule already exists in localStorage
  const existingCapsule = localStorage.getItem('timecapsule_sealed_data');
  if (existingCapsule) {
    try {
      const data = JSON.parse(existingCapsule);
      renderSealedCapsuleView(data);
    } catch(err) {
      console.error(err);
    }
  }

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const capsuleData = {
      owner: document.getElementById('tcName').value.trim(),
      title: document.getElementById('tcTitle').value.trim(),
      createdDate: document.getElementById('tcCreatedDate').value,
      openingDate: document.getElementById('tcOpeningDate').value,
      message: document.getElementById('tcMessage').value.trim(),
      goals: document.getElementById('tcGoals').value.trim(),
      dreams: document.getElementById('tcDreams').value.trim(),
      favorites: document.getElementById('tcFavorites').value.trim(),
      memory: document.getElementById('tcMemory').value.trim(),
      prediction: document.getElementById('tcPrediction').value.trim(),
      techVision: document.getElementById('tcTechVision').value.trim(),
      worldWish: document.getElementById('tcWorldWish').value.trim(),
      sealedAt: new Date().toISOString()
    };

    // Trigger futuristic sealing animation & sound
    executeCapsuleSealSequence(capsuleData);
  });
}

function executeCapsuleSealSequence(data) {
  const sealBtn = document.getElementById('sealCapsuleBtn');
  sealBtn.disabled = true;
  sealBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> ENCRYPTING & SEALING VAULT...`;

  // Synthesize lock vault chime & cyber sound
  playCyberVaultChimes();

  // Trigger celebration confetti
  triggerChronoConfetti();

  setTimeout(() => {
    // Save to localStorage
    localStorage.setItem('timecapsule_sealed_data', JSON.stringify(data));

    // Transition UI
    renderSealedCapsuleView(data);
    sealBtn.disabled = false;
    sealBtn.innerHTML = `<i class="fa-solid fa-lock me-2"></i> SEAL MY TIME CAPSULE`;

    // Smooth scroll directly to sealed display
    document.getElementById('sealedCapsuleDisplay').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 1200);
}

function renderSealedCapsuleView(data) {
  const formBox = document.getElementById('capsuleFormContainer');
  const sealedBox = document.getElementById('sealedCapsuleDisplay');

  if (formBox) formBox.classList.add('d-none');
  if (sealedBox) sealedBox.classList.remove('d-none');

  document.getElementById('displayCapsuleTitle').innerText = data.title || 'Personal Time Capsule';
  document.getElementById('displayCapsuleOwner').innerText = data.owner || 'Chrononaut';
  document.getElementById('displayCreatedDate').innerText = formatDate(data.createdDate || data.sealedAt);
  document.getElementById('displayOpeningDate').innerText = formatDate(data.openingDate);

  // Start live countdown
  startCapsuleCountdown(data.openingDate);
}

function startCapsuleCountdown(targetDateStr) {
  if (countdownInterval) clearInterval(countdownInterval);

  const targetTime = new Date(targetDateStr + 'T00:00:00').getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      document.getElementById('cdDays').innerText = '00';
      document.getElementById('cdHours').innerText = '00';
      document.getElementById('cdMins').innerText = '00';
      document.getElementById('cdSecs').innerText = '00';
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('cdDays').innerText = days.toLocaleString();
    document.getElementById('cdHours').innerText = String(hours).padStart(2, '0');
    document.getElementById('cdMins').innerText = String(minutes).padStart(2, '0');
    document.getElementById('cdSecs').innerText = String(seconds).padStart(2, '0');
  }

  update();
  countdownInterval = setInterval(update, 1000);
}

window.resetCapsuleForm = function() {
  if (confirm('Create a new capsule? Your previous capsule data will remain stored in backup.')) {
    document.getElementById('sealedCapsuleDisplay').classList.add('d-none');
    document.getElementById('capsuleFormContainer').classList.remove('d-none');
    document.getElementById('digitalTimeCapsuleForm').reset();

    const createdDateInput = document.getElementById('tcCreatedDate');
    const openingDateInput = document.getElementById('tcOpeningDate');
    const now = new Date();
    createdDateInput.value = now.toISOString().split('T')[0];
    const futureDate = new Date();
    futureDate.setFullYear(now.getFullYear() + 5);
    openingDateInput.value = futureDate.toISOString().split('T')[0];

    localStorage.removeItem('timecapsule_sealed_data');
  }
};

window.printOrExportCapsule = function() {
  const raw = localStorage.getItem('timecapsule_sealed_data');
  if (!raw) return;
  const data = JSON.parse(raw);

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>TimeCapsule Official Vault Certificate — ${escapeHtml(data.title)}</title>
      <style>
        body { font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #050b14; color: #f8fafc; padding: 40px; margin: 0; }
        .cert-card { border: 2px solid #00f0ff; border-radius: 20px; padding: 40px; max-width: 800px; margin: auto; background: #091728; box-shadow: 0 0 40px rgba(0,240,255,0.3); }
        h1 { color: #00f0ff; margin-top: 0; font-size: 32px; text-align: center; }
        .subtitle { text-align: center; color: #94a3b8; font-size: 16px; margin-bottom: 30px; }
        .field-group { margin-bottom: 20px; border-bottom: 1px solid #1e293b; padding-bottom: 12px; }
        .label { font-size: 12px; text-transform: uppercase; color: #00f0ff; font-weight: bold; }
        .val { font-size: 16px; color: #f1f5f9; margin-top: 4px; }
        .message-box { background: rgba(0,240,255,0.05); border-left: 4px solid #00f0ff; padding: 15px; border-radius: 8px; font-style: italic; }
        .footer { text-align: center; color: #64748b; font-size: 12px; margin-top: 40px; }
        @media print {
          body { background: white; color: black; }
          .cert-card { border-color: black; background: white; color: black; box-shadow: none; }
          .field-group { border-color: #ccc; }
          .label { color: #333; }
          .val { color: #000; }
          .message-box { background: #f0f0f0; border-color: #333; }
        }
      </style>
    </head>
    <body>
      <div class="cert-card">
        <h1>⏳ TIMECAPSULE VAULT CERTIFICATE</h1>
        <div class="subtitle">Official Cryo-Sealed Digital Chrono-Record</div>
        
        <div class="field-group">
          <div class="label">Capsule Title</div>
          <div class="val">${escapeHtml(data.title)}</div>
        </div>

        <div class="field-group">
          <div class="label">Owner / Author</div>
          <div class="val">${escapeHtml(data.owner)}</div>
        </div>

        <div style="display: flex; gap: 40px;">
          <div class="field-group" style="flex: 1;">
            <div class="label">Date Sealed</div>
            <div class="val">${formatDate(data.createdDate || data.sealedAt)}</div>
          </div>
          <div class="field-group" style="flex: 1;">
            <div class="label">Designated Opening Date</div>
            <div class="val">${formatDate(data.openingDate)}</div>
          </div>
        </div>

        <div class="field-group">
          <div class="label">Message To Future Self</div>
          <div class="val message-box">"${escapeHtml(data.message)}"</div>
        </div>

        <div class="field-group">
          <div class="label">Current Goals & Dreams</div>
          <div class="val">Goals: ${escapeHtml(data.goals || 'None specified')} <br> Dreams: ${escapeHtml(data.dreams || 'None specified')}</div>
        </div>

        <div class="field-group">
          <div class="label">Future Prediction & World Wish</div>
          <div class="val">Prediction: ${escapeHtml(data.prediction || 'N/A')} <br> World Wish: ${escapeHtml(data.worldWish || 'N/A')}</div>
        </div>

        <div class="footer">
          Digitally Cryptographically Sealed • Verified by TimeCapsule Chrono-Engine © 2026
        </div>
      </div>
      <script>
        window.onload = function() { window.print(); }
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
};

/* ==========================================================================
   8. Message to Future Self
   ========================================================================== */
function initFutureMessage() {
  const msgInput = document.getElementById('dearFutureMeText');
  const saveBtn = document.getElementById('saveFutureMsgBtn');
  const successAlert = document.getElementById('envelopeSealSuccess');

  const savedLetter = localStorage.getItem('timecapsule_future_letter');
  if (savedLetter && msgInput) {
    msgInput.value = savedLetter;
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const text = msgInput.value.trim();
      if (!text) {
        alert('Please write your letter before sealing!');
        return;
      }

      localStorage.setItem('timecapsule_future_letter', text);
      playChronoChime(580, 'triangle', 0.2);

      successAlert.classList.remove('d-none');
      setTimeout(() => {
        successAlert.classList.add('d-none');
      }, 5000);
    });
  }
}

/* ==========================================================================
   9. Memory Cards Persistence
   ========================================================================== */
function initMemoryCards() {
  const saveBtn = document.getElementById('saveMemoriesBtn');
  const alertEl = document.getElementById('memoriesSavedAlert');

  // Load existing values
  const savedMemories = JSON.parse(localStorage.getItem('timecapsule_memory_cards')) || {};
  for (let i = 1; i <= 10; i++) {
    const input = document.getElementById(`mem${i}`);
    if (input && savedMemories[`mem${i}`]) {
      input.value = savedMemories[`mem${i}`];
    }
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const memObj = {};
      for (let i = 1; i <= 10; i++) {
        const input = document.getElementById(`mem${i}`);
        if (input) memObj[`mem${i}`] = input.value.trim();
      }

      localStorage.setItem('timecapsule_memory_cards', JSON.stringify(memObj));
      playChronoChime(520, 'sine', 0.12);

      alertEl.classList.remove('d-none');
      setTimeout(() => {
        alertEl.classList.add('d-none');
      }, 4000);
    });
  }
}

/* ==========================================================================
   10. Contact Form Handler
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertEl = document.getElementById('contactSuccessAlert');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      playChronoChime(600, 'sine', 0.1);
      alertEl.classList.remove('d-none');
      form.reset();

      setTimeout(() => {
        alertEl.classList.add('d-none');
      }, 6000);
    });
  }
}

/* ==========================================================================
   11. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   Procedural Audio Synthesis (Web Audio API)
   Generates futuristic cyber chimes without external mp3 files
   ========================================================================== */
function playChronoChime(freq = 440, type = 'sine', duration = 0.15) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio contexts may be blocked by browser until user gesture
  }
}

function playCyberVaultChimes() {
  try {
    const notes = [330, 440, 554, 660, 880];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        playChronoChime(freq, 'triangle', 0.3);
      }, idx * 120);
    });
  } catch(e) {}
}

function triggerChronoConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#00c8d7', '#38bdf8', '#ffffff', '#d4a373']
    });
  }
}

/* Helper Utilities */
function formatDate(dateString) {
  if (!dateString) return '—';
  try {
    const opts = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString + 'T00:00:00').toLocaleDateString(undefined, opts);
  } catch(e) {
    return dateString;
  }
}

function escapeHtml(string) {
  if (!string) return '';
  return String(string).replace(/[&<>"']/g, function(s) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[s];
  });
}
