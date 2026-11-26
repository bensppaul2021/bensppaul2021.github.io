export type ContentItem = {
  id: string;
  kind: "profile" | "role" | "award" | "project" | "education" | "skill" | "other";
  title: string;
  when?: string;
  org?: string;
  tags: string[];
  contribution: string;
  body: string;
  url: string;
};

export const SITE = {
  name: "Soumya Paul",
  title: "Senior LLM Expert · Embraceable Technology",
  location: "Munich, Germany",
  website: "https://bensppaul2021.github.io/",
  peopleUrl: "https://bensppaul2021.github.io/people.html",
  cvMd: "https://bensppaul2021.github.io/cv.md",
  cvPdf: "https://bensppaul2021.github.io/Soumya_Paul_CV.pdf",
  llmsTxt: "https://bensppaul2021.github.io/llms.txt",
  email: "soumyapaulofficial@gmail.com",
  linkedin: "https://www.linkedin.com/in/soumya-paul-1636a68a/",
  github: "https://github.com/bensppaul2021",
  patent: "https://register.epo.org/application?number=EP21213382&tab=main",
};

export const OVERVIEW = `# Soumya Paul

${SITE.title}
${SITE.location}

Strategy and AI leader who turns emerging technology into commercial outcomes. Advises executives on where to invest, build vs. buy, and how to scale AI across the business. Runs teams and programmes end-to-end, from strategy through delivery, with hands-on technical depth as the differentiator.

## Strongest evidence
- Invented **MSR (Multi-Space Reasoning)** — best-in-class accuracy with no fine-tuning; selected for “AI in the Alps” alongside 40 leading AI scientists incl. Sepp Hochreiter
- Built **e1** (deductive-reasoning AI); IONOS Partner Award — AI Project of the Year 2025
- +25% user engagement from an AI conversational OS platform (Avemio)
- +35% delivery-efficiency gain across projects
- European patent **EP 21213382** on a core AI method
- Led 5+ engineers; scaled via GCP & Predibase

## Contact
- Email: ${SITE.email}
- LinkedIn: ${SITE.linkedin}
- GitHub: ${SITE.github}
- Human CV: ${SITE.peopleUrl}
- PDF: ${SITE.cvPdf}
- Markdown: ${SITE.cvMd}

## How to use this MCP
1. Call \`overview\` first.
2. For a vacancy, call \`find_evidence_for_role\` with the job description.
3. For a factual claim, call \`get_profile\`, \`search_content\`, or \`read_content\` and cite the returned source URL.
4. Do not invent qualifications. If a requirement is not covered, say so and suggest asking him directly.
`;

export const PROFILE_MD = `# Soumya Paul — CV

Munich, Germany · ${SITE.email} · [LinkedIn](${SITE.linkedin}) · [GitHub](${SITE.github})

Strategy and AI leader who turns emerging technology into commercial outcomes. Advises executives on where to invest, build vs. buy, and how to scale AI across the business. Runs teams and programmes end-to-end, from strategy through delivery, with hands-on technical depth as the differentiator. Holds European patent EP 21213382 on a core AI method.

- **+25%** user-engagement lift from a new AI platform
- **+35%** delivery-efficiency gain across projects
- **5+** engineers led; scaled via GCP & Predibase

## Work experience

**Senior LLM Expert** — Embraceable Technology GmbH, Karlsruhe (02/2025 – present)
- Advised leadership on AI investment, build-vs-buy and infrastructure strategy, shaping the AI portfolio roadmap
- Led a programme portfolio from strategy through delivery, owning the AI roadmap and leading five engineers
- Developed e1 (deductive-reasoning AI); IONOS Partner Award "AI Project of the Year 2025"
- Invented MSR (Multi-Space Reasoning): best-in-class accuracy with no fine-tuning; selected for "AI in the Alps"
- Built and mentored a high-performing applied-AI team

**Senior AI Consultant & Tech Lead** — Avemio AG, Munich (03/2023 – 02/2025)
- +25% user engagement with an AI-based conversational OS platform for enterprise users
- Tech Lead on a public-grant Generative AI initiative
- Partnerships with Google Cloud and Predibase for enterprise scale
- Built the AI infrastructure and cross-functional team from zero

**Applied AI Engineer** — EpiQMAX GmbH, Munich (05/2021 – 11/2022)
- Interpretable cloud AI platform for biomarker-driven drug discovery; owned the MSI data platform
- Led AI product design; European patent EP 21213382

**Earlier experience** (2011 – 2020)
Junior Research Scientist, Max Planck Institute of Psychiatry (explainable AI, +15% prediction accuracy) · Computer Vision & AI Engineer, Raytrix · Deep-Learning Research Intern, KUKA Robotics (+30% grasp success) & Fortiss · research roles at TU Chemnitz, Leibniz-Institut für Wissensmedien, MPI for Biological Cybernetics, Mercedes-Benz R&D, GEOMAR, Indian Statistical Institute (Junior Research Fellow)

## Education & training
- B.Tech, Instrumentation & Control Engineering — West Bengal University of Technology, Kolkata (2007–2011), First Class
- IMPRS-TP Graduate Programme — PhD track, Max Planck Institute of Psychiatry

## Core skills
- Strategy & leadership: AI strategy, build-vs-buy & investment advisory, technical roadmapping, team leadership & mentorship, stakeholder management, cross-functional delivery
- Technical: LLMs & GenAI, RAG & fine-tuning, Python / PyTorch, MLOps & cloud (AWS, GCP), computer vision, vector DBs
- AI-assisted development: backend & frontend (Claude Code, Cursor, OpenCode)

## Awards & honours
- MSR research selected for "AI in the Alps", alongside 40 leading AI scientists incl. Sepp Hochreiter
- IONOS Partner Award — AI Project of the Year 2025 (e1)
- 1st Prize, RE ESG Data Science Hackathon
- Selected, Cross AI Hack, BMW & Siemens AI Lab
- Travel Grant, IEEE VR 2015, France

## Languages & more
- Languages: Bengali (native), English (C1), German (B1)
- Publications: IEEE VR Doctoral Consortium, IEEE VR 2015 (Arles) · Oral presentation, VCSS 2015 (Rostock)
- Volunteering: Machine Learning Mentor, ReDI School, Munich (since 03/2025)

Source: ${SITE.peopleUrl}
`;

export const CONTENT: ContentItem[] = [
  {
    id: "role-embraceable",
    kind: "role",
    title: "Senior LLM Expert",
    when: "02/2025 – present",
    org: "Embraceable Technology GmbH, Karlsruhe",
    tags: ["llm", "genai", "strategy", "leadership", "msr", "e1", "roadmap", "mentorship"],
    contribution:
      "Owns AI investment advice, the AI roadmap, and a five-engineer applied-AI team; invented MSR and shipped e1.",
    body: `Senior LLM Expert at Embraceable Technology GmbH (Karlsruhe), 02/2025 – present.

- Advised leadership on AI investment, build-vs-buy and infrastructure strategy, shaping the AI portfolio roadmap
- Led a programme portfolio from strategy through delivery, owning the AI roadmap and leading five engineers
- Developed e1 (deductive-reasoning AI); IONOS Partner Award "AI Project of the Year 2025"
- Invented MSR (Multi-Space Reasoning): best-in-class accuracy with no fine-tuning; selected for "AI in the Alps"
- Built and mentored a high-performing applied-AI team, setting engineering and review standards for production`,
    url: SITE.peopleUrl + "#cv",
  },
  {
    id: "project-msr",
    kind: "project",
    title: "MSR — Multi-Space Reasoning",
    when: "2025",
    org: "Embraceable Technology",
    tags: ["msr", "reasoning", "architecture", "no-fine-tuning", "accuracy", "deployment-cost"],
    contribution:
      "Invented the architecture; reaches best-in-class accuracy without fine-tuning; presented at AI in the Alps.",
    body: `Multi-Space Reasoning (MSR) is a reasoning architecture invented by Soumya Paul. It matches best-in-class accuracy without fine-tuning, which cuts deployment cost and effort. Selected for “AI in the Alps” and presented alongside 40 leading AI scientists including Sepp Hochreiter.`,
    url: SITE.peopleUrl + "#ch-built",
  },
  {
    id: "project-e1",
    kind: "project",
    title: "e1 — deductive-reasoning AI",
    when: "2025",
    org: "Embraceable Technology",
    tags: ["e1", "deductive", "reasoning", "award", "ionos"],
    contribution: "Developed e1; won IONOS Partner Award for AI Project of the Year 2025.",
    body: `e1 is a deductive-reasoning AI developed at Embraceable Technology. It won the IONOS Partner Award for “AI Project of the Year 2025”.`,
    url: "https://www.ionos.de/newsroom/news/gemeinsam-erfolgreich-ionos-verleiht-partner-awards-2025/",
  },
  {
    id: "role-avemio",
    kind: "role",
    title: "Senior AI Consultant & Tech Lead",
    when: "03/2023 – 02/2025",
    org: "Avemio AG, Munich",
    tags: ["consultant", "tech-lead", "conversational-ai", "gcp", "predibase", "enterprise", "platform"],
    contribution:
      "Launched an enterprise conversational OS (+25% engagement), led a public-grant GenAI programme, and built the AI infra/team from zero with GCP and Predibase partnerships.",
    body: `Senior AI Consultant & Tech Lead at Avemio AG (Munich), 03/2023 – 02/2025.

- Grew user engagement 25% by launching an AI-based conversational OS platform for enterprise users
- Promoted to Tech Lead on a public-grant Generative AI initiative, owning delivery across the programme
- Formed partnerships with Google Cloud and Predibase to scale the platform to enterprise deployment
- Built the AI infrastructure and cross-functional team from zero, creating a platform the company could take to market`,
    url: SITE.peopleUrl + "#cv",
  },
  {
    id: "role-epiqmax",
    kind: "role",
    title: "Applied AI Engineer",
    when: "05/2021 – 11/2022",
    org: "EpiQMAX GmbH, Munich",
    tags: ["drug-discovery", "interpretable-ai", "patent", "msi", "biotech", "cloud"],
    contribution:
      "Delivered an interpretable cloud AI platform for biomarker-driven drug discovery and secured European patent EP 21213382.",
    body: `Applied AI Engineer at EpiQMAX GmbH (Munich), 05/2021 – 11/2022.

- Delivered an interpretable cloud AI platform for biomarker-driven drug discovery, owning the MSI data platform
- Led AI product design and secured European patent EP 21213382 on the platform’s core AI method
- Patent register: ${SITE.patent}`,
    url: SITE.patent,
  },
  {
    id: "role-earlier",
    kind: "role",
    title: "Earlier research and engineering roles",
    when: "2011 – 2020",
    org: "Max Planck, KUKA, Raytrix, Fortiss, Mercedes-Benz R&D and others",
    tags: ["research", "computer-vision", "robotics", "explainable-ai", "deep-learning"],
    contribution:
      "Nearly a decade of research/engineering across top European labs, including explainable AI (+15% accuracy) and robot grasp success (+30%).",
    body: `Earlier experience (2011 – 2020):
- Junior Research Scientist, Max Planck Institute of Psychiatry — explainable-AI framework, +15% prediction accuracy
- Computer Vision & AI Engineer, Raytrix
- Deep-Learning Research Intern, KUKA Robotics (+30% robot-grasp success) & Fortiss
- Research roles at TU Chemnitz, Leibniz-Institut für Wissensmedien, Max Planck Institute for Biological Cybernetics, Mercedes-Benz R&D, GEOMAR, and Indian Statistical Institute (Junior Research Fellow)`,
    url: SITE.peopleUrl + "#ch-research",
  },
  {
    id: "education",
    kind: "education",
    title: "Education & training",
    when: "2007 – 2011 / PhD track",
    org: "West Bengal University of Technology · Max Planck Institute of Psychiatry",
    tags: ["education", "btech", "imprs", "phd-track"],
    contribution: "First Class B.Tech; selected for competitive IMPRS-TP PhD track.",
    body: `- B.Tech, Instrumentation & Control Engineering — West Bengal University of Technology, Kolkata (2007–2011), First Class
- IMPRS-TP Graduate Programme — PhD track, Max Planck Institute of Psychiatry`,
    url: SITE.peopleUrl,
  },
  {
    id: "skills",
    kind: "skill",
    title: "Core skills",
    tags: ["llm", "rag", "pytorch", "mlops", "aws", "gcp", "strategy", "leadership", "cursor", "claude"],
    contribution: "Combines AI strategy/leadership with hands-on LLM, MLOps and full-stack agent-assisted development.",
    body: `- Strategy & leadership: AI strategy, build-vs-buy & investment advisory, technical roadmapping, team leadership & mentorship, stakeholder management, cross-functional delivery
- Technical: LLMs & GenAI, RAG & fine-tuning, Python / PyTorch, MLOps & cloud (AWS, GCP), computer vision, vector DBs
- AI-assisted development: backend & frontend (Claude Code, Cursor, OpenCode)`,
    url: SITE.peopleUrl + "#skills",
  },
  {
    id: "awards",
    kind: "award",
    title: "Awards & honours",
    tags: ["award", "ionos", "ai-in-the-alps", "hackathon", "ieee"],
    contribution: "Recognition spanning industrial AI awards, research selection, and early career grants.",
    body: `- MSR research selected for "AI in the Alps", alongside 40 leading AI scientists incl. Sepp Hochreiter
- IONOS Partner Award — AI Project of the Year 2025 (e1)
- 1st Prize, RE ESG Data Science Hackathon
- Selected, Cross AI Hack, BMW & Siemens AI Lab
- Travel Grant, IEEE VR 2015, France`,
    url: SITE.peopleUrl,
  },
  {
    id: "languages",
    kind: "other",
    title: "Languages, publications, volunteering",
    tags: ["languages", "publications", "mentoring", "redi"],
    contribution: "Publishes and mentors; works in Bengali, English (C1) and German (B1).",
    body: `- Languages: Bengali (native), English (C1), German (B1)
- Publications: IEEE VR Doctoral Consortium, IEEE VR 2015 (Arles) · Oral presentation, VCSS 2015 (Rostock)
- Volunteering: Machine Learning Mentor, ReDI School, Munich (since 03/2025)`,
    url: SITE.peopleUrl,
  },
];

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+#.\-/\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1);
}

export function scoreItem(item: ContentItem, query: string): number {
  const q = tokenize(query);
  if (!q.length) return 0;
  const hay = tokenize(
    [item.title, item.org ?? "", item.when ?? "", item.contribution, item.body, item.tags.join(" ")].join(" "),
  );
  const set = new Set(hay);
  let score = 0;
  for (const term of q) {
    if (set.has(term)) score += 3;
    else if (hay.some((h) => h.includes(term) || term.includes(h))) score += 1;
    if (item.tags.includes(term)) score += 4;
    if (item.title.toLowerCase().includes(term)) score += 2;
  }
  return score;
}

export function searchContent(query: string, limit = 6, kind?: ContentItem["kind"]) {
  return CONTENT.filter((item) => (kind ? item.kind === kind : true))
    .map((item) => ({ item, score: scoreItem(item, query) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item, score }) => ({ ...item, score }));
}

export function findById(id: string): ContentItem | undefined {
  const key = id.trim().toLowerCase();
  return CONTENT.find((c) => c.id === key || c.id.replace(/^role-|^project-/, "") === key);
}

export function formatItem(item: ContentItem): string {
  return [
    `# ${item.title}`,
    item.when || item.org ? `_${[item.when, item.org].filter(Boolean).join(" · ")}_` : "",
    "",
    `**Contribution:** ${item.contribution}`,
    "",
    item.body,
    "",
    `Source: ${item.url}`,
    `id: ${item.id}`,
  ]
    .filter(Boolean)
    .join("\n");
}
