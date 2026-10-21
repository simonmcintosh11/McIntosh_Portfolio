// ============================================================
//  SITE CONTENT
//  This is the only file you need to edit to update the site.
//  Any section left as an empty list [] is hidden automatically
//  (except Publications, which shows a short placeholder note).
// ============================================================

window.SITE = {
  name: "Simon McIntosh",
  title: "Director, ESG and Sustainability Advisory",
  affiliation: "FTI Consulting",
  email: "Simon.McIntosh11@gmail.com",
  location: "El Portal, California",
  photo: "", // e.g. "assets/profile.jpg" (leave empty to show initials)
  cvPdf: "", // e.g. "assets/cv.pdf" (leave empty to hide the download button)

  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/Simon-L-Mcintosh" },
    { label: "GitHub", url: "https://github.com/simonmcintosh11" },
  ],

  about: [
    "I am a program leader with nine years of experience running complex, politically visible programs for regulated and public-sector institutions. I spent five years as Yosemite Conservancy's liaison to the National Park Service through a full overhaul of the Yosemite Wilderness Program, and I now direct multi-account client portfolios at FTI Consulting.",
    "My work centers on building the reporting, forecasting, and operating-review infrastructure that gives executives and partner organizations a shared view of status, risk, cost, and decisions. As a 2026 Clean Energy Leadership Institute fellow, my research focuses on equitable rate design for distributed solar in California.",
  ],

  interests: [
    "Energy justice and rate design",
    "Distributed and plug-in solar",
    "Climate disclosure regulation",
    "Public lands management",
  ],

  news: [
    { date: "2026", text: "Joined the 2026 cohort of the Clean Energy Leadership Institute (CELI) as a Fellow." },
    { date: "2024", text: "Completed an MBA in Social Impact at Boston University Questrom School of Business." },
    { date: "2024", text: "Joined FTI Consulting as Director, ESG and Sustainability Advisory." },
  ],

  // ---------------- Research ----------------
  research: [
    {
      title: "Equitable Rate Design for Balcony Solar in California",
      period: "2026, CELI Fellowship capstone",
      description:
        "Examines how California utilities, centered on PG&E, can recover fixed grid costs as plug-in balcony solar spreads without shifting the burden onto lower-income households. Compares four policy options and develops two in depth: a utility lease model that removes the upfront cost barrier while giving the utility visibility into behind-the-meter generation, and an income-graduated fixed charge with a privacy-preserving income verification mechanism modeled on the ACA marketplace.",
      tags: ["Rate design", "Energy justice", "Distributed solar", "CPUC policy"],
      links: [],
    },
    {
      title: "Trailhead Quota Reporting and Demand Forecasting",
      period: "2019 to 2022, Yosemite Conservancy",
      description:
        "Built the Yosemite Wilderness Program's first trailhead quota reporting and demand forecasting capability, giving Yosemite Conservancy and the National Park Service shared visibility into utilization and constraints. Supported a program that absorbed a 265% increase in online permit demand during concurrent pandemic and wildfire seasons.",
      tags: ["Forecasting", "Public lands", "Operations analytics"],
      links: [],
    },
    {
      title: "Volunteer Participation and Donor Giving",
      period: "2017 to 2019, Yosemite Conservancy",
      description:
        "Analyzed the link between volunteer participation and donor giving, and used the findings to win management approval to expand the volunteer program, which then doubled in size.",
      tags: ["Data analysis", "Nonprofit strategy"],
      links: [],
    },
    {
      title: "Transportation Corridor Alternatives in Mongolian National Parks",
      period: "2016, Simon Family Public Research Fellowship",
      description:
        "Applied multi-criteria decision analysis to evaluate transportation corridor alternatives across government, conservation, and community stakeholder groups in Mongolian national parks.",
      tags: ["Decision analysis", "Geospatial", "Stakeholder engagement"],
      links: [],
    },
  ],

  // ---------------- Publications ----------------
  // type: "journal" | "conference" | "preprint" | "report" | "thesis" | "other"
  // Your own name in `authors` is highlighted automatically (see highlightAuthor).
  // Example entry:
  // {
  //   title: "Paper title",
  //   authors: "S. McIntosh, A. Coauthor",
  //   venue: "Journal or publisher",
  //   year: 2026,
  //   type: "report",
  //   links: [{ label: "PDF", url: "assets/paper.pdf" }],
  //   bibtex: "@article{...}",
  // },
  highlightAuthor: "S. McIntosh",
  publications: [],

  // ---------------- Resume ----------------
  // Bullets written as "Label | text" show the label in bold.
  experience: [
    {
      role: "Director, ESG and Sustainability Advisory",
      organization: "FTI Consulting, New York, NY (remote from California)",
      period: "2024 to present",
      summary:
        "Direct a portfolio of 5 to 6 concurrent client programs with annual budgets of $100,000 to $750,000. Lead a cross-functional team of 7 consultants and serve as the primary executive interface on each account.",
      bullets: [
        "Program and portfolio delivery | Own scope, work plans, budgets, and forecasts across the portfolio; manage competing milestones and dependencies and reallocate resources to hold delivery commitments.",
        "Executive reporting and operating reviews | Build and deliver recurring status and recommendation packages to client executives and boards, consolidating milestones, risks, decisions, dependencies, and next steps into a single view.",
        "Regulatory program management | Advise executives on sequencing compliance with California climate disclosure regulations, the EU CSRD, and emerging frameworks; translate external requirements into internal work plans, controls, and reporting processes.",
        "Process improvement and change management | Lead practice-wide AI integration, directing both implementation and risk assessment, and develop the training and communications that moved teams onto new methods.",
        "Stakeholder communications | Design engagement strategies positioning client performance for investors and rating agencies, supporting improved access to capital.",
      ],
    },
    {
      role: "Wilderness Programs Director",
      organization: "Yosemite Conservancy, El Portal, CA",
      period: "2019 to 2022",
      summary:
        "Ran a $500,000 annual program processing 200,000 permit requests with 5 direct reports, delivered in partnership with the National Park Service under federal compliance requirements.",
      bullets: [
        "Government agency partnership | Served as the Conservancy's liaison to the National Park Service through a full overhaul of the Yosemite Wilderness Program, aligning federal compliance requirements, public expectations, and program economics across two organizations with different mandates and approval chains.",
        "Reporting and forecasting infrastructure | Built the program's first trailhead quota reporting and demand forecasting capability, giving both organizations visibility into utilization and constraint for the first time and driving an 88% increase in program web traffic.",
        "Process improvement | Redesigned a manual permit process into interactive online applications, eliminating 50 staff hours per week.",
        "Crisis and continuity management | Launched new applications and communication workflows during concurrent pandemic and wildfire seasons, absorbing a 265% increase in online permit demand without service failure.",
        "Team leadership | Raised seasonal staff retention from 25% to 100%; trained reservation staff on application review and permit compliance; managed 10,000 direct customer contacts annually.",
      ],
    },
    {
      role: "Volunteer Coordinator and Data Analyst",
      organization: "Yosemite Conservancy, El Portal, CA",
      period: "2017 to 2019",
      bullets: [
        "Managed 400 annual volunteers across 3 programs, delivering $400,000 in in-kind value and staffing 11 information stations across a 5 month season.",
        "Built the analysis linking volunteer participation to donor giving, used it to win management approval to expand the program, and doubled program size while carrying long-tenured participants through new fees and a new application process.",
      ],
    },
  ],

  education: [
    {
      degree: "Fellow, Clean Energy Leadership Institute (CELI)",
      institution: "2026 Cohort",
      period: "Expected Fall 2026",
      details: "",
    },
    {
      degree: "MBA, Social Impact",
      institution: "Boston University Questrom School of Business, Boston, MA",
      period: "2024",
      details: "",
    },
    {
      degree: "BS, Environmental Studies (Program Honors); Minor, Geospatial Technologies",
      institution: "University of Vermont",
      period: "2017",
      details: "Outing Club President (2015): managed an $80,000 budget and 115 trip leaders.",
    },
  ],

  awards: [
    { title: "CELI Fellowship", org: "Clean Energy Leadership Institute", year: "2026" },
    { title: "Program Honors, Environmental Studies", org: "University of Vermont", year: "2017" },
    { title: "Simon Family Public Research Fellowship", org: "University of Vermont", year: "2016" },
  ],

  skills: [
    {
      category: "Program leadership",
      items: [
        "Program and portfolio management",
        "Cross-functional coordination",
        "Team leadership and mentoring",
        "Change management and training",
      ],
    },
    {
      category: "Reporting and analysis",
      items: [
        "Executive reporting and joint operating reviews",
        "Performance metrics and dashboards",
        "Budget, forecast, and variance analysis",
        "Process improvement",
      ],
    },
    {
      category: "Public sector and regulatory",
      items: [
        "Government and public agency stakeholder management",
        "Regulatory compliance and filings",
      ],
    },
  ],

  talks: [],
};
