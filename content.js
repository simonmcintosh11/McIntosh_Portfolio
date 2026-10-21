// ============================================================
//  SITE CONTENT
//  This is the only file you need to edit to update the site.
//  Replace the placeholder text below with your own details.
//  Any section left as an empty list [] is hidden automatically.
// ============================================================

window.SITE = {
  name: "Simon McIntosh",
  title: "Researcher",
  affiliation: "Department of Your Field, Your University",
  email: "simonmcintosh11@gmail.com",
  location: "City, Country",
  photo: "", // e.g. "assets/profile.jpg" (leave empty to show initials)
  cvPdf: "", // e.g. "assets/cv.pdf" (leave empty to hide the download button)

  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/" },
    { label: "ORCID", url: "https://orcid.org/" },
    { label: "GitHub", url: "https://github.com/simonmcintosh11" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
  ],

  about: [
    "Write a short introduction here: who you are, what you work on, and what drives your research. Two or three sentences is plenty.",
    "A second paragraph can describe your current position, collaborations, or what kinds of opportunities you are looking for.",
  ],

  interests: ["Research interest one", "Research interest two", "Research interest three"],

  news: [
    { date: "2026-09", text: "Example news item: paper accepted at a conference." },
    { date: "2026-06", text: "Example news item: started a new position." },
  ],

  // ---------------- Research ----------------
  research: [
    {
      title: "Research Project One",
      period: "2024 to present",
      description:
        "Describe the problem, your approach, and the key findings. Keep it to a short paragraph that a non-specialist could follow.",
      tags: ["Topic A", "Topic B"],
      links: [{ label: "Project page", url: "#" }],
    },
    {
      title: "Research Project Two",
      period: "2022 to 2024",
      description:
        "Another project description. Mention collaborators, funding, or datasets if relevant.",
      tags: ["Topic C"],
      links: [],
    },
  ],

  // ---------------- Publications ----------------
  // type: "journal" | "conference" | "preprint" | "thesis" | "other"
  // Your own name in `authors` is highlighted automatically (see highlightAuthor).
  highlightAuthor: "S. McIntosh",
  publications: [
    {
      title: "An Example Journal Article Title",
      authors: "S. McIntosh, A. Coauthor, B. Coauthor",
      venue: "Journal Name, Vol. 12, pp. 1 to 20",
      year: 2026,
      type: "journal",
      links: [
        { label: "PDF", url: "#" },
        { label: "DOI", url: "https://doi.org/" },
      ],
      bibtex: "@article{mcintosh2026example,\n  title={An Example Journal Article Title},\n  author={McIntosh, S. and Coauthor, A. and Coauthor, B.},\n  journal={Journal Name},\n  year={2026}\n}",
    },
    {
      title: "An Example Conference Paper Title",
      authors: "A. Coauthor, S. McIntosh",
      venue: "Proceedings of the Example Conference",
      year: 2025,
      type: "conference",
      links: [
        { label: "PDF", url: "#" },
        { label: "Code", url: "#" },
      ],
    },
    {
      title: "An Example Preprint Title",
      authors: "S. McIntosh",
      venue: "arXiv:0000.00000",
      year: 2025,
      type: "preprint",
      links: [{ label: "arXiv", url: "https://arxiv.org/" }],
    },
  ],

  // ---------------- Resume ----------------
  education: [
    {
      degree: "PhD in Your Field",
      institution: "University Name",
      period: "2021 to 2025",
      details: "Thesis: Your thesis title. Advisor: Prof. Name.",
    },
    {
      degree: "BSc in Your Field",
      institution: "University Name",
      period: "2017 to 2021",
      details: "First class honours.",
    },
  ],

  experience: [
    {
      role: "Postdoctoral Researcher",
      organization: "Institution Name",
      period: "2025 to present",
      bullets: ["What you do in this role.", "A notable achievement or responsibility."],
    },
    {
      role: "Teaching Assistant",
      organization: "University Name",
      period: "2021 to 2025",
      bullets: ["Courses taught and responsibilities."],
    },
  ],

  awards: [
    { title: "Example Fellowship", org: "Funding Body", year: "2024" },
    { title: "Best Paper Award", org: "Example Conference", year: "2023" },
  ],

  skills: [
    { category: "Methods", items: ["Method one", "Method two"] },
    { category: "Programming", items: ["Python", "R", "LaTeX"] },
    { category: "Languages", items: ["English (native)"] },
  ],

  talks: [
    { title: "Example invited talk title", event: "Seminar or Conference Name", date: "2026-03" },
  ],
};
