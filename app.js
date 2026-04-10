/**
 * OrbitalIdeas | Space Discovery Platform
 */

const CATEGORIES = [
    'Earth Observation', 'Lunar Missions', 'Mars Exploration', 'Space Robotics', 
    'Satellite Tech', 'Space Tourism', 'Propulsion', 'Astrobiology', 
    'Space Medicine', 'Deep Space Comms', 'Debris Cleanup', 'Space Mining', 
    'Space Habitats', 'Exoplanet Research'
];

const IDEA_TYPES = ['Website', 'Mobile App', 'Startup', 'Research Topic', 'Hardware', 'Open Source Tool', 'Space Mission', 'Educational'];

const MOCK_IDEAS = [
    // === Original AI Oracle Ideas ===
    { id: 101, title: 'Swarm robotics for autonomous lunar regolith mining', tagline: 'Extracting He-3 with collaborative micro-rovers.', desc: 'Using swarms of inexpensive 1kg rovers to slowly but continuously mine lunar topsoil for resources.', category: 'Space Robotics', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_AI_Oracle', isAI: true, likes: 342, tags: ['lunar', 'robotics'], stage: 'Concept', problem: 'Large rovers are single points of failure.' },
    { id: 102, title: 'AR app overlaying satellite data on real-time sky view', tagline: 'Point your phone up, see live orbits.', desc: 'An AR mobile application that queries live telemetry to show passing satellites, debris, and ISS with interactive tooltips.', category: 'Earth Observation', type: 'Mobile App', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_AI_Oracle', isAI: true, likes: 512, tags: ['ar', 'education'], stage: 'Prototype', problem: 'People feel disconnected from space infrastructure.' },
    { id: 103, title: 'Crowdsourced exoplanet transit detection via smartphone cameras', tagline: 'Distributed telescope array using civilian phones.', desc: 'App that snaps long-exposure sky photos while users sleep, aggregating data to find light dips in target stars.', category: 'Exoplanet Research', type: 'Mobile App', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_AI_Oracle', isAI: true, likes: 128, tags: ['crowdsourcing', 'astronomy'], stage: 'Early Validation', problem: 'Telescope time is expensive and limited.' },
    { id: 104, title: 'Biodegradable microsat bus for debris reduction', tagline: 'Satellites that safely burn up completely.', desc: 'Replacing aluminum structures with specialized polymers that offer structural integrity during launch but vaporize rapidly upon reentry.', category: 'Debris Cleanup', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_AI_Oracle', isAI: true, likes: 890, tags: ['sustainability', 'materials'], stage: 'Research Topic', problem: 'Kessler syndrome threatens LEO operations.' },
    { id: 105, title: 'AI triage system for space medicine', tagline: 'Autonomous diagnosis for deep space missions.', desc: 'An LLM-driven medical assistant trained on NASA datasets to guide non-physician astronauts through medical emergencies.', category: 'Space Medicine', type: 'Research Topic', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_AI_Oracle', isAI: true, likes: 215, tags: ['ai', 'health'], stage: 'Concept', problem: 'Communication delays make earth-bound doctors useless in emergencies.' },
    { id: 106, title: 'P2P mesh network using CubeSat constellation', tagline: 'Routing data directly between cheap sats.', desc: 'Software protocol allowing standard CubeSats to route packets to each other without ground stations, creating an orbital mesh net.', category: 'Satellite Tech', type: 'Startup', difficulty: 'Deep Space (Hard)', time: '1 year', poster: 'astro_AI_Oracle', isAI: true, likes: 430, tags: ['comms', 'software'], stage: 'Concept', problem: 'Downlink bottlenecks limit small-sat viability.' },

    // ============================
    // 100 astro_claude ideas below
    // ============================

    // --- Earth Observation (8) ---
    { id: 201, title: 'AI-powered wildfire prediction from SAR imagery', tagline: 'Predicting fires before they ignite using radar.', desc: 'A machine learning pipeline that fuses Sentinel-1 SAR backscatter with soil moisture data to predict wildfire risk zones 72 hours in advance.', category: 'Earth Observation', type: 'Startup', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 287, tags: ['sar', 'wildfire', 'ai'], stage: 'Prototype', problem: 'Wildfires cause $50B+ damage annually; early warning saves lives.' },
    { id: 202, title: 'Global coral reef health dashboard', tagline: 'Tracking ocean ecosystems from orbit.', desc: 'A public web dashboard ingesting multispectral satellite data to monitor coral bleaching events worldwide with weekly updates.', category: 'Earth Observation', type: 'Website', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 195, tags: ['ocean', 'climate', 'dashboard'], stage: 'Concept', problem: 'Coral reef monitoring is fragmented and slow.' },
    { id: 203, title: 'Methane super-emitter tracker for climate accountability', tagline: 'Pinpointing the worst polluters from space.', desc: 'An open-source platform combining TROPOMI and GHGSat data to identify and publicly rank the top methane-emitting industrial facilities globally.', category: 'Earth Observation', type: 'Open Source Tool', difficulty: 'Lunar (Mid)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 410, tags: ['methane', 'climate', 'transparency'], stage: 'Early Validation', problem: 'Methane sources are underreported by industry.' },
    { id: 204, title: 'Flood inundation mapping in real-time via CubeSats', tagline: 'Hourly flood maps for first responders.', desc: 'Deploying 12 optical CubeSats in sun-synchronous orbit to provide sub-hour revisit over monsoon-prone regions for emergency flood mapping.', category: 'Earth Observation', type: 'Space Mission', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 178, tags: ['flood', 'disaster', 'cubesat'], stage: 'Concept', problem: 'Current satellite revisit times are too slow during disasters.' },
    { id: 205, title: 'Urban heat island detector for smart cities', tagline: 'Mapping city hot-spots from thermal infrared.', desc: 'A SaaS tool for city planners using Landsat thermal bands to identify neighborhoods most vulnerable to heat waves, suggesting green infrastructure placement.', category: 'Earth Observation', type: 'Startup', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 223, tags: ['urban', 'thermal', 'cities'], stage: 'Prototype', problem: 'Heat kills more people than any other weather event.' },
    { id: 206, title: 'Satellite-based illegal fishing detection network', tagline: 'Dark vessels can not hide from space.', desc: 'Combining AIS transponder gaps with SAR ship detection to automatically flag and track vessels engaged in illegal, unreported fishing in protected marine zones.', category: 'Earth Observation', type: 'Startup', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 334, tags: ['maritime', 'enforcement', 'sar'], stage: 'Early Validation', problem: 'Illegal fishing depletes 26M tonnes of fish per year.' },
    { id: 207, title: 'Precision agriculture yield predictor', tagline: 'Forecast crop yields field-by-field from NDVI.', desc: 'A farmer-facing mobile app using Sentinel-2 vegetation indices combined with weather forecasts to predict per-field crop yield 8 weeks before harvest.', category: 'Earth Observation', type: 'Mobile App', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 156, tags: ['agriculture', 'ndvi', 'prediction'], stage: 'Concept', problem: 'Farmers lack actionable yield data until harvest.' },
    { id: 208, title: 'Glacier retreat time-lapse generator', tagline: 'Decades of ice loss in seconds.', desc: 'An automated pipeline pulling 40 years of Landsat archives to generate stunning animated time-lapses of glacier retreat for any mountain range on Earth.', category: 'Earth Observation', type: 'Open Source Tool', difficulty: 'Orbital (Easy)', time: '1 month', poster: 'astro_claude', isAI: true, likes: 512, tags: ['glacier', 'timelapse', 'climate'], stage: 'Prototype', problem: 'Climate change visuals lack emotional impact.' },

    // --- Lunar Missions (7) ---
    { id: 209, title: 'Lunar ice prospector rover network', tagline: 'Finding water at the Moon south pole.', desc: 'A fleet of lightweight solar-powered rovers equipped with neutron spectrometers to map subsurface water ice deposits in permanently shadowed craters.', category: 'Lunar Missions', type: 'Space Mission', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 389, tags: ['water', 'lunar', 'rover'], stage: 'Concept', problem: 'We do not know exact locations of extractable lunar water.' },
    { id: 210, title: 'Autonomous lunar landing pad constructor', tagline: 'Building launch pads with sintered regolith.', desc: 'A robotic system that uses focused solar energy to sinter lunar regolith into a hardened landing pad, preventing debris damage during subsequent landings.', category: 'Lunar Missions', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 267, tags: ['construction', '3dprint', 'regolith'], stage: 'Research Topic', problem: 'Rocket exhaust kicks up dangerous debris on unprepared lunar surface.' },
    { id: 211, title: 'Lunar GPS alternative using star trackers', tagline: 'Navigate the Moon without satellites.', desc: 'A compact navigation unit that uses stellar observations and terrain-relative navigation algorithms to provide meter-level positioning on the lunar surface.', category: 'Lunar Missions', type: 'Hardware', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 198, tags: ['navigation', 'autonomy', 'sensor'], stage: 'Concept', problem: 'There is no GPS on the Moon for rover navigation.' },
    { id: 212, title: 'Lunar dust mitigation coating for spacesuits', tagline: 'Electrostatic shield keeps dust off.', desc: 'A transparent electrostatic coating for spacesuit visors and joints that actively repels charged lunar dust particles, extending EVA equipment lifespan.', category: 'Lunar Missions', type: 'Research Topic', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 445, tags: ['dust', 'materials', 'eva'], stage: 'Early Validation', problem: 'Lunar dust abrades equipment and endangers astronaut health.' },
    { id: 213, title: 'Lava tube habitat feasibility mapper', tagline: 'Finding caves for Moon bases.', desc: 'Using orbital ground-penetrating radar data to identify and classify lunar lava tubes suitable for pressurized habitat installation, with structural integrity scoring.', category: 'Lunar Missions', type: 'Research Topic', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 567, tags: ['habitat', 'radar', 'geology'], stage: 'Concept', problem: 'Surface habitats are vulnerable to radiation and micrometeorites.' },
    { id: 214, title: 'Lunar regolith brick manufacturing unit', tagline: 'Making building blocks from Moon dirt.', desc: 'A compact machine that compresses and sinters lunar regolith into standardized bricks using concentrated solar power for in-situ construction.', category: 'Lunar Missions', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 312, tags: ['isru', 'manufacturing', 'construction'], stage: 'Concept', problem: 'Shipping construction materials from Earth is prohibitively expensive.' },
    { id: 215, title: 'Cislunar traffic management platform', tagline: 'Air traffic control for Earth-Moon space.', desc: 'A software platform for coordinating trajectories of spacecraft operating between Earth and Moon, preventing collisions and optimizing fuel usage.', category: 'Lunar Missions', type: 'Startup', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 234, tags: ['traffic', 'software', 'safety'], stage: 'Concept', problem: 'Growing cislunar traffic has no coordination system.' },

    // --- Mars Exploration (7) ---
    { id: 216, title: 'Mars atmospheric water harvester', tagline: 'Extracting moisture from thin Martian air.', desc: 'A zeolite-based adsorption system that captures water vapor from the 95% CO2 Martian atmosphere during cold nights and releases it as liquid during the day.', category: 'Mars Exploration', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 478, tags: ['water', 'isru', 'survival'], stage: 'Research Topic', problem: 'Future Mars settlers need local water sources.' },
    { id: 217, title: 'Autonomous Martian greenhouse controller', tagline: 'AI-managed food production on Mars.', desc: 'A closed-loop control system managing lighting, CO2 levels, nutrient delivery, and temperature in a pressurized Martian greenhouse using reinforcement learning.', category: 'Mars Exploration', type: 'Open Source Tool', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 356, tags: ['agriculture', 'ai', 'greenhouse'], stage: 'Prototype', problem: 'Manual crop management is impractical with communication delay.' },
    { id: 218, title: 'Mars drone scout for canyon exploration', tagline: 'Flying through Valles Marineris autonomously.', desc: 'A solar-rechargeable fixed-wing drone designed for the thin Martian atmosphere that maps canyon geology and searches for subsurface water seepage.', category: 'Mars Exploration', type: 'Space Mission', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 623, tags: ['drone', 'geology', 'exploration'], stage: 'Concept', problem: 'Rovers cannot access steep canyon terrain where water may exist.' },
    { id: 219, title: 'Martian soil toxicity remediation system', tagline: 'Cleaning perchlorates from Mars dirt.', desc: 'A bioreactor using engineered extremophile bacteria to break down toxic perchlorate salts in Martian regolith, making it safe for agriculture.', category: 'Mars Exploration', type: 'Research Topic', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 289, tags: ['biology', 'soil', 'remediation'], stage: 'Concept', problem: 'Martian soil contains toxic perchlorates lethal to humans.' },
    { id: 220, title: 'Virtual Mars base simulator for mission planning', tagline: 'Walk through your Mars habitat before it is built.', desc: 'A VR application that lets mission planners and astronauts explore and interact with proposed Mars base layouts in realistic Martian terrain.', category: 'Mars Exploration', type: 'Startup', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 345, tags: ['vr', 'simulation', 'planning'], stage: 'Prototype', problem: 'Mission planners cannot experience designs before committing billions.' },
    { id: 221, title: 'Mars sample return mission cost optimizer', tagline: 'Reducing MSR budget by 60% with AI.', desc: 'An AI trajectory optimization tool that finds minimum-energy paths for Mars sample return using aerobraking and gravity assists to slash mission costs.', category: 'Mars Exploration', type: 'Open Source Tool', difficulty: 'Lunar (Mid)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 198, tags: ['trajectory', 'optimization', 'cost'], stage: 'Early Validation', problem: 'Mars sample return missions cost $7B+ with current approaches.' },
    { id: 222, title: 'Radiation-hardened seed vault for Mars', tagline: 'Preserving Earth biodiversity on another planet.', desc: 'A shielded underground facility design on Mars storing cryopreserved seeds from 100K plant species as an off-world backup for Earths biosphere.', category: 'Mars Exploration', type: 'Research Topic', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 567, tags: ['biodiversity', 'preservation', 'vault'], stage: 'Concept', problem: 'All seed banks are on one planet vulnerable to extinction events.' },

    // --- Space Robotics (7) ---
    { id: 223, title: 'Self-repairing robotic arm for ISS maintenance', tagline: 'Robots that fix themselves in orbit.', desc: 'A modular robotic manipulator where individual joints can diagnose failures and swap out damaged actuators from an onboard spare inventory autonomously.', category: 'Space Robotics', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 312, tags: ['repair', 'iss', 'autonomy'], stage: 'Concept', problem: 'Robotic failures in orbit require expensive crew time or replacement.' },
    { id: 224, title: 'Gecko-inspired climbing robot for asteroid exploration', tagline: 'Gripping surfaces in microgravity.', desc: 'A small robot using van der Waals adhesion pads inspired by gecko feet to traverse and sample irregular asteroid surfaces without anchoring.', category: 'Space Robotics', type: 'Research Topic', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 445, tags: ['biomimicry', 'asteroid', 'adhesion'], stage: 'Research Topic', problem: 'Traditional wheels and treads do not work on low-gravity irregular bodies.' },
    { id: 225, title: 'AI vision system for orbital debris identification', tagline: 'Teaching robots to see space junk.', desc: 'A deep learning computer vision system trained on synthetic and real imagery to identify, classify, and estimate mass of tumbling debris objects for capture missions.', category: 'Space Robotics', type: 'Open Source Tool', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 278, tags: ['vision', 'debris', 'classification'], stage: 'Early Validation', problem: 'Debris objects tumble unpredictably making capture planning difficult.' },
    { id: 226, title: 'Soft robotics gripper for satellite servicing', tagline: 'Gentle capture of uncooperative spacecraft.', desc: 'An inflatable soft-robotic gripper that can conform to various satellite geometries to gently capture and stabilize tumbling spacecraft for refueling or repair.', category: 'Space Robotics', type: 'Hardware', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 189, tags: ['softrobotics', 'servicing', 'capture'], stage: 'Prototype', problem: 'Rigid grippers risk damaging the satellites they try to service.' },
    { id: 227, title: 'Teleoperation latency compensation for lunar robots', tagline: 'Predict-ahead control beating the 1.3s delay.', desc: 'A predictive control algorithm that uses terrain mapping and physics simulation to let Earth operators control lunar robots as if there was zero latency.', category: 'Space Robotics', type: 'Open Source Tool', difficulty: 'Lunar (Mid)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 234, tags: ['teleoperation', 'latency', 'control'], stage: 'Concept', problem: 'Signal delay makes real-time teleoperation of lunar robots impractical.' },
    { id: 228, title: 'Robotic in-space assembly of large telescope mirrors', tagline: 'Building giant telescopes piece by piece in orbit.', desc: 'A swarm of robotic agents that autonomously assemble segmented mirror panels into a 30m-class space telescope, far exceeding what fits in any fairing.', category: 'Space Robotics', type: 'Space Mission', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 678, tags: ['assembly', 'telescope', 'autonomy'], stage: 'Concept', problem: 'Fairing size limits space telescopes to ~6.5m mirrors.' },
    { id: 229, title: 'Underwater robot testbed for planetary ocean exploration', tagline: 'Test Europa robots in Earth oceans first.', desc: 'An open-source underwater robot platform that simulates Europa ocean conditions for testing autonomous navigation, sampling, and communication algorithms.', category: 'Space Robotics', type: 'Open Source Tool', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 156, tags: ['europa', 'underwater', 'testing'], stage: 'Prototype', problem: 'No standardized testbed exists for planetary ocean exploration robots.' },

    // --- Satellite Tech (7) ---
    { id: 230, title: 'On-orbit satellite software update platform', tagline: 'Patching satellites like smartphones.', desc: 'A secure over-the-air update system allowing operators to push software patches, ML model updates, and configuration changes to satellites already in orbit.', category: 'Satellite Tech', type: 'Startup', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 345, tags: ['software', 'update', 'security'], stage: 'Early Validation', problem: 'Most satellites run fixed software that cannot adapt to new requirements.' },
    { id: 231, title: 'Drag sail deorbiting module for small satellites', tagline: 'Guaranteed deorbit in 5 years for any CubeSat.', desc: 'A bolt-on 1U module containing a deployable drag sail that ensures any small satellite deorbits within regulatory timeframes after end of life.', category: 'Satellite Tech', type: 'Hardware', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 412, tags: ['deorbit', 'compliance', 'cubesat'], stage: 'Prototype', problem: 'Dead small satellites become long-lived debris.' },
    { id: 232, title: 'Inter-satellite laser communication terminal', tagline: 'Gigabit links between spacecraft.', desc: 'A low-cost miniaturized optical communication terminal enabling 10 Gbps data transfer between satellites using eye-safe laser wavelengths.', category: 'Satellite Tech', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 523, tags: ['laser', 'optical', 'bandwidth'], stage: 'Research Topic', problem: 'RF inter-satellite links are bandwidth-limited.' },
    { id: 233, title: 'Satellite anomaly detection using ML telemetry analysis', tagline: 'Predicting failures before they happen.', desc: 'A cloud-based ML service that ingests satellite housekeeping telemetry and detects anomalous patterns indicating imminent component failure.', category: 'Satellite Tech', type: 'Startup', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 267, tags: ['ml', 'telemetry', 'health'], stage: 'Prototype', problem: 'Satellite failures are often detected too late for corrective action.' },
    { id: 234, title: 'Modular satellite bus with hot-swappable payloads', tagline: 'Change your satellites mission mid-orbit.', desc: 'A standardized satellite bus with docking interfaces that allow robotic servicers to swap payload modules, converting an imaging sat to a comms relay.', category: 'Satellite Tech', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 389, tags: ['modular', 'servicing', 'flexibility'], stage: 'Concept', problem: 'Satellites cannot adapt their mission after launch.' },
    { id: 235, title: 'Blockchain-based satellite spectrum marketplace', tagline: 'Trade RF spectrum rights in real-time.', desc: 'A decentralized marketplace where satellite operators can dynamically buy, sell, and lease RF spectrum allocations based on real-time demand and orbital position.', category: 'Satellite Tech', type: 'Startup', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 167, tags: ['spectrum', 'blockchain', 'marketplace'], stage: 'Concept', problem: 'Static spectrum allocation leads to waste and interference.' },
    { id: 236, title: 'Solar storm early warning constellation', tagline: 'Protecting satellites from space weather.', desc: 'A constellation of small monitors at L1 Lagrange point providing 30-minute advance warning of solar particle events to all satellite operators simultaneously.', category: 'Satellite Tech', type: 'Space Mission', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 456, tags: ['solar', 'weather', 'protection'], stage: 'Concept', problem: 'Solar storms can disable entire satellite constellations without warning.' },

    // --- Space Tourism (7) ---
    { id: 237, title: 'Zero-G cooking experience module', tagline: 'Michelin-star dining in microgravity.', desc: 'A specially designed food preparation station for space hotels that lets tourists prepare and enjoy gourmet meals adapted for zero-gravity consumption.', category: 'Space Tourism', type: 'Startup', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 534, tags: ['food', 'experience', 'hotel'], stage: 'Concept', problem: 'Space food is currently functional but joyless.' },
    { id: 238, title: 'Orbital wedding venue booking platform', tagline: 'Say I do with Earth as your backdrop.', desc: 'An end-to-end booking and planning platform for couples wanting to host their wedding ceremony aboard a commercial space station.', category: 'Space Tourism', type: 'Website', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 789, tags: ['wedding', 'luxury', 'booking'], stage: 'Concept', problem: 'No turnkey service exists for space ceremonies.' },
    { id: 239, title: 'Space tourism health screening app', tagline: 'Are you fit to fly to space?', desc: 'A comprehensive health assessment app that evaluates a potential space tourists fitness through questionnaires, wearable data, and telemedicine consultations.', category: 'Space Tourism', type: 'Mobile App', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 234, tags: ['health', 'screening', 'app'], stage: 'Prototype', problem: 'Space tourism health requirements are unclear to the public.' },
    { id: 240, title: 'Virtual reality space tourism preview', tagline: 'Experience orbit before buying your ticket.', desc: 'A hyperrealistic VR experience using photogrammetry of actual ISS interiors and real Earth imagery to preview what paying customers will see and feel in orbit.', category: 'Space Tourism', type: 'Startup', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 367, tags: ['vr', 'marketing', 'preview'], stage: 'Prototype', problem: 'Customers cannot evaluate a $250K experience before purchasing.' },
    { id: 241, title: 'Suborbital photography tour service', tagline: 'Astrophotography from 100km altitude.', desc: 'Dedicated suborbital flights for photographers offering 6 minutes of weightlessness with stabilized camera mounts and unobstructed cupola windows.', category: 'Space Tourism', type: 'Startup', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 445, tags: ['photography', 'suborbital', 'art'], stage: 'Concept', problem: 'Earth photography from space is limited to professionals.' },
    { id: 242, title: 'Space tourism training academy curriculum', tagline: 'Two weeks from couch to cosmos.', desc: 'A standardized training program covering G-force tolerance, emergency procedures, zero-G movement, and spacesuit operations for civilian space tourists.', category: 'Space Tourism', type: 'Educational', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 198, tags: ['training', 'safety', 'curriculum'], stage: 'Early Validation', problem: 'No standardized civilian astronaut training exists.' },
    { id: 243, title: 'Orbital hotel waste recycling bioreactor', tagline: 'Turning tourist waste into resources.', desc: 'A closed-loop biological waste processing system for space hotels that converts human waste into water, nutrients for plants, and biogas for fuel cells.', category: 'Space Tourism', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 178, tags: ['recycling', 'sustainability', 'lifesupport'], stage: 'Research Topic', problem: 'Space tourism generates waste that is expensive to deorbit.' },

    // --- Propulsion (7) ---
    { id: 244, title: 'Water-based propulsion system for CubeSats', tagline: 'Using steam to maneuver tiny satellites.', desc: 'A micro-electrolysis thruster that splits water into hydrogen and oxygen for combustion, using the safest and most storable propellant available.', category: 'Propulsion', type: 'Hardware', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 345, tags: ['cubesat', 'water', 'green'], stage: 'Prototype', problem: 'Most CubeSats lack propulsion and cannot adjust their orbits.' },
    { id: 245, title: 'Solar sail attitude control using electrochromic panels', tagline: 'Steering sails by changing their color.', desc: 'Electrochromic coatings on solar sail segments that change reflectivity on command, enabling attitude control without reaction wheels or thrusters.', category: 'Propulsion', type: 'Research Topic', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 289, tags: ['solarsail', 'attitude', 'innovation'], stage: 'Concept', problem: 'Solar sails have limited maneuverability with current control methods.' },
    { id: 246, title: 'Nuclear thermal propulsion simulator for students', tagline: 'Learn NTP physics through interactive simulation.', desc: 'An educational web simulator where students can design nuclear thermal rocket engines, adjust parameters, and see performance impacts in real-time.', category: 'Propulsion', type: 'Educational', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 167, tags: ['nuclear', 'education', 'simulator'], stage: 'Concept', problem: 'Nuclear propulsion concepts are inaccessible to most students.' },
    { id: 247, title: 'Electromagnetic tether propulsion for orbit raising', tagline: 'Climbing orbits using Earths magnetic field.', desc: 'A deployable conductive tether that generates thrust by passing current through Earths magnetic field, raising satellite orbits without propellant.', category: 'Propulsion', type: 'Research Topic', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 234, tags: ['tether', 'electromagnetic', 'propellantless'], stage: 'Research Topic', problem: 'Chemical propellant is heavy, expensive, and limits mission life.' },
    { id: 248, title: 'Green bipropellant thruster replacing hydrazine', tagline: 'Non-toxic propulsion that performs like hydrazine.', desc: 'A thruster burning hydrogen peroxide and ethanol as a drop-in replacement for toxic hydrazine systems, matching performance while eliminating handling hazards.', category: 'Propulsion', type: 'Hardware', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 312, tags: ['green', 'thruster', 'safety'], stage: 'Early Validation', problem: 'Hydrazine is carcinogenic and expensive to handle safely.' },
    { id: 249, title: 'Laser ablation micro-thruster array', tagline: 'Pulsed lasers vaporizing solid fuel for thrust.', desc: 'An array of diode lasers ablating a solid polymer target to produce micronewton-level thrust for ultra-precise satellite formation flying.', category: 'Propulsion', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 198, tags: ['laser', 'precision', 'formation'], stage: 'Concept', problem: 'Interference missions require sub-micronewton thrust precision.' },
    { id: 250, title: 'Open-source electric propulsion test stand design', tagline: 'Build your own ion thruster test facility.', desc: 'Complete open-source hardware and software designs for a vacuum chamber test stand capable of characterizing electric thrusters at university scale.', category: 'Propulsion', type: 'Open Source Tool', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 456, tags: ['opensource', 'testing', 'university'], stage: 'Prototype', problem: 'EP test facilities cost millions, locking out small teams.' },

    // --- Astrobiology (7) ---
    { id: 251, title: 'Extremophile database for planetary habitability', tagline: 'Cataloging life that thrives in impossible conditions.', desc: 'A comprehensive searchable database of all known extremophile organisms with their survival parameters, cross-referenced with conditions on other worlds.', category: 'Astrobiology', type: 'Website', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 278, tags: ['extremophile', 'database', 'habitability'], stage: 'Prototype', problem: 'Extremophile data is scattered across thousands of papers.' },
    { id: 252, title: 'Portable life detection instrument for Mars analogue sites', tagline: 'Field-testing biosignature detectors on Earth.', desc: 'A handheld instrument combining Raman spectroscopy and fluorescence to detect organic molecules in Mars-like environments on Earth as a technology readiness builder.', category: 'Astrobiology', type: 'Hardware', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 345, tags: ['biosignature', 'instrument', 'fieldtest'], stage: 'Early Validation', problem: 'Life detection instruments are not field-tested before Mars missions.' },
    { id: 253, title: 'Simulated Enceladus ocean chemistry lab', tagline: 'Recreating alien ocean conditions in a beaker.', desc: 'A laboratory protocol and apparatus for recreating the pH, salinity, pressure, and chemical composition of Enceladus subsurface ocean for prebiotic chemistry experiments.', category: 'Astrobiology', type: 'Research Topic', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 234, tags: ['enceladus', 'ocean', 'chemistry'], stage: 'Concept', problem: 'We cannot test habitability hypotheses without analog environments.' },
    { id: 254, title: 'Citizen science platform for classifying Mars surface features', tagline: 'Millions of eyes scanning Mars for signs of life.', desc: 'A web platform where volunteers classify HiRISE imagery looking for recurring slope lineae, mineral deposits, and unusual formations flagged by AI.', category: 'Astrobiology', type: 'Website', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 512, tags: ['citizenscience', 'mars', 'classification'], stage: 'Concept', problem: 'There is too much Mars imagery for scientists to review alone.' },
    { id: 255, title: 'Tardigrade radiation resistance gene mapping', tagline: 'Unlocking natures radiation shield.', desc: 'A genomics project to identify and characterize the specific genes that give tardigrades extreme radiation resistance, with applications for astronaut protection.', category: 'Astrobiology', type: 'Research Topic', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 623, tags: ['tardigrade', 'genetics', 'radiation'], stage: 'Early Validation', problem: 'Radiation is the top health risk for long-duration spaceflight.' },
    { id: 256, title: 'Biosignature spectral library for exoplanet atmospheres', tagline: 'What does life look like from light-years away?', desc: 'A curated spectral database of atmospheric biosignatures like oxygen, methane, and phosphine at various concentrations for comparison with JWST exoplanet observations.', category: 'Astrobiology', type: 'Open Source Tool', difficulty: 'Lunar (Mid)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 345, tags: ['spectral', 'biosignature', 'jwst'], stage: 'Prototype', problem: 'No comprehensive reference library exists for cross-referencing exoplanet spectra.' },
    { id: 257, title: 'Panspermia simulation using ISS exposure experiments', tagline: 'Can life survive interplanetary travel?', desc: 'Designing exposure experiments for the ISS exterior where bacterial spores embedded in simulated meteorite material test survival rates over multi-year periods.', category: 'Astrobiology', type: 'Space Mission', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 189, tags: ['panspermia', 'iss', 'survival'], stage: 'Concept', problem: 'Panspermia remains unverified due to lack of long-duration exposure data.' },

    // --- Space Medicine (7) ---
    { id: 258, title: 'Wearable bone density monitor for astronauts', tagline: 'Real-time osteoporosis tracking in microgravity.', desc: 'A wrist-worn ultrasound device that continuously monitors bone mineral density changes during spaceflight, enabling personalized exercise countermeasures.', category: 'Space Medicine', type: 'Hardware', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 267, tags: ['bone', 'wearable', 'monitoring'], stage: 'Early Validation', problem: 'Astronauts lose 1-2% bone density per month in microgravity.' },
    { id: 259, title: 'Closed-loop drug delivery for space motion sickness', tagline: 'Smart patches that dose precisely.', desc: 'A transdermal patch with embedded sensors that detects vestibular disturbance onset and automatically releases anti-nausea medication in calibrated doses.', category: 'Space Medicine', type: 'Hardware', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 198, tags: ['drug', 'vestibular', 'patch'], stage: 'Concept', problem: 'Space motion sickness affects 60-80% of astronauts in first 72 hours.' },
    { id: 260, title: 'Telemedicine surgery guidance system with AR overlay', tagline: 'Ground surgeons guiding space procedures remotely.', desc: 'An AR headset system that overlays surgical guidance from Earth-based surgeons onto an astronauts field of view during emergency medical procedures.', category: 'Space Medicine', type: 'Startup', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 445, tags: ['surgery', 'ar', 'telemedicine'], stage: 'Concept', problem: 'No crew member may be a trained surgeon on deep space missions.' },
    { id: 261, title: 'Artificial gravity sleep pod design', tagline: 'Spinning beds preventing health decline.', desc: 'A centrifuge-based sleeping pod that provides 0.5G during 8-hour sleep periods to mitigate fluid shift, bone loss, and cardiovascular deconditioning.', category: 'Space Medicine', type: 'Research Topic', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 567, tags: ['gravity', 'sleep', 'countermeasure'], stage: 'Concept', problem: 'Zero-G health effects accumulate dangerously over months.' },
    { id: 262, title: 'Space pharmacy: automated medication compounding', tagline: 'Making drugs on-demand in orbit.', desc: 'A compact automated pharmaceutical system that compounds medications from raw ingredients on-demand, eliminating the need to carry a full pharmacy to space.', category: 'Space Medicine', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 312, tags: ['pharmacy', 'manufacturing', 'ondemand'], stage: 'Research Topic', problem: 'Medications degrade in space radiation faster than shelf life projections.' },
    { id: 263, title: 'Mental health chatbot trained on astronaut psychology', tagline: 'AI counselor for isolation and confinement.', desc: 'A conversational AI specifically trained on astronaut journals, psychology research, and isolation studies to provide 24/7 mental health support during deep space missions.', category: 'Space Medicine', type: 'Open Source Tool', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 389, tags: ['mentalhealth', 'ai', 'isolation'], stage: 'Prototype', problem: 'Crew isolation on Mars missions will last 2+ years with no real-time counseling.' },
    { id: 264, title: 'Microbiome monitoring kit for spacecraft', tagline: 'Tracking gut health where there are no doctors.', desc: 'A portable sequencing device and dashboard that monitors crew microbiome composition, alerting to dysbiosis patterns linked to immune suppression or infection.', category: 'Space Medicine', type: 'Hardware', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 234, tags: ['microbiome', 'diagnostics', 'immune'], stage: 'Early Validation', problem: 'Immune system weakening in space makes infections more dangerous.' },

    // --- Deep Space Comms (7) ---
    { id: 265, title: 'Delay-tolerant networking protocol for Mars internet', tagline: 'TCP/IP does not work with 20-minute latency.', desc: 'An implementation of DTN Bundle Protocol optimized for Mars-Earth communication with caching, store-and-forward, and priority queuing for critical data.', category: 'Deep Space Comms', type: 'Open Source Tool', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 345, tags: ['dtn', 'protocol', 'mars'], stage: 'Early Validation', problem: 'Standard internet protocols fail with interplanetary signal delays.' },
    { id: 266, title: 'Quantum key distribution for secure space communications', tagline: 'Unhackable comms between Earth and satellites.', desc: 'A quantum optical terminal that distributes encryption keys via entangled photons between ground stations and satellites, ensuring theoretically unbreakable security.', category: 'Deep Space Comms', type: 'Research Topic', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 478, tags: ['quantum', 'encryption', 'security'], stage: 'Research Topic', problem: 'Current space communication encryption will be broken by quantum computers.' },
    { id: 267, title: 'Inflatable deep space antenna for CubeSat missions', tagline: 'Giant dishes that fold into tiny packages.', desc: 'An inflatable high-gain antenna that deploys from a 2U CubeSat volume to a 3-meter dish, enabling deep space communication from tiny spacecraft.', category: 'Deep Space Comms', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 312, tags: ['antenna', 'inflatable', 'cubesat'], stage: 'Concept', problem: 'Small satellites cannot communicate from beyond the Moon with current antennas.' },
    { id: 268, title: 'Interplanetary internet latency visualizer', tagline: 'See how slow Mars email actually is.', desc: 'An interactive web tool showing real-time Earth-Mars-Jupiter communication delays with animated packet routing through relay satellites.', category: 'Deep Space Comms', type: 'Educational', difficulty: 'Orbital (Easy)', time: '1 month', poster: 'astro_claude', isAI: true, likes: 567, tags: ['visualization', 'education', 'latency'], stage: 'Prototype', problem: 'People underestimate the communication challenge of deep space.' },
    { id: 269, title: 'Neutrino-based communication for through-planet messaging', tagline: 'Messages that pass through solid rock.', desc: 'Research into using modulated neutrino beams as a communication medium that can penetrate planetary bodies, eliminating line-of-sight requirements.', category: 'Deep Space Comms', type: 'Research Topic', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 189, tags: ['neutrino', 'physics', 'breakthrough'], stage: 'Concept', problem: 'Planetary occlusion creates communication blackout periods.' },
    { id: 270, title: 'Optical ground station network for laser downlinks', tagline: 'Global receiver network for satellite laser comms.', desc: 'A network of automated optical ground stations with adaptive optics in favorable weather locations to receive high-bandwidth laser downlinks from satellites.', category: 'Deep Space Comms', type: 'Startup', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 278, tags: ['optical', 'groundstation', 'network'], stage: 'Early Validation', problem: 'Laser comms are weather-dependent and need geographic diversity.' },
    { id: 271, title: 'AI-optimized Deep Space Network scheduling', tagline: 'Getting more science from overbooked dishes.', desc: 'A reinforcement learning agent that optimally schedules DSN antenna time across all active missions, maximizing total science data return.', category: 'Deep Space Comms', type: 'Open Source Tool', difficulty: 'Lunar (Mid)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 234, tags: ['dsn', 'scheduling', 'optimization'], stage: 'Concept', problem: 'DSN is oversubscribed and missions lose contact windows.' },

    // --- Debris Cleanup (7) ---
    { id: 272, title: 'Magnetic tug for ferrous debris removal', tagline: 'Pulling metal junk with superconducting magnets.', desc: 'A spacecraft equipped with powerful superconducting electromagnets that can attract, capture, and deorbit ferrous debris objects without physical contact.', category: 'Debris Cleanup', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 345, tags: ['magnet', 'capture', 'contactless'], stage: 'Concept', problem: 'Physical capture of tumbling debris risks creating more fragments.' },
    { id: 273, title: 'Ground-based laser nudging for small debris', tagline: 'Pushing junk with light from below.', desc: 'Using high-power ground lasers to ablate tiny amounts of material from small debris objects, creating enough thrust to lower their orbits for natural decay.', category: 'Debris Cleanup', type: 'Research Topic', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 478, tags: ['laser', 'groundbased', 'nudge'], stage: 'Research Topic', problem: 'Millions of small debris pieces are too small to capture individually.' },
    { id: 274, title: 'Space debris insurance and liability platform', tagline: 'Making debris cleanup financially viable.', desc: 'A SaaS platform that models collision probability, calculates insurance premiums for constellation operators, and funds cleanup missions from pooled premiums.', category: 'Debris Cleanup', type: 'Startup', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 234, tags: ['insurance', 'economics', 'liability'], stage: 'Concept', problem: 'No financial incentive exists for proactive debris removal.' },
    { id: 275, title: 'Aerogel net capture system for debris', tagline: 'Catching space junk in cosmic foam.', desc: 'A deployable aerogel mesh net that can absorb kinetic energy of impacting debris fragments without shattering them, collecting multiple pieces per mission.', category: 'Debris Cleanup', type: 'Hardware', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 312, tags: ['aerogel', 'net', 'capture'], stage: 'Early Validation', problem: 'Rigid capture mechanisms can shatter debris creating more fragments.' },
    { id: 276, title: 'Real-time debris collision probability dashboard', tagline: 'Traffic alerts for satellite operators.', desc: 'A web dashboard fusing Space Surveillance Network data with ML predictions to give satellite operators real-time collision probability and recommended maneuvers.', category: 'Debris Cleanup', type: 'Website', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 445, tags: ['collision', 'dashboard', 'awareness'], stage: 'Prototype', problem: 'Collision warnings come too late or with too much uncertainty.' },
    { id: 277, title: 'Defunct satellite recycling in orbit', tagline: 'Harvesting useful parts from dead satellites.', desc: 'A spacecraft that visits dead satellites, extracts still-functional components like solar panels and reaction wheels, and stores them for reuse in new missions.', category: 'Debris Cleanup', type: 'Space Mission', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 567, tags: ['recycling', 'harvesting', 'reuse'], stage: 'Concept', problem: 'Valuable components on dead satellites are wasted permanently.' },
    { id: 278, title: 'Space debris tracking with citizen radio telescopes', tagline: 'Amateur astronomers helping track junk.', desc: 'A distributed network of amateur radio operators using modified antennas to detect radar reflections from debris, feeding data into an open catalog.', category: 'Debris Cleanup', type: 'Open Source Tool', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 198, tags: ['citizen', 'radio', 'tracking'], stage: 'Concept', problem: 'Military-controlled debris catalogs are incomplete and access-restricted.' },

    // --- Space Mining (7) ---
    { id: 279, title: 'Asteroid mineral composition classifier using spectroscopy', tagline: 'Know what an asteroid is worth before mining it.', desc: 'An AI model trained on laboratory meteorite spectra that can classify asteroid mineral composition from telescopic observations with 95% accuracy.', category: 'Space Mining', type: 'Open Source Tool', difficulty: 'Lunar (Mid)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 345, tags: ['spectroscopy', 'classification', 'prospecting'], stage: 'Prototype', problem: 'Asteroid composition is uncertain until physically sampled.' },
    { id: 280, title: 'In-situ water electrolysis fuel depot at asteroid', tagline: 'Gas stations between the planets.', desc: 'A station on a water-rich asteroid that electrolyzes ice into hydrogen and oxygen propellant, selling fuel to passing spacecraft for deep space missions.', category: 'Space Mining', type: 'Startup', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 623, tags: ['fuel', 'depot', 'water'], stage: 'Concept', problem: 'Deep space missions carry all fuel from Earth at enormous cost.' },
    { id: 281, title: 'Robotic regolith excavator for lunar mining', tagline: 'Autonomous digging on the Moon.', desc: 'A compact robotic excavator designed for lunar gravity that can autonomously dig, transport, and process regolith for oxygen extraction using molten salt electrolysis.', category: 'Space Mining', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 389, tags: ['excavator', 'lunar', 'oxygen'], stage: 'Concept', problem: 'Lunar oxygen production requires efficient automated excavation.' },
    { id: 282, title: 'Space mining economics simulator', tagline: 'Is asteroid mining actually profitable?', desc: 'An interactive web tool modeling the full economics of asteroid mining missions including launch costs, travel time, extraction efficiency, and market prices.', category: 'Space Mining', type: 'Educational', difficulty: 'Orbital (Easy)', time: '1 month', poster: 'astro_claude', isAI: true, likes: 278, tags: ['economics', 'simulator', 'viability'], stage: 'Prototype', problem: 'Space mining business cases are often based on unrealistic assumptions.' },
    { id: 283, title: 'Solar-powered metal smelter for asteroid processing', tagline: 'Refining metals using concentrated sunlight.', desc: 'A parabolic solar concentrator that focuses sunlight to 2000C to smelt raw asteroid ore into purified metal ingots in microgravity.', category: 'Space Mining', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 312, tags: ['smelting', 'solar', 'processing'], stage: 'Research Topic', problem: 'Bringing raw ore back to Earth is not economically feasible.' },
    { id: 284, title: 'Legal framework generator for space resource claims', tagline: 'Automated compliance with space mining law.', desc: 'A tool that generates legal filing documents for space resource extraction claims compliant with the Outer Space Treaty, US CSLCA, and Luxembourg Space Law.', category: 'Space Mining', type: 'Startup', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 167, tags: ['legal', 'compliance', 'law'], stage: 'Concept', problem: 'Space mining legal frameworks are complex and jurisdiction-dependent.' },
    { id: 285, title: 'Magnetic separation system for asteroid regolith', tagline: 'Sorting space rocks with magnets.', desc: 'A processing system using magnetic gradients to separate valuable metallic minerals from silicate waste in microgravity asteroid mining operations.', category: 'Space Mining', type: 'Hardware', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 234, tags: ['separation', 'magnetic', 'processing'], stage: 'Early Validation', problem: 'Traditional gravity-based mineral separation does not work in space.' },

    // --- Space Habitats (8) ---
    { id: 286, title: 'Inflatable space station module with radiation shielding', tagline: 'Bigger stations that launch smaller.', desc: 'An expandable habitat module using water-filled walls for radiation shielding that launches in a compact configuration and inflates to 10x volume in orbit.', category: 'Space Habitats', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 567, tags: ['inflatable', 'radiation', 'habitat'], stage: 'Concept', problem: 'Rigid modules are volume-limited by launch fairing size.' },
    { id: 287, title: 'Closed-loop aquaponics life support system', tagline: 'Fish and plants sustaining astronauts together.', desc: 'An integrated aquaponics system where fish waste fertilizes food plants which filter water for the fish, providing protein and vegetables while recycling water.', category: 'Space Habitats', type: 'Research Topic', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 389, tags: ['aquaponics', 'food', 'lifesupport'], stage: 'Prototype', problem: 'Resupplying food to space stations costs $50K per kg.' },
    { id: 288, title: 'AI-managed environmental control for habitats', tagline: 'Smart HVAC for space stations.', desc: 'A reinforcement learning system that optimizes atmosphere composition, temperature, humidity, and air circulation in space habitats while minimizing power usage.', category: 'Space Habitats', type: 'Open Source Tool', difficulty: 'Lunar (Mid)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 234, tags: ['eclss', 'ai', 'optimization'], stage: 'Early Validation', problem: 'Current ECLSS systems waste significant power on suboptimal control loops.' },
    { id: 289, title: 'Rotating habitat section for partial artificial gravity', tagline: 'Spin a section to simulate weight.', desc: 'A rotating ring module that attaches to existing space stations providing 0.3-0.5G in the habitable section for crew health during rest periods.', category: 'Space Habitats', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 678, tags: ['rotation', 'gravity', 'health'], stage: 'Concept', problem: 'Long-term microgravity causes irreversible health damage.' },
    { id: 290, title: 'Habitat interior design toolkit for space architects', tagline: 'CAD plugins for designing life in space.', desc: 'A toolkit of 3D models, material libraries, and design constraints specific to space habitat interior design including microgravity furniture and traffic flow.', category: 'Space Habitats', type: 'Open Source Tool', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 198, tags: ['cad', 'design', 'interior'], stage: 'Concept', problem: 'Space architects lack specialized tools for microgravity design.' },
    { id: 291, title: 'Regolith-based 3D printing of habitat shells on Mars', tagline: 'Printing Mars homes from Mars soil.', desc: 'A large-scale 3D printer that mixes Martian regolith with a polymer binder to print structural shells for pressurized habitats using in-situ materials.', category: 'Space Habitats', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 512, tags: ['3dprint', 'mars', 'isru'], stage: 'Concept', problem: 'Prefabricated habitats are too heavy and expensive to ship to Mars.' },
    { id: 292, title: 'Circadian lighting system for deep space habitats', tagline: 'Sunrise and sunset 400 million km from the Sun.', desc: 'A dynamic LED lighting system that simulates Earths natural light cycle including color temperature shifts to maintain crew circadian rhythms on deep space missions.', category: 'Space Habitats', type: 'Hardware', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 267, tags: ['lighting', 'circadian', 'wellbeing'], stage: 'Prototype', problem: 'Disrupted circadian rhythms cause sleep disorders and cognitive decline.' },
    { id: 293, title: 'Space habitat emergency pressure repair system', tagline: 'Patching hull breaches in seconds.', desc: 'An automated system using shape-memory alloy patches and fast-curing sealant that can locate and seal micrometeorite punctures before critical pressure loss.', category: 'Space Habitats', type: 'Hardware', difficulty: 'Lunar (Mid)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 445, tags: ['safety', 'repair', 'emergency'], stage: 'Research Topic', problem: 'A hull breach gives crew only minutes to respond before fatal pressure loss.' },

    // --- Exoplanet Research (8) ---
    { id: 294, title: 'Open-source exoplanet atmosphere retrieval code', tagline: 'Decoding alien atmospheres from photons.', desc: 'A GPU-accelerated Bayesian retrieval framework for interpreting JWST transmission spectra and constraining exoplanet atmospheric composition and temperature profiles.', category: 'Exoplanet Research', type: 'Open Source Tool', difficulty: 'Deep Space (Hard)', time: '1 year', poster: 'astro_claude', isAI: true, likes: 456, tags: ['retrieval', 'jwst', 'atmosphere'], stage: 'Early Validation', problem: 'Existing retrieval codes are slow and proprietary.' },
    { id: 295, title: 'Machine learning planet candidate vetting for TESS', tagline: 'AI separating real planets from false alarms.', desc: 'A neural network trained on confirmed Kepler planets that automatically vets TESS light curve candidates, reducing false positive rates from 40% to under 5%.', category: 'Exoplanet Research', type: 'Open Source Tool', difficulty: 'Lunar (Mid)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 345, tags: ['ml', 'tess', 'vetting'], stage: 'Prototype', problem: 'Manual vetting of planet candidates is the bottleneck in discovery.' },
    { id: 296, title: 'Exoplanet habitability scoring system', tagline: 'Ranking worlds by their potential for life.', desc: 'A multi-factor scoring system combining stellar properties, orbital parameters, atmospheric indicators, and geological estimates to rank exoplanets by habitability.', category: 'Exoplanet Research', type: 'Website', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 567, tags: ['habitability', 'ranking', 'catalog'], stage: 'Concept', problem: 'The habitable zone alone is too simplistic for assessing habitability.' },
    { id: 297, title: 'Starshade orbital positioning simulator', tagline: 'Planning the most complex formation flying ever.', desc: 'A simulation tool for starshade missions that models the precise alignment requirements between a space telescope and a free-flying starshade 40,000 km away.', category: 'Exoplanet Research', type: 'Educational', difficulty: 'Lunar (Mid)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 234, tags: ['starshade', 'simulation', 'imaging'], stage: 'Concept', problem: 'Direct imaging of Earth-like exoplanets requires unprecedented precision.' },
    { id: 298, title: 'Radial velocity spectrograph calibration using laser combs', tagline: 'Measuring stellar wobbles to cm/s precision.', desc: 'Developing affordable laser frequency comb calibrators for ground-based spectrographs to achieve the 10 cm/s precision needed to detect Earth-mass exoplanets.', category: 'Exoplanet Research', type: 'Hardware', difficulty: 'Deep Space (Hard)', time: '2+ years', poster: 'astro_claude', isAI: true, likes: 312, tags: ['spectroscopy', 'calibration', 'precision'], stage: 'Research Topic', problem: 'Current RV precision cannot reliably detect Earth twins around Sun-like stars.' },
    { id: 299, title: 'Interactive exoplanet catalog with 3D visualization', tagline: 'Explore 5000+ known worlds in your browser.', desc: 'A WebGL-powered interactive 3D star map where users can fly between known exoplanet systems, view planetary data, and compare sizes to Solar System worlds.', category: 'Exoplanet Research', type: 'Website', difficulty: 'Orbital (Easy)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 789, tags: ['3d', 'visualization', 'catalog'], stage: 'Prototype', problem: 'Exoplanet data is presented as dry tables instead of engaging visuals.' },
    { id: 300, title: 'Photometric detrending pipeline for ground-based transit surveys', tagline: 'Cleaning messy data to find tiny planet signals.', desc: 'An automated pipeline using Gaussian processes to remove atmospheric and instrumental systematics from ground-based photometry, recovering sub-mmag transit signals.', category: 'Exoplanet Research', type: 'Open Source Tool', difficulty: 'Lunar (Mid)', time: '3–6 months', poster: 'astro_claude', isAI: true, likes: 198, tags: ['photometry', 'pipeline', 'detrending'], stage: 'Early Validation', problem: 'Atmospheric noise limits ground-based transit detection sensitivity.' }
];

let state = {
    auth: false,
    user: null,
    theme: 'light',
    ideas: [...MOCK_IDEAS],
    swiped: { right: new Set(), left: new Set(), saved: new Set() },
    collabs: new Set(),
    myLaunches: [],
    swipeQueue: [],
    filter: 'All',
    searchQuery: ''
};

// === FIREBASE CONFIGURATION ===
// Insert your Firebase config below to enable seamless cloud syncing across devices!
const firebaseConfig = {
    // apiKey: "YOUR_API_KEY",
    // authDomain: "YOUR_AUTH_DOMAIN",
    // projectId: "YOUR_PROJECT_ID",
    // storageBucket: "YOUR_STORAGE_BUCKET",
    // messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    // appId: "YOUR_APP_ID"
};

let db = null;
let authObj = null;
try {
    if (typeof firebase !== 'undefined' && firebaseConfig.apiKey) {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        authObj = firebase.auth();
        console.log("Firebase systems online.");
    }
} catch(e) { console.warn("Firebase config missing. Operating in offline LocalStorage mode."); }


const storage = {
    save() {
        localStorage.setItem('orbitApp_theme', state.theme);
        if(!state.auth) return;
        
        const userData = {
            user: state.user,
            swiped: { right: Array.from(state.swiped.right), left: Array.from(state.swiped.left), saved: Array.from(state.swiped.saved) },
            collabs: Array.from(state.collabs),
            myLaunches: state.myLaunches
        };
        
        localStorage.setItem(`orbitApp_u_${state.user.id}`, JSON.stringify(userData));
        localStorage.setItem('orbitApp_session', state.user.id);
        
        let global = JSON.parse(localStorage.getItem('orbitApp_global') || '[]');
        state.myLaunches.forEach(ml => {
            if(!global.find(g => g.id === ml.id)) global.push(ml);
        });
        localStorage.setItem('orbitApp_global', JSON.stringify(global));

        // Firebase Sync
        if (db && state.user) {
            db.collection('users').doc(state.user.id).set(userData).catch(console.error);
            state.myLaunches.forEach(ml => db.collection('ideas').doc(ml.id.toString()).set(ml));
        }
    },
    async load() {
        state.theme = localStorage.getItem('orbitApp_theme') || 'light';
        document.documentElement.setAttribute('data-theme', state.theme);
        
        let global = JSON.parse(localStorage.getItem('orbitApp_global') || '[]');
        state.ideas = [...MOCK_IDEAS];
        global.forEach(g => { if(!state.ideas.find(i => i.id === g.id)) state.ideas.push(g); });

        // Load remote ideas if Firebase active
        if (db) {
            try {
                const snap = await db.collection('ideas').get();
                snap.forEach(doc => {
                    const idea = doc.data();
                    if(!state.ideas.find(i => i.id === idea.id)) state.ideas.push(idea);
                });
            } catch(e) { console.error("Error fetching ideas.", e); }
        }

        const sid = localStorage.getItem('orbitApp_session');
        if(sid) {
            // First try local
            const localData = JSON.parse(localStorage.getItem(`orbitApp_u_${sid}`));
            if(localData) this.applyUserData(localData);
            
            // Then sync from Firebase if available
            if(db) {
                try {
                    const doc = await db.collection('users').doc(sid).get();
                    if(doc.exists) {
                        this.applyUserData(doc.data());
                        if (app && app.updateUI) app.updateUI();
                    }
                } catch(e) { console.error(e); }
            }
        }
    },
    applyUserData(data) {
        state.user = data.user;
        state.swiped = { right: new Set(data.swiped.right), left: new Set(data.swiped.left), saved: new Set(data.swiped.saved) };
        state.collabs = new Set(data.collabs);
        state.myLaunches = data.myLaunches || [];
        state.auth = true;
        state.myLaunches.forEach(ml => { if(!state.ideas.find(i => i.id === ml.id)) state.ideas.push(ml); });
    },
    logout() {
        localStorage.removeItem('orbitApp_session');
        state.auth = false; state.user = null;
        state.swiped = { right: new Set(), left: new Set(), saved: new Set() };
        state.collabs = new Set(); state.myLaunches = [];
        if(authObj) authObj.signOut();
    }
};

const app = {
    init() {
        storage.load();
        this.setupCanvas();
        this.updateThemeIcon();
        this.setupNavigation();
        this.setupAuthForms();
        this.renderHome();
        this.setupIdeaForm();
        this.updateUI();
        
        const hash = window.location.hash.slice(1) || 'home';
        this.navigate(hash);
        
        // Keyboard Swiping
        document.addEventListener('keydown', (e) => {
            if(!document.getElementById('page-discover').classList.contains('active')) return;
            if(document.querySelector('.modal.open')) return;
            if(e.key === 'ArrowLeft') this.handleSwipeChoice('left');
            if(e.key === 'ArrowRight') this.handleSwipeChoice('right');
            if(e.key === 'ArrowUp' || e.key.toLowerCase() === 's') this.handleSwipeChoice('up');
        });

        // Search Discover Logic
        const searchInput = document.getElementById('discover-search');
        if(searchInput) {
            searchInput.addEventListener('input', (e) => {
                state.searchQuery = e.target.value.toLowerCase();
                this.refillSwipeQueue();
            });
        }

        // Input limits
        const title = document.getElementById('idea-title'), tCount = document.getElementById('title-char-count');
        const sum = document.getElementById('idea-tagline'), sCount = document.getElementById('summary-char-count');
        if(title) title.oninput = () => tCount.innerText = `${title.value.length}/80`;
        if(sum) sum.oninput = () => sCount.innerText = `${sum.value.length}/120`;
    },

    setupCanvas() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        document.getElementById('starfield').appendChild(canvas);
        
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        const stars = Array.from({length: 150}, () => ({
            x: Math.random() * width, y: Math.random() * height,
            r: Math.random() * 1.5,
            dy: Math.random() * 0.5 + 0.1,
            opacity: Math.random()
        }));

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        function animate() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'light' ? 'rgba(123, 94, 167, 0.4)' : 'rgba(255, 255, 255, 0.6)';
            
            stars.forEach(s => {
                ctx.globalAlpha = s.opacity;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fill();
                s.y += s.dy;
                if(s.y > height) { s.y = 0; s.x = Math.random() * width; }
            });
            requestAnimationFrame(animate);
        }
        animate();
    },

    toggleTheme() {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', state.theme);
        this.updateThemeIcon();
        storage.save();
    },
    
    updateThemeIcon() {
        const icon = document.getElementById('theme-icon');
        icon.className = state.theme === 'light' ? 'ti ti-moon' : 'ti ti-sun';
    },

    navigate(page) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        const target = document.getElementById(`page-${page}`);
        if(target) target.classList.add('active');
        document.querySelectorAll(`[data-target="${page}"]`).forEach(l => l.classList.add('active'));
        
        if (page === 'discover') { this.setupDiscoverFilters(); this.refillSwipeQueue(); }
        if (page === 'dashboard') this.renderDashboard();
        if (page === 'profile') this.renderProfile();
        if (page === 'messages') this.renderMessages();
        
        window.scrollTo(0,0);
        window.history.pushState(null, null, `#${page}`);
    },

    setupNavigation() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.onclick = (e) => { e.preventDefault(); this.navigate(link.dataset.target); };
        });
    },

    showAuthModal() { document.getElementById('auth-modal').classList.add('open'); },
    hideModals() { document.querySelectorAll('.modal').forEach(m => m.classList.remove('open')); },

    setupAuthForms() {
        // Sign Up
        document.getElementById('signup-form').onsubmit = (e) => {
            e.preventDefault();
            const f = document.getElementById('signup-first').value;
            const l = document.getElementById('signup-last').value;
            
            state.user = { 
                id: 'usr_' + Date.now(), 
                firstName: f, lastName: l,
                username: `astro_${f}_${l}`.replace(/\s+/g,'').toLowerCase(),
                role: '💡 Idea Giver', interests: [], bio: '',
                avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${f}${l}`
            };
            
            document.getElementById('ob-username').value = state.user.username;
            
            // Populate Avatar Selectors
            const ag = document.getElementById('ob-avatar-grid');
            if(ag) {
                const botttSeeds = ['Apollo', 'Artemis', 'Ares', 'Orion', 'Luna', 'Nova', 'Cosmo', 'Astro', 'Leo', 'Lyra', 'Rigel', 'Vega', 'Sirius', 'Comet', 'Atlas', 'Titan', 'Europa', 'Io', 'Deimos', 'Phobos'];
                ag.innerHTML = botttSeeds.map(seed => `<img src="https://api.dicebear.com/7.x/bottts/svg?seed=${seed}&radius=50&backgroundColor=E6F3FF" class="avatar-option" data-url="https://api.dicebear.com/7.x/bottts/svg?seed=${seed}&radius=50&backgroundColor=E6F3FF" alt="avatar">`).join('');
                
                const avatars = ag.querySelectorAll('.avatar-option');
                avatars.forEach((av, idx) => {
                    if(idx === 0) av.classList.add('active'); // default
                    av.onclick = () => {
                        avatars.forEach(a => a.classList.remove('active'));
                        av.classList.add('active');
                    };
                });
            }

            const obInt = document.getElementById('ob-interests');
            obInt.innerHTML = CATEGORIES.map(c => `<span class="filter-chip">${c}</span>`).join('');
            obInt.querySelectorAll('.filter-chip').forEach(c => c.onclick = () => c.classList.toggle('active'));
            
            document.querySelectorAll('#ob-role-selector .role-card').forEach(rc => {
                rc.onclick = () => {
                    document.querySelectorAll('#ob-role-selector .role-card').forEach(r => r.classList.remove('active'));
                    rc.classList.add('active');
                };
            });

            this.hideModals();
            document.getElementById('onboarding-modal').classList.add('open');
        };

        // Onboarding
        document.getElementById('onboarding-form').onsubmit = (e) => {
            e.preventDefault();
            state.user.username = document.getElementById('ob-username').value;
            state.user.role = document.querySelector('#ob-role-selector .role-card.active').dataset.role;
            state.user.interests = Array.from(document.querySelectorAll('#ob-interests .filter-chip.active')).map(c => c.textContent);
            
            const activeAvatar = document.querySelector('.avatar-option.active');
            if(activeAvatar) state.user.avatar = activeAvatar.dataset.url;

            state.auth = true;
            this.hideModals();
            this.updateUI();
            storage.save();
            this.showToast('Systems online. Welcome to Mission Control.');
            this.navigate('dashboard');
        };

        // Edit Profile setup
        const editInt = document.getElementById('edit-interests');
        editInt.innerHTML = CATEGORIES.map(c => `<span class="filter-chip">${c}</span>`).join('');
        editInt.querySelectorAll('.filter-chip').forEach(c => c.onclick = () => c.classList.toggle('active'));

        document.getElementById('edit-profile-form').onsubmit = (e) => {
            e.preventDefault();
            state.user.bio = document.getElementById('edit-bio').value;
            state.user.role = document.getElementById('edit-role').value;
            state.user.interests = Array.from(document.querySelectorAll('#edit-interests .filter-chip.active')).map(c => c.textContent);
            this.hideModals();
            this.updateUI();
            storage.save();
            this.showToast('Profile updated.');
            if(document.getElementById('page-profile').classList.contains('active')) this.renderProfile();
        };
    },

    showEditProfileModal() {
        if(!state.auth) return;
        document.getElementById('edit-bio').value = state.user.bio;
        document.getElementById('edit-role').value = state.user.role;
        document.querySelectorAll('#edit-interests .filter-chip').forEach(c => {
            if(state.user.interests.includes(c.textContent)) c.classList.add('active');
            else c.classList.remove('active');
        });
        document.getElementById('edit-profile-modal').classList.add('open');
    },

    mockSocialAuth(provider) {
        document.getElementById('signup-first').value = 'Cosmic';
        document.getElementById('signup-last').value = provider;
        document.getElementById('signup-email').value = `user@${provider.toLowerCase()}.com`;
        document.getElementById('signup-pass').value = '123456';
    },

    mockLogin() {
        document.getElementById('signup-first').value = 'Test';
        document.getElementById('signup-last').value = 'Pilot';
        document.getElementById('signup-form').dispatchEvent(new Event('submit'));
    },

    updateUI() {
        const logged = state.auth;
        document.getElementById('nav-user-profile').style.display = logged ? 'flex' : 'none';
        document.getElementById('nav-signin-btn').style.display = logged ? 'none' : 'block';
        document.getElementById('nav-dash-link').style.display = logged ? 'flex' : 'none';
        document.getElementById('nav-msgs-link').style.display = logged ? 'flex' : 'none';
        
        document.getElementById('hero-auth-cta').style.display = logged ? 'none' : 'flex';
        document.getElementById('hero-user-cta').style.display = logged ? 'flex' : 'none';
        
        if(logged) {
            document.getElementById('nav-avatar').src = state.user.avatar;
            document.getElementById('role-indicator').textContent = state.user.role;
            const badgeCount = state.collabs.size;
            const b = document.getElementById('msg-badge-count');
            if(badgeCount > 0){ b.style.display = 'inline-block'; b.innerText = badgeCount; } else { b.style.display='none'; }
        }
    },

    signOut() {
        storage.logout();
        this.updateUI();
        this.navigate('home');
        this.showToast('Session ended.');
    },

    // --- Home ---
    renderHome() {
        const hs = document.getElementById('home-sectors');
        hs.innerHTML = CATEGORIES.slice(0,8).map(c => `<span class="filter-chip" onclick="app.navigate('discover'); app.setFilter('${c}')">${c}</span>`).join('');
        
        const fi = document.getElementById('featured-ideas');
        fi.innerHTML = state.ideas.filter(i => i.isAI).slice(0,3).map(i => this.renderCard(i)).join('');
        
        // stats
        document.getElementById('stat-ideas').innerText = state.ideas.length;
    },

    renderCard(i) {
        return `
            <div class="card-glass" onclick="app.openDetail(${i.id})">
                <div class="card-badge">${i.category}</div>
                ${i.isAI ? '<span class="ai-badge">✨ Oracle</span>' : ''}
                <h4 style="margin: 0.5rem 0; font-size:1.3rem;">${i.title}</h4>
                <p class="text-muted" style="font-size:0.95rem; margin-bottom:1.5rem;">${i.tagline}</p>
                <div class="card-footer">
                    <div class="poster-info"><i class="ti ti-user-circle"></i> @${i.poster}</div>
                    <div style="color:var(--teal); font-weight:bold;"><i class="ti ti-heart"></i> ${i.likes}</div>
                </div>
            </div>
        `;
    },

    // --- Discover / Swipe ---
    setupDiscoverFilters() {
        const f = document.getElementById('discover-filters');
        f.innerHTML = `<span class="filter-chip ${state.filter==='All'?'active':''}" onclick="app.setFilter('All')">All Domains</span>` + 
                      CATEGORIES.map(c => `<span class="filter-chip ${state.filter===c?'active':''}" onclick="app.setFilter('${c}')">${c}</span>`).join('');
    },
    
    setFilter(cat) {
        state.filter = cat;
        this.setupDiscoverFilters();
        this.refillSwipeQueue();
    },

    refillSwipeQueue() {
        let pool = state.ideas.filter(i => 
            !state.swiped.right.has(i.id) && 
            !state.swiped.left.has(i.id) && 
            !state.swiped.saved.has(i.id) &&
            (!state.user || i.poster !== state.user.username)
        );
        if(state.filter !== 'All') pool = pool.filter(i => i.category === state.filter);
        if(state.searchQuery) {
            const sq = state.searchQuery;
            pool = pool.filter(i => 
                i.title.toLowerCase().includes(sq) || 
                i.tagline.toLowerCase().includes(sq) || 
                (i.tags && i.tags.some(t => t.toLowerCase().includes(sq)))
            );
        }
        state.swipeQueue = pool.sort(() => 0.5 - Math.random());
        this.loadNextSwipeCard();
    },

    loadNextSwipeCard() {
        const cont = document.getElementById('swipe-container');
        document.querySelectorAll('.swipe-card').forEach(c => c.remove());
        
        document.getElementById('empty-state-swipe').style.display = state.swipeQueue.length === 0 ? 'flex' : 'none';
        if(state.swipeQueue.length === 0) return;

        // Render top 2 for 3D effect
        const toRender = state.swipeQueue.slice(0, 2).reverse();
        toRender.forEach((i, idx) => {
            const isTop = idx === toRender.length - 1;
            const c = document.createElement('div');
            c.className = 'swipe-card';
            if(!isTop) {
                c.style.transform = 'scale(0.95) translateY(20px)';
                c.style.opacity = '0.5';
                c.style.pointerEvents = 'none';
            }
            
            c.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <span class="card-badge">${i.category}</span>
                    <span class="card-badge" style="background:transparent; border:1px solid var(--border-color); color:var(--text-muted);">${i.type}</span>
                </div>
                <h3 class="card-title">${i.title}</h3>
                <p class="card-summary">${i.tagline}</p>
                <div class="card-meta">
                    <span class="meta-chip"><i class="ti ti-rocket"></i> ${i.difficulty}</span>
                    <span class="meta-chip"><i class="ti ti-clock"></i> ${i.time}</span>
                    <span class="meta-chip"><i class="ti ti-bulb"></i> ${i.stage}</span>
                </div>
                <div style="margin-bottom:1rem;">
                    ${(i.tags||[]).slice(0,3).map(t => `<span class="badge" style="margin-right:4px;">#${t}</span>`).join('')}
                </div>
                <div class="card-footer" onclick="${isTop ? `app.openDetail(${i.id})` : ''}" style="${isTop ? 'cursor:pointer;' : ''}">
                    <div class="poster-info"><i class="ti ti-user-circle"></i> @${i.poster} ${i.isAI ? '<span class="ai-badge">✨ Base</span>' : ''}</div>
                    <div style="color:var(--text-muted);"><i class="ti ti-thumb-up"></i> ${i.likes} Likes</div>
                </div>
            `;
            cont.appendChild(c);
            if(isTop) this.initSwipeMechanics(c, i.id);
        });
    },

    initSwipeMechanics(c, id) {
        let scX = 0, scY = 0, dragging = false, startX=0, startY=0;
        
        const move = (x, y) => {
            if(!dragging) return;
            scX = x - startX; scY = y - startY;
            const rot = scX * 0.05;
            c.style.transform = `translate(${scX}px, ${scY}px) rotate(${rot}deg)`;
        };

        const end = () => {
            if(!dragging) return;
            dragging = false;
            c.style.transition = '0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            if(scX > 100) this.handleSwipeAction(c, id, 'right');
            else if(scX < -100) this.handleSwipeAction(c, id, 'left');
            else if(scY < -100) this.handleSwipeAction(c, id, 'up');
            else c.style.transform = '';
        };

        c.addEventListener('mousedown', e => { if(e.target.closest('.card-footer')) return; dragging = true; startX = e.clientX; startY = e.clientY; c.style.transition='none'; });
        window.addEventListener('mousemove', e => move(e.clientX, e.clientY));
        window.addEventListener('mouseup', end);
        
        c.addEventListener('touchstart', e => { if(e.target.closest('.card-footer')) return; dragging = true; startX = e.touches[0].clientX; startY = e.touches[0].clientY; c.style.transition='none'; }, {passive:true});
        window.addEventListener('touchmove', e => move(e.touches[0].clientX, e.touches[0].clientY), {passive:true});
        window.addEventListener('touchend', end);
    },

    handleSwipeChoice(dir) {
        const c = document.querySelector('.swipe-card:last-child');
        if(c && state.swipeQueue.length > 0) this.handleSwipeAction(c, state.swipeQueue[0].id, dir);
    },

    handleSwipeAction(c, id, dir) {
        if(!state.auth && dir !== 'left') return this.showAuthModal();
        c.style.transition = '0.4s ease-out';
        
        if(dir === 'right') {
            c.style.transform = 'translate(100vw, -100px) rotate(30deg)';
            state.swiped.right.add(id);
            const idea = state.ideas.find(i=>i.id===id);
            if(idea) idea.likes++;
            this.showToast('Signal Sent! Added to Building list.');
        } else if(dir === 'left') {
            c.style.transform = 'translate(-100vw, -100px) rotate(-30deg)';
            if(state.auth) state.swiped.left.add(id);
        } else if(dir === 'up') {
            c.style.transform = 'translate(0, -100vh)';
            state.swiped.saved.add(id);
            this.showToast('Bookmark secured.');
        }
        
        storage.save();
        setTimeout(() => { state.swipeQueue.shift(); this.loadNextSwipeCard(); }, 300);
    },

    // --- Details Modal ---
    openDetail(id) {
        const i = state.ideas.find(x => x.id === id);
        if(!i) return;
        
        const b = document.getElementById('idea-modal-body');
        const isOwner = state.user && i.poster === state.user.username;
        const alreadyBuilding = state.swiped.right.has(id) || state.collabs.has(id);
        
        b.innerHTML = `
            <div class="detail-header">
                <span class="card-badge">${i.category} • ${i.type}</span>
                <h2 style="font-size:2.5rem; margin:1rem 0; color:var(--violet); font-family:'Space Grotesk'">${i.title}</h2>
                <p class="text-muted" style="font-size:1.2rem;">${i.tagline}</p>
            </div>
            <div class="detail-body">
                <h4 style="margin-bottom:0.5rem;">Mission Parameters</h4>
                <p style="margin-bottom:2rem; line-height:1.8;">${i.desc}</p>
                
                <h4 style="margin-bottom:0.5rem; color:var(--danger)">The Problem</h4>
                <p style="margin-bottom:2rem; line-height:1.8;">${i.problem || 'Not specified.'}</p>
                
                <h4 style="margin-bottom:1rem;">Specs</h4>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:2rem;">
                    <div class="meta-chip">Difficulty: <strong>${i.difficulty}</strong></div>
                    <div class="meta-chip">Est. Time: <strong>${i.time}</strong></div>
                    <div class="meta-chip">Stage: <strong>${i.stage}</strong></div>
                    <div class="meta-chip">Tags: <strong>${(i.tags||[]).join(', ')}</strong></div>
                </div>
                
                <div style="background:var(--bg-elevated); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); display:flex; gap:1rem; align-items:center;">
                    <i class="ti ti-star" style="font-size:2rem; color:var(--gold);"></i>
                    <div><span class="text-muted">Target Needs:</span><br><strong>${(i.lookingFor||[]).join(', ') || 'Community Support'}</strong></div>
                </div>
            </div>
            <div class="detail-actions">
                ${isOwner ? `<div style="color:var(--success); font-weight:bold; width:100%; text-align:center;"><i class="ti ti-check"></i> This is your launch.</div>` : 
                 `<button class="btn btn-primary btn-block" onclick="app.signalBuilder(${i.id})">
                    ${alreadyBuilding ? '<i class="ti ti-message"></i> Message Platform Owner' : '<i class="ti ti-satellite"></i> Signal This Builder (I want to build)'}
                 </button>`}
            </div>
        `;
        document.getElementById('idea-modal').classList.add('open');
    },

    signalBuilder(id) {
        if(!state.auth) return this.showAuthModal();
        state.collabs.add(id);
        this.hideModals();
        storage.save();
        this.showToast('Comm-link established with Owner!');
        this.navigate('messages');
    },

    // --- Post Form ---
    setupIdeaForm() {
        document.getElementById('idea-category').innerHTML = CATEGORIES.map(c => `<option value="${c}">${c}</option>`).join('');
        document.getElementById('idea-type').innerHTML = IDEA_TYPES.map(c => `<option value="${c}">${c}</option>`).join('');
        
        document.getElementById('post-idea-form').onsubmit = (e) => {
            e.preventDefault();
            if(!state.auth) return this.showAuthModal();
            
            const lf = Array.from(document.querySelectorAll('#idea-looking-for .filter-chip.active')).map(c => c.textContent);
            const tags = document.getElementById('idea-tags').value.split(',').map(t => t.trim()).filter(t=>t);
            
            const n = {
                id: Date.now(),
                title: document.getElementById('idea-title').value,
                tagline: document.getElementById('idea-tagline').value,
                desc: document.getElementById('idea-desc').value,
                problem: document.getElementById('idea-problem').value,
                category: document.getElementById('idea-category').value,
                type: document.getElementById('idea-type').value,
                stage: document.getElementById('idea-stage').value,
                difficulty: document.getElementById('idea-difficulty').value,
                time: document.getElementById('idea-time').value,
                tags: tags, lookingFor: lf,
                poster: state.user.username, likes: 0, isAI: false
            };
            
            state.myLaunches.unshift(n);
            state.ideas.unshift(n);
            storage.save();
            this.showToast('Concept successfully launched into Orbit! 🚀');
            e.target.reset(); document.querySelectorAll('#idea-looking-for .filter-chip').forEach(c=>c.classList.remove('active'));
            this.navigate('dashboard');
        };
    },

    // --- Dashboard ---
    renderDashboard() {
        document.getElementById('dash-greeting').innerText = `Welcome back, ${state.user.username}`;
        
        // Tab setup
        const tabs = document.querySelectorAll('#dash-tabs .filter-chip');
        tabs.forEach(t => t.onclick = () => {
            tabs.forEach(x => x.classList.remove('active')); t.classList.add('active');
            this.refreshDashboardGrid(t.dataset.tab);
        });
        
        this.updateStarProgress();
        this.refreshDashboardGrid('My Launches');
        
        // Recommended
        const rec = state.ideas.filter(i => 
            state.user.interests.includes(i.category) && 
            i.poster !== state.user.username &&
            !state.swiped.right.has(i.id)
        ).sort(() => 0.5 - Math.random()).slice(0,3);
        
        document.getElementById('dash-recommended').innerHTML = rec.length ? rec.map(i => this.renderCard(i)).join('') : '<p class="text-muted">Explore Discover to find more recommendations.</p>';
    },
    
    refreshDashboardGrid(type) {
        const g = document.getElementById('dashboard-ideas-list');
        let arr = [];
        if(type === 'My Launches') arr = state.myLaunches;
        if(type === 'Building') arr = state.ideas.filter(i => state.collabs.has(i.id) || state.swiped.right.has(i.id));
        if(type === 'Saved') arr = state.ideas.filter(i => state.swiped.saved.has(i.id));
        
        if(!arr.length) {
            g.innerHTML = `<div style="grid-column:1/-1; padding:3rem; text-align:center; background:var(--bg-card); border-radius:var(--radius-md);"><p class="text-muted">No data found in this quadrant.</p></div>`;
            return;
        }
        g.innerHTML = arr.map(i => this.renderCard(i)).join('');
    },

    updateStarProgress() {
        const posted = state.myLaunches.length;
        const built = state.collabs.size + state.swiped.right.size;
        
        const getLvl = (n, ranks) => ranks.slice().reverse().find(r => n >= r.req) || {lvl: 0, req:0};
        const getNext = (n, ranks) => ranks.find(r => n < r.req);
        
        const yRanks = [{lvl:1, req:1},{lvl:2, req:5},{lvl:3, req:10},{lvl:4, req:20},{lvl:5, req:35}];
        const rRanks = [{lvl:1, req:1},{lvl:2, req:5},{lvl:3, req:15},{lvl:4, req:30},{lvl:5, req:50}];
        
        const yC = getLvl(posted, yRanks), yN = getNext(posted, yRanks);
        const rC = getLvl(built, rRanks),  rN = getNext(built, rRanks);
        
        document.getElementById('dash-yellow-star-lvl').innerText = '⭐'.repeat(yC.lvl) || 'No Stars';
        document.getElementById('dash-red-star-lvl').innerText = '⭐'.repeat(rC.lvl) || 'No Stars';
        
        const updateBar = (curr, curRank, nextRank, fillId, subId, itemStr) => {
            const fill = document.getElementById(fillId), sub = document.getElementById(subId);
            if(!nextRank) { fill.style.width = '100%'; sub.innerText = 'Max Rank Reached'; return; }
            const p = curRank.req === nextRank.req ? 0 : ((curr - curRank.req) / (nextRank.req - curRank.req)) * 100;
            fill.style.width = `${Math.min(100, Math.max(5, p))}%`;
            sub.innerText = `${nextRank.req - curr} ${itemStr} to Level ${nextRank.lvl}`;
        };
        
        updateBar(posted, yC, yN, 'dash-yellow-fill', 'dash-yellow-sub', 'ideas');
        updateBar(built, rC, rN, 'dash-red-fill', 'dash-red-sub', 'builds');
    },

    // --- Profile ---
    renderProfile() {
        document.getElementById('profile-page-name').innerText = state.user.firstName ? `${state.user.firstName} ${state.user.lastName}` : 'Explorer';
        document.getElementById('profile-page-username').innerText = '@'+state.user.username;
        document.getElementById('profile-page-avatar').src = state.user.avatar;
        document.getElementById('profile-page-bio').innerText = state.user.bio || 'Silence in the void. Update bio to transmit signal.';
        
        document.getElementById('profile-page-interests').innerHTML = state.user.interests.map(i => `<span class="badge" style="margin-right:0.5rem; margin-bottom:0.5rem;">${i}</span>`).join('');
        
        const posted = state.myLaunches.length;
        const built = state.collabs.size + state.swiped.right.size;
        
        const yLvl = [{l:1, r:1},{l:2, r:5},{l:3, r:10},{l:4, r:20},{l:5, r:35}].slice().reverse().find(x=>posted>=x.r)?.l || 0;
        const rLvl = [{l:1, r:1},{l:2, r:5},{l:3, r:15},{l:4, r:30},{l:5, r:50}].slice().reverse().find(x=>built>=x.r)?.l || 0;
        
        document.getElementById('profile-yellow-stars').innerText = '⭐'.repeat(yLvl) || '-';
        document.getElementById('profile-red-stars').innerText = '⭐'.repeat(rLvl) || '-';
        
        document.getElementById('profile-ideas-count').innerText = posted;
        document.getElementById('profile-build-count').innerText = built;
        document.getElementById('profile-swipe-count').innerText = state.myLaunches.reduce((a,c)=>a+(c.likes||0),0);
    },

    // --- Messages ---
    renderMessages() {
        const ml = document.getElementById('messages-list');
        const activeIds = Array.from(state.collabs).concat(Array.from(state.swiped.right));
        const chats = state.ideas.filter(i => activeIds.includes(i.id));
        
        if(!chats.length) { ml.innerHTML = '<div style="padding:2rem; text-align:center; color:var(--text-muted)">Inbox Empty. Request build on an idea.</div>'; document.getElementById('chat-area').style.display='none'; return; }
        
        ml.innerHTML = chats.map(c => `
            <div style="padding:1rem; border-bottom:1px solid var(--border-color); cursor:pointer;" onclick="app.openChat(${c.id})">
                <div style="font-weight:bold; margin-bottom:0.2rem;">@${c.poster}</div>
                <div style="font-size:0.85rem; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Re: ${c.title}</div>
            </div>
        `).join('');
        
        this.openChat(chats[0].id);
    },
    
    openChat(id) {
        document.getElementById('chat-area').style.display = 'flex';
        const c = state.ideas.find(i=>i.id===id);
        document.getElementById('chat-partner').innerText = '@' + c.poster;
        document.getElementById('chat-context').innerText = `Re: ${c.title}`;
        
        const cm = document.getElementById('chat-messages');
        cm.innerHTML = `
            <div style="text-align:center; color:var(--text-muted); font-size:0.8rem; margin:1rem 0;">Channel Opened: Secure Transmission</div>
            <div class="chat-bubble received">Greetings. I noticed you're interested in ${c.title}. How can we collaborate on this?</div>
        `;
    },
    
    sendMessage() {
        const i = document.getElementById('chat-input');
        if(!i.value.trim()) return;
        const msg = `<div class="chat-bubble sent">${i.value}</div>`;
        document.getElementById('chat-messages').insertAdjacentHTML('beforeend', msg);
        i.value = '';
        setTimeout(() => {
            const reply = `<div class="chat-bubble received">Received your transmission. Let's sync up later.</div>`;
            document.getElementById('chat-messages').insertAdjacentHTML('beforeend', reply);
        }, 1500);
    },

    showToast(m) {
        const t = document.getElementById('toast');
        t.innerText = m;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 3000);
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
