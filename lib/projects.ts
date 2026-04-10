export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: "AI/LLM" | "Web3" | "SaaS" | "Tool" | "API" | "Automation" | "Chrome Ext.";
  tags: string[];
  highlightTags: string[];
  coverGradient: string;
  coverLabel: string;
  badgeLabel: string;
  badgeVariant: "ai" | "web3" | "saas" | "tool" | "api" | "automation";
  liveUrl?: string;
  featured?: boolean;
  images: string[];
  features: string[];
  techStack: { name: string; icon?: string }[];
  challenges: string;
  role: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "MISTER AI",
    slug: "mister-ai",
    description: "AI platform with resume generation, blog creation, image processing, PDF simplification and quiz features.",
    longDescription: "Mister AI is an all-in-one productivity suite powered by cutting-edge LLMs. It streamlines creative and professional workflows by offering a centralized interface for document manipulation, content generation, and intelligent analysis. The platform focuses on accessibility and speed, allowing users to transform complex data into actionable insights in seconds.",
    category: "AI/LLM",
    tags: ["Next.js", "Node.js", "MongoDB", "OpenAI"],
    highlightTags: ["Next.js", "OpenAI"],
    coverGradient: "from-[#1a1030] to-[#0e0a1f]",
    coverLabel: "MISTER AI",
    badgeLabel: "AI",
    badgeVariant: "ai",
    liveUrl: "https://www.misterai.io/",
    featured: true,
    images: ["/mister.PNG"],
    features: [
      "AI-powered Resume Builder with industry-specific templates",
      "Automated Blog & Content Generation with SEO optimization",
      "Advanced Image Processing (Upscaling, Background Removal)",
      "PDF Simplification and Semantic Search within documents",
      "Interactive Quiz Generation from provided study materials"
    ],
    techStack: [
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "OpenAI API" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" }
    ],
    challenges: "The primary challenge was managing the latency of LLM responses while maintaining a smooth user experience. This was solved by implementing streaming responses via Server-Sent Events (SSE) and heavy client-side optimistic UI updates.",
    role: "Lead Full Stack Developer. Responsible for the entire architecture, from the Next.js frontend to the Node.js microservices handling AI processing."
  },
  {
    id: 2,
    title: "Minotaura",
    slug: "minotaura",
    description: "AI business intelligence platform — query and visualize data from files and databases using natural language.",
    longDescription: "Minotaura transforms how businesses interact with their data. By bridging the gap between natural language and structured databases, it allows non-technical stakeholders to perform complex data analysis without knowing SQL or Python. The platform handles everything from data ingestion to dynamic chart generation.",
    category: "AI/LLM",
    tags: ["NestJS", "LangChain.js", "OpenAI", "NLP"],
    highlightTags: ["NestJS", "LangChain.js"],
    coverGradient: "from-[#120d22] to-[#0a0814]",
    coverLabel: "MINOTAURA",
    badgeLabel: "BACKEND",
    badgeVariant: "ai",
    featured: true,
    images: [],
    features: [
      "Natural Language to SQL conversion with high accuracy",
      "Dynamic dashboard generation based on query results",
      "Support for multi-format data sources (CSV, Postgres, MongoDB)",
      "Automated data insights and anomaly detection",
      "Collaborative workspaces for data teams"
    ],
    techStack: [
      { name: "NestJS" },
      { name: "LangChain.js" },
      { name: "OpenAI" },
      { name: "PostgreSQL" },
      { name: "Chart.js" }
    ],
    challenges: "Handling complex joins and nested queries through LLMs was the biggest hurdle. We implemented a multi-stage prompt engineering pipeline that validates schemas before generating code, reducing query errors by 45%.",
    role: "Backend Architecture Designer. Focused on the LangChain integration and the prompt engineering strategies that power the core engine."
  },
  {
    id: 3,
    title: "LiberSwap",
    slug: "liberswap",
    description: "Web3 dApp with wallet connectivity, crypto transactions and NFT minting via smart contracts.",
    longDescription: "LiberSwap is a decentralized finance portal designed to simplify the Web3 experience. It provides a clean, user-centric interface for managing assets across multiple chains, participating in liquidity pools, and interacting with custom NFT collections.",
    category: "Web3",
    tags: ["React.js", "Web3.js", "Ethereum", "NFT"],
    highlightTags: ["Web3.js", "Ethereum"],
    coverGradient: "from-[#0a1a2a] to-[#0a0f1a]",
    coverLabel: "LIBERSWAP",
    badgeLabel: "WEB3",
    badgeVariant: "web3",
    liveUrl: "https://liberswap-omega.vercel.app/",
    images: ["/lib1.PNG"],
    features: [
      "Seamless WalletConnect and MetaMask integration",
      "Real-time token swap functionality with low slippage",
      "NFT Minting dashboard with IPFS integration",
      "On-chain transaction history and asset tracking",
      "Gas-optimized smart contract architecture"
    ],
    techStack: [
      { name: "React.js" },
      { name: "Web3.js" },
      { name: "Solidity" },
      { name: "Ethers.js" },
      { name: "Hardhat" }
    ],
    challenges: "Ensuring cross-browser wallet connectivity was inconsistent. We built a custom wrapper around Ethers.js to handle edge cases in various browser environments and mobile wallets.",
    role: "DApp Developer. Developed the frontend integration layer and co-authored the Solidity smart contracts for the NFT marketplace."
  },
  {
    id: 4,
    title: "ODRS",
    slug: "odrs",
    description: "Full-stack dispute resolution system with digital case management and resolution tracking.",
    longDescription: "Online Dispute Resolution System (ODRS) is a legal-tech platform tailored for modern mediation. It digitizes the entire lifecycle of a dispute, from initial filing to final settlement, providing a secure and transparent environment for all parties involved.",
    category: "SaaS",
    tags: ["Next.js", "Node.js", "MongoDB", "MUI"],
    highlightTags: ["Next.js", "MongoDB"],
    coverGradient: "from-[#0d1f18] to-[#0a0f0e]",
    coverLabel: "ODRS",
    badgeLabel: "SAAS",
    badgeVariant: "saas",
    liveUrl: "https://odrs-dev.petalwebdev.com/",
    images: ["/op2.PNG", "/p1.PNG"],
    features: [
      "Digital case filing and automated documentation",
      "Real-time chat and video conferencing for mediation",
      "Evidence locker with end-to-end encryption",
      "Automated notification system for deadlines",
      "Comprehensive case analytics for administrators"
    ],
    techStack: [
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Socket.io" },
      { name: "MUI" }
    ],
    challenges: "Maintaining data privacy and security for sensitive legal documents. We implemented AWS S3 with KMS encryption and rigorous JWT-based access control.",
    role: "Full Stack Developer. Owned the case management module and the integration of real-time communication features using Socket.io."
  },
  {
    id: 5,
    title: "Rahtaak",
    slug: "rahtaak",
    description: "Rental marketplace connecting landlords and tenants — listings, search and booking management.",
    longDescription: "Rahtaak is a localized rental platform designed to eliminate the hurdles of finding and leasing property. It provides a robust search engine with map integration, allowing users to find properties in their desired areas with ease.",
    category: "SaaS",
    tags: ["Next.js", "Express.js", "MongoDB"],
    highlightTags: ["Next.js", "Express.js"],
    coverGradient: "from-[#1f1008] to-[#120a04]",
    coverLabel: "RAHTAAK",
    badgeLabel: "SAAS",
    badgeVariant: "saas",
    liveUrl: "https://raahtak-frontend.vercel.app/",
    images: ["/rah1.PNG"],
    features: [
      "Property listing management for landlords",
      "Advanced filtering (price, location, amenities)",
      "Integrated map search for visual property browsing",
      "Direct messaging system between tenants and owners",
      "Automated lease agreement generation"
    ],
    techStack: [
      { name: "Next.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Google Maps API" }
    ],
    challenges: "Building a performant search engine that could handle geospatial queries efficiently. We leveraged MongoDB's 2dsphere indexes to provide lightning-fast results.",
    role: "Full Stack Developer. Focused on building the property search engine and the responsive landlord dashboard."
  },
  {
    id: 6,
    title: "YT For Work",
    slug: "yt-for-work",
    description: "Chrome extension that filters YouTube videos by user field and selected time period for productivity.",
    longDescription: "YT For Work is a productivity tool for professionals and students. It modifies the YouTube interface to hide distractive elements and allows users to whitelist specific educational or work-related channels during work hours.",
    category: "Chrome Ext.",
    tags: ["Chrome API", "JavaScript", "Extension"],
    highlightTags: ["Chrome API"],
    coverGradient: "from-[#1a0f10] to-[#100808]",
    coverLabel: "YT WORK",
    badgeLabel: "CHROME",
    badgeVariant: "tool",
    liveUrl: "https://chromewebstore.google.com/detail/edigbnpjhcinedejipldnhjhniebfblb?utm_source=item-share-cb",
    images: [],
    features: [
      "Distraction-free mode for YouTube",
      "Custom Whitelists for educational channels",
      "Time-based productivity schedules",
      "Search filtering by category and date",
      "Lightweight and optimized for low memory usage"
    ],
    techStack: [
      { name: "JavaScript" },
      { name: "Chrome API" },
      { name: "CSS Selection" }
    ],
    challenges: "Keeping up with YouTube's frequent DOM changes that broke the extension's selectors. We implemented a robust MutationObserver system to adapt to layout changes dynamically.",
    role: "Sole Creator. Navigated the Chrome Extension Manifest V3 transition and optimized the DOM manipulation logic for seamless integration."
  },
  {
    id: 7,
    title: "Home Workout App",
    slug: "home-workout",
    description: "Scalable backend APIs for workout data management, authentication and future React Native integration.",
    longDescription: "A headless API service providing the foundation for fitness applications. It handles complex workout routines, progress tracking, and user nutrition data, all accessible via a documented REST API.",
    category: "API",
    tags: ["Node.js", "Express", "TypeScript", "MongoDB"],
    highlightTags: ["TypeScript", "Express"],
    coverGradient: "from-[#101a10] to-[#080f08]",
    coverLabel: "WORKOUT",
    badgeLabel: "API",
    badgeVariant: "api",
    images: [],
    features: [
      "Custom workout routine builder",
      "Automated calorie and macro-nutrient calculator",
      "Secure JWT authentication and password hashing",
      "Comprehensive progress history and chart data",
      "API Documentation with Swagger"
    ],
    techStack: [
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Jest" }
    ],
    challenges: "Designing a schema that could handle highly variable workout structures (sets, reps, time-based, AMRAP). We adopted a flexible NoSQL approach that allows for infinite variations without database migrations.",
    role: "Backend Architect. Designed the REST API and the underlying MongoDB schemas using Mongoose and TypeScript for type safety."
  },
  {
    id: 8,
    title: "N8N Automation Suite",
    slug: "n8n-automation",
    description: "AI chatbot for lead generation, email automation and RAG-based apps built with n8n workflows.",
    longDescription: "An automation powerhouse focusing on low-code solutions. It integrates various SaaS tools with AI agents to automate customer support, lead qualification, and internal reporting workflows.",
    category: "Automation",
    tags: ["n8n", "RAG", "AI Chatbot", "Email"],
    highlightTags: ["n8n", "AI Chatbot"],
    coverGradient: "from-[#0f1a10] to-[#080f08]",
    coverLabel: "N8N",
    badgeLabel: "AUTOMATION",
    badgeVariant: "automation",
    images: [],
    features: [
      "24/7 AI Chatbot with knowledge base (RAG)",
      "Automated Email prospecting and follow-up",
      "CRM sync between Salesforce and Google Sheets",
      "Slack notifications for critical system events",
      "Automated financial report generation"
    ],
    techStack: [
      { name: "n8n" },
      { name: "Python" },
      { name: "OpenAI API" },
      { name: "Postman" }
    ],
    challenges: "Syncing asynchronous events from multiple third-party APIs without data loss. We implemented robust error-handling retry loops and logging dashboards within n8n.",
    role: "Automation Engineer. Designed and deployed the entire workflow library and successfully integrated AI RAG systems into customer communication channels."
  },
  {
    id: 9,
    title: "Petalnex HRMS",
    slug: "petalnex-hrms",
    description: "Full HR management system — user management, attendance, leaves, tasks, meetings and notifications.",
    longDescription: "Petalnex HRMS is a comprehensive enterprise solution for workforce management. It centralizes all HR operations, reducing administrative overhead and providing managers with real-time employee data.",
    category: "SaaS",
    tags: ["MERN", "Next.js", "MongoDB", "JWT"],
    highlightTags: ["Next.js", "JWT"],
    coverGradient: "from-[#130d22] to-[#0d0918]",
    coverLabel: "HRMS",
    badgeLabel: "SAAS",
    badgeVariant: "saas",
    featured: true,
    images: [],
    features: [
      "Automated attendance tracking with QR/Biometric support",
      "Employee leave management and approval workflows",
      "Task assignment and performance tracking",
      "Meeting scheduler with Google Calendar sync",
      "Real-time announcements and notifications"
    ],
    techStack: [
      { name: "MongoDB" },
      { name: "Express" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Next.js" }
    ],
    challenges: "Building a complex permission system (RBAC) that could handle different access levels for HR, Managers, and Employees. We built a custom middleware layer that validates permissions for every API endpoint.",
    role: "Full Stack Engineer. Developed the core dashboard and the leave management module, ensuring a high-performance experience for over 100+ concurrent users."
  }
];
