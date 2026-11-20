// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Kevin Nguyen",
    program: "B-Tech Automation Engineering Program",
    university: "McMaster University, Canada",
    email: "nguyek97@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

 theme: {
    heroBg: "#0b1220",    // deep night-city navy
    heroText: "#e0f2fe",  // soft icy white
    pageBg: "#f1f5f9",    // clean light slate
    accent: "#06b6d4"     // electric cyan, the "digital" glow
  },

  dividers: {
    dividerBg: "#0f172a", // dark band, like a dashboard panel
    dividerText: "#fbbf24" // signal amber
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Utilization of Sumo and Netedit to simulate traffic conditions on Bayview Avenue and Finch Avenue East intersection in Toronto, Ontario ",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Traffic simulation of Base Scenario 100% HDV and Scenario of 100% AV / CAV"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
			"This study develops an integrated roadway-and-traffic simulation for the Bayview Avenue and Finch Avenue East intersection in Toronto .",
			"The study examines how simulated traffic performance changes under human-driven vehicle (HDV), connected/autonomous vehicle (CAV), and intervention conditions. ",
			"Stage A1 represents the study-area roads, junctions, turns, and lane connections in Simulation of Urban MObility (SUMO).",
			"Stage A2 adds major-road traffic movements and traffic controls, then assesses the speed–density relationship on the same selected roadway edge."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
			"Simulate train scheduling, signalling, and capacity in SUMO.",
			"Determine how replacing HDVs with CAVs affects speed–density.",
			"Compare HDV and CAV scenarios under identical controlled conditions.",
			"Verify a signal intervention with documented before-and-after settings."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
			"Model the Bayview–Finch intersection and its 100% HDV baseline in SUMO.",
			"Compare speed–density on edge E66 under 100% CAV and 100% HDV.",
			"Implement one intervention and compare speed–density on E66 before and after.",
			"Present results in different styles through KPIs, figures, and a shorter showcase website."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1:Build the Network and Baseline.",
				text: "Trace the Bayview–Finch intersection in NetEdit and simulate 100% HDV traffic on edge E66.",
        image: "assets/img/image2.jpg"
      },
      {
				title: "Step 2: Simulate 100% CAV Traffic",
				text: "Replace HDVs with CAVs that use shorter gaps and headways, then compare speed–density on E66.",
        image: "assets/img/image3.jpg"
      },
      {
				title: "Step 3: Test a Signal Intervention",
				text: "Extend E66's green phase from 27 s to 30 s and compare speed–density before and after.",
        image: "assets/img/image4.jpg"
      },
      {
				title: "Step 4: Results & Communication (Figures + Showcase Website)",
				text: "Summarize results using figures, KPIs, and the showcase website.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Train Scheduling & Signalling (SUMO)",
        bullets: [
				  { text: "Build a simulated rail network in SUMO with train routing and maximum operating speed." },
          { text: "Design fixed-block rail signals and define station stops along the corridor." },
          { text: "Configure timetable, scheduled departures, running time, dwell time, and headway." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Digital Twin Assets Development (Blender)",
        bullets: [
          { text: "Generative AI: use Meshy.ai tool to develop different assets." },
          { text: "From generative AI to Blender." },
          { text: "Preprocessing assets in Blender ." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Immersive VR Visualization (Unity)",
        bullets: [
				  { text: "Develop a 3D railway environment including stations, buildings, trees, and rolling stock." },
          { text: "Configure visualization fundamentals: lighting, camera position, time of day, and scene composition." },
          { text: "Produce a VR 360-degree video output for immersive presentation and portfolio use." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results & Communication",
        bullets: [
          { text: "Dashboard or plot set: KPI cards, bar charts, and/or time series." },
          { text: "Scenario story: what changed, what improved, and what tradeoffs appeared." },
          { text: "Limitations + next steps: what data would strengthen confidence." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	results: {
			title: "Results & Potential Improvements",
			subtitle:
				"Speed–density outputs on edge E66 comparing the 100% HDV baseline with a 100% CAV scenario and a signal-timing intervention.",

			charts: {
				left: {
					title: "Scenario 1 — 100% CAV vs. 100% HDV Baseline: Speed vs. Density",
					src: "assets/img/image6.jpg",
					alt: "Speed-density chart for edge E66 comparing the 100% CAV scenario with the 100% HDV baseline"
				},
				right: {
					title: "Scenario 2 — Green Time 27 s to 30 s: Speed vs. Density",
					src: "assets/img/image7.jpg",
					alt: "Speed-density chart for edge E66 comparing the HDV baseline before and after the green-time extension"
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"The HDV baseline fits Greenshields well (vf = 8.0 m/s, kj = 83 veh/km, R² = 0.904).",
				"CAVs lowered free-flow speed to 7.4 m/s but raised jam density to 92 veh/km.",
				"CAVs were slightly faster only at higher densities, not across all conditions.",
				"The 3 s green extension raised fitted capacity by about 11%, but most data points barely moved.",
				"More simulation runs and queue, delay, and throughput measures are needed to confirm benefits."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Kevin Nguyen", role: "SUMO Road Network Development + Traffic Demand and Signal Configuration + Report Writing and References, 3D Asset Generation and Blender Modelling + Asset Preparation, Materials and FBX Export" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/KevinTN03/KevinNguyen.github.io"
  }
};
