/**
 * Christopher Kenreigh Resume HTML
 * This file contains the HTML resume that opens in a new tab
 */

export const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Christopher Kenreigh – Associate Director, Senior Service Designer</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue: #2563c7;
      --dark: #111111;
      --mid: #444444;
      --light: #666666;
      --rule: #dddddd;
      --bg: #ffffff;
      --sidebar-bg: #f7f8fa;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      font-size: 10.5pt;
      color: var(--dark);
      background: #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 32px 16px;
      min-height: 100vh;
    }

    .page {
      background: var(--bg);
      width: 850px;
      max-width: 100%;
      box-shadow: 0 4px 40px rgba(0,0,0,0.18);
      display: grid;
      grid-template-rows: auto 1fr;
    }

    /* ── HEADER ── */
    header {
      padding: 28px 36px 18px;
      border-bottom: 2px solid var(--rule);
    }
    header h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(20pt, 5vw, 30pt);
      font-weight: 400;
      color: var(--dark);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }
    header .title-line {
      font-size: clamp(9pt, 2.5vw, 11pt);
      font-weight: 700;
      color: var(--blue);
      margin: 3px 0 8px;
      letter-spacing: 0.2px;
    }
    header .contact {
      font-size: 9.5pt;
      color: var(--mid);
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    header .contact a {
      color: var(--blue);
      text-decoration: none;
      font-weight: 500;
    }
    header .contact span { color: var(--rule); }

    /* ── BODY LAYOUT ── */
    .body {
      display: grid;
      grid-template-columns: 1fr 240px;
    }

    /* ── LEFT (Experience) ── */
    .main {
      padding: 24px 36px 32px;
      border-right: 1px solid var(--rule);
    }

    .section-title {
      font-family: 'DM Serif Display', serif;
      font-size: 14pt;
      font-weight: 400;
      color: var(--dark);
      border-bottom: 1.5px solid var(--dark);
      padding-bottom: 4px;
      margin-bottom: 14px;
    }

    .job { margin-bottom: 20px; }

    .job-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .job-company {
      font-size: 10pt;
      font-weight: 500;
      color: var(--blue);
      text-decoration: none;
    }
    .job-company:hover { text-decoration: underline; }

    .job-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin: 2px 0 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .job-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 16px;
      vertical-align: middle;
    }

    .job ul {
      list-style: disc;
      padding-left: 16px;
    }
    .job ul li {
      font-size: 9.5pt;
      color: var(--mid);
      line-height: 1.5;
      margin-bottom: 3px;
    }

    /* ── RIGHT (Sidebar) ── */
    .sidebar {
      background: var(--sidebar-bg);
      padding: 24px 22px 32px;
    }

    .sidebar-section { margin-bottom: 22px; }

    .sidebar .section-title {
      font-size: 12pt;
      border-bottom-color: var(--mid);
    }

    .summary-quote {
      font-size: 9.5pt;
      font-style: italic;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .summary-bullets {
      list-style: disc;
      padding-left: 14px;
    }
    .summary-bullets li {
      font-size: 8.8pt;
      color: var(--mid);
      line-height: 1.55;
      margin-bottom: 3px;
    }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .tag {
      font-size: 8pt;
      font-weight: 500;
      color: var(--blue);
      background: rgba(37,99,199,0.08);
      border-radius: 3px;
      padding: 2px 7px;
    }

    .dot-list {
      list-style: disc;
      padding-left: 14px;
    }
    .dot-list li {
      font-size: 9pt;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 3px;
    }

    /* Education */
    .edu-degree {
      font-size: 9.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .edu-school {
      font-size: 9pt;
      color: var(--blue);
      font-weight: 500;
    }
    .edu-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
    }
    .edu-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 15px;
      vertical-align: middle;
    }

    /* ── MOBILE RESPONSIVE ── */
    @media (max-width: 680px) {
      body {
        padding: 0;
        background: var(--bg);
        align-items: stretch;
      }
      .page {
        width: 100%;
        box-shadow: none;
        border-radius: 0;
      }
      header {
        padding: 20px 18px 14px;
      }
      header h1 {
        font-size: 22pt;
      }
      header .title-line {
        font-size: 9pt;
      }
      header .contact {
        font-size: 9pt;
        gap: 6px;
        row-gap: 4px;
      }
      .body {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
      }
      .main {
        padding: 18px 18px 24px;
        border-right: none;
        border-bottom: 1px solid var(--rule);
        order: 2;
      }
      .sidebar {
        padding: 18px 18px 20px;
        order: 1;
        border-bottom: 2px solid var(--rule);
      }
      .section-title {
        font-size: 13pt;
      }
      .sidebar .section-title {
        font-size: 11pt;
      }
      .job ul li {
        font-size: 9pt;
      }
      .job-meta {
        font-size: 8pt;
        gap: 4px;
      }
      .summary-quote {
        font-size: 9pt;
      }
      .tag {
        font-size: 7.5pt;
      }
    }

    @media (min-width: 681px) and (max-width: 900px) {
      body {
        padding: 16px 8px;
      }
      .page {
        width: 100%;
      }
      header {
        padding: 22px 24px 14px;
      }
      .main {
        padding: 20px 24px 28px;
      }
      .sidebar {
        padding: 20px 16px 28px;
      }
      .body {
        grid-template-columns: 1fr 200px;
      }
    }

    @media print {
      body { background: white; padding: 0; }
      .page { box-shadow: none; width: 100%; }
    }
  </style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <header>
    <h1>Christopher Kenreigh</h1>
    <div class="title-line">Associate Director, Senior Service Designer | GenAI Experience &amp; Agentic Systems | Conversational AI | Enterprise Service Design | Design Team Leadership</div>
    <div class="contact">
      <span style="color: #212121; font-weight:700">480-206-2145</span>
      <span>|</span>
      <a href="mailto:c.kenreigh@gmail.com" style="font-weight:800;">c.kenreigh@gmail.com</a>
      <span>|</span>
      <a href="https://www.linkedin.com/in/kenreigh/" target="_blank">LinkedIn</a>
      <span>|</span>
      <a href="https://www.uxapex.com/portfolioa23" target="_blank">Portfolio</a>
    </div>
  </header>

  <!-- BODY -->
  <div class="body">

    <!-- MAIN EXPERIENCE -->
    <main class="main">
      <h2 class="section-title">Experience</h2>

      <div class="job">
        <div class="job-title">Associate Director, Senior Service Designer (Principal)</div>
        <a class="job-company" href="https://www.plexusworldwide.com" target="_blank">Plexus Worldwide</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2024 – Present
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Led strategic design and delivery of an enterprise-wide agentic AI platform — architecting conversational AI experiences and multi-modal interfaces across 3 international regions, reversing a –17% operating margin to +2% within four months</li>
          <li>Owned the end-to-end service design lifecycle: user research, opportunity identification, journey mapping, service blueprinting, and high-fidelity prototype delivery for complex, AI-powered enterprise experiences serving 200K+ behavioral personas</li>
          <li>Defined GenAI design principles and conversational AI interaction standards — establishing agentic design guardrails ensuring natural, intuitive, human-centered interactions at enterprise scale</li>
          <li>Championed GenAI innovation culture: introduced LLM-driven workflows and AI-assisted prototyping, increasing sprint delivery velocity 35% across a 5-person design team</li>
          <li>Mentored and developed 5 UX and content designers in GenAI design capability, agentic AI prototyping, and independent design ownership</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Service Designer</div>
        <a class="job-company" href="https://www.freeportmcmoran.com" target="_blank">Freeport-McMoRan</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          08/2022 – 10/2023
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Led end-to-end service design for enterprise-grade industrial digital tools, improving operational efficiency 30% through responsive web and mobile service experiences</li>
          <li>Facilitated 10+ user research and service design workshops; translated insights into service blueprints, journey maps, and actionable product requirements across cross-functional teams</li>
          <li>Presented product roadmaps and Agile service design strategies to C-suite, securing approval for 5 major enterprise digital releases</li>
          <li>Architected a scalable MUI React design system adopted across web, iOS, and Android — establishing design governance enabling engineering teams to ship without friction</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Service Designer</div>
        <a class="job-company" href="https://www.opentechalliance.com" target="_blank">OpenTech Alliance</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2021 – 08/2022
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Championed human-centered service design to C-suite, securing budget for 3 new enterprise UX initiatives and elevating organizational design maturity</li>
          <li>Redesigned end-to-end kiosk service experience using human-in-the-loop interaction design principles — boosting task completion 75%</li>
          <li>Delivered compliant user data capture service flows, eliminating regulatory legal risk by 100%</li>
          <li>Applied data-driven insights to optimize enterprise e-commerce service journeys, improving fulfillment 25% through iterative service blueprint refinement</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">UX Design Lead</div>
        <a class="job-company" href="https://www.siemens.com" target="_blank">Siemens</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          07/2020 – 05/2021
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Remote
        </div>
        <ul>
          <li>Led cross-functional collaboration to unify service design standards across 4 simultaneous enterprise product initiatives in a regulated industrial environment</li>
          <li>Produced service design documentation and governance guidelines reducing internal dissemination needs 50%</li>
          <li>Secured executive approval for 2 high-impact enterprise digital service initiatives through strategic stakeholder alignment</li>
          <li>Designed 3D and AutoCAD-integrated UI layouts for complex industrial applications — translating technical requirements into human-centered experiences</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX Designer</div>
        <a class="job-company" href="https://www.glynlyon.com" target="_blank">Glynlyon Inc</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          02/2014 – 04/2019
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Designed WCAG and ADA-compliant inclusive service experiences across multi-platform digital products; applied service design thinking to complex educational user journeys</li>
          <li>Applied data-driven insights and user research to roadmap service improvements increasing ease of use 65%</li>
          <li>Led cross-functional teams through Design Thinking and service design workshops to define user needs and align on product strategy</li>
          <li>Communicated complex interaction concepts and service design rationale to engineering and product stakeholders to ensure technical feasibility</li>
        </ul>
      </div>
    </main>

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <div class="sidebar-section">
        <h2 class="section-title">Summary</h2>
        <p class="summary-quote" style="color: #212121; font-weight:700">"Strategic service design leader with 12+ years delivering enterprise-wide agentic AI, conversational AI, and complex digital solutions — from opportunity identification and service blueprinting through shipped product outcomes that measurably transform business performance."</p>
        <ul class="summary-bullets">
          <li>12+ years end-to-end service design lifecycle leadership</li>
          <li>Shipped agentic AI platform: –17% to +2% operating margin in 4 months</li>
          <li>GenAI design principles, conversational AI, multi-modal interfaces</li>
          <li>Led, mentored, and built GenAI design team capability</li>
          <li>C-suite influence and cross-functional alignment across 5 organizations</li>
          <li>Data-driven insights driving measurable enterprise business value</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Key Achievements</h2>
        <ul class="dot-list">
          <li>Agentic AI platform: –17% → +2% operating margin</li>
          <li>43% checkout abandonment reduction</li>
          <li>$370K labor savings via design system governance</li>
          <li>10+ C-suite initiatives secured across 5 orgs</li>
          <li>100% regulatory compliance — zero legal risk</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Skills</h2>
        <div class="tag-list">
          <span class="tag">Service Design</span>
          <span class="tag">Service Blueprinting</span>
          <span class="tag">Journey Mapping</span>
          <span class="tag">User Research</span>
          <span class="tag">GenAI Design</span>
          <span class="tag">Agentic Systems</span>
          <span class="tag">Conversational AI</span>
          <span class="tag">Multi-Modal Interfaces</span>
          <span class="tag">HITL Design</span>
          <span class="tag">Figma</span>
          <span class="tag">Adobe XD</span>
          <span class="tag">Design Systems</span>
          <span class="tag">Agile / Scrum</span>
          <span class="tag">Stakeholder Influence</span>
          <span class="tag">Design Mentorship</span>
          <span class="tag">Strategic Perspective</span>
          <span class="tag">Data-Driven Insights</span>
          <span class="tag">MUI React</span>
          <span class="tag">Coded Prototypes</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">AI &amp; Emerging Tech</h2>
        <div class="tag-list">
          <span class="tag">Agentic AI Architecture</span>
          <span class="tag">LLM-Based Workflows</span>
          <span class="tag">RAG Systems</span>
          <span class="tag">Multimodal AI</span>
          <span class="tag">Responsible AI</span>
          <span class="tag">Human-Agent Collaboration</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Education</h2>
        <div class="edu-degree">Bachelor of Arts</div>
        <div class="edu-school">The Art Institute of Phoenix</div>
        <div class="edu-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          09/2002 – 09/2005
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ
        </div>
        <div style="margin-top:8px; font-size:8.2pt; color:var(--mid); line-height:1.55;">
          <strong style="color:var(--dark);">Also:</strong> Agile / PM (NASBA 891/1000) · AI Test Automation (100%) · Microsoft Data &amp; Business Analysis (95%) · CompTIA A+ &amp; Network+
        </div>
      </div>

    </aside>
  </div><!-- /body -->
</div><!-- /page -->
</body>
</html>`;

/**
 * Opens the resume HTML in a new browser tab using Blob URL
 */
export function openResumeInNewTab(): void {
  // Create a Blob from the HTML string
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  
  // Generate a blob URL
  const blobURL = URL.createObjectURL(blob);
  
  // Open in new tab
  const newWindow = window.open(blobURL, '_blank');
  
  // Clean up the blob URL after a delay to ensure the page loads
  if (newWindow) {
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 1000);
  }
}
