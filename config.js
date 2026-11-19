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
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
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
        title: "Step 1: Train Scheduling and Signaling (SUMO Simulation)",
				text: "Build the rail network and test routing, signaling, and timetables.",
        image: "assets/img/image2.jpg"
      },
      {
				title: "Step 2: Digital Twin Assets Developement (Blender)",
				text: "Create a 3D railway assets using generative AI and blender.",
        image: "assets/img/image3.jpg"
      },
      {
				title: "Step 3: Immersive VR Visualization (Unity)",
				text: "Create a 3D railway scene and produce a VR 360-degree video.",
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
        title: "Module 1: Train Scheduling & Signaling (SUMO)",
        bullets: [
				  { text: "Build a simulated rail network in SUMO with train routing and maximum operating speed." },
          { text: "Design fixed-block rail signals and define station stops along the corridor." },
          { text: "Configure timetable, scheduled departures, running time, dwell time, and headway." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Digital Twin Assets Developement (Blender)",
        bullets: [
          { text: "Generative AI: use Meshy.ai tool to develop different assets." },
          { text: "From generative AI to belnder." },
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
				"Train schedule simulation outputs across two scenarios showing arrivals, departures, and dwell time across four stations. Results are for educational purposes only.",

			charts: {
				left: {
					title: "Scenario 1 — Train Schedule: Arrivals, Departures & Dwell Time",
					src: "assets/img/image6.jpg",
					alt: "Scenario 1 train schedule chart showing arrivals and departures across S1 to S4"
				},
				right: {
					title: "Scenario 2 — Train Schedule: Arrivals, Departures & Dwell Time",
					src: "assets/img/image7.jpg",
					alt: "Scenario 2 train schedule chart showing arrivals and departures across S1 to S4"
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"Scenario 1 provides a stable baseline timetable with consistent station dwell and smooth train progression.",
				"Scenario 2 applies a delay at S2, which then propagates to downstream stations.",
				"Delay effects grow across frequency levels, with major increases in arrival and departure times at S3 and S4.",
				"S1 is only slightly affected, while downstream stations absorb most of the disruption.",
				"This demonstrates the importance of recovery time, dwell management, and operational control in rail scheduling."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Your Name", role: "Rail Scheduling & Signaling + Digital Twin I, Immersive VR Visualization + Results & Communication" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/USERNAME/REPO"
  }
};
