import { DanielCVData } from '../types';

export const cvData: DanielCVData = {
  personalInfo: {
    fullName: "Daniel Muiruri Itugi",
    alias: "Daniel Muiruri",
    headline: "Full-Stack Software Developer, Product Designer, Systems Engineer & Elite Video Editor",
    location: "Nairobi, Kenya (P.O Box 187-10400)",
    phone: "+254799655572",
    email: "DMUIRURI2000@GMAIL.COM",
    poBox: "P.O BOX 187-10400, NAIROBI, KENYA",
    wixPortfolio: "https://dmuiruri2000.wixsite.com/daniel-muiruri",
    github: "https://github.com/DANIELMANZRU",
    linkedin: "https://www.linkedin.com/in/dmuiruri2000",
    whatsapp: "https://wa.me/254799655572",
    bioSummary: "Dedicated Computer Science graduate from South Eastern Kenya University with 6+ years of hands-on freelancing and part-time project experience across full-stack web development, product design & UI/UX, brand identity, elite video editing & motion post-production, photography & photo retouching, network engineering, and cloud services.",
    clubRoles: ["SEKU ICT Club Member (2020)", "Hackathons & Peer Collaboration"],
    corePillars: [
      "Software Development & Full-Stack Web",
      "Product Design, UI/UX Prototyping & Figma",
      "Elite Video Editing & Cinematic Post-Production (Premiere Pro, DaVinci Resolve, CapCut)",
      "6+ Years Freelance & Part-Time Projects (Brands, Websites, Media & Video)",
      "Photo Editing (Advanced) & Photography (Practicing)",
      "IT Infrastructure & Network Engineering",
      "Cloud Services (Huawei HCIA Certified)",
      "Graphics Design & Brand Strategy"
    ]
  },
  projects: [
    {
      id: "blood-bank",
      title: "Hospital Blood Donation & Bank System",
      category: "web",
      summary: "A web-based blood donor and inventory tracking portal engineered for Kitui Referral Hospital.",
      description: "Developed a secure web-based system for managing blood bank inventory, tracking donor registrations, matching blood types during emergencies, and maintaining hospital donor logs.",
      clientOrContext: "Kitui Referral Hospital",
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "XAMPP"],
      status: "Completed",
      highlights: [
        "Real-time tracking of blood units and donor availability",
        "Streamlined match notifications for urgent patient transfusions",
        "Secure database audit trails and donor history logs"
      ]
    },
    {
      id: "tamasha-app",
      title: "Tamasha — Mobile Event Management App",
      category: "mobile",
      summary: "Collaborative mobile application designed for seamless event discovery, ticketing, and attendee engagement.",
      description: "Worked as part of a software team to build a mobile solution for event organizers and attendees, featuring schedule browsing, ticket registration, and venue guidance.",
      clientOrContext: "Collaborative Team Project",
      technologies: ["Android Studio", "Java / Kotlin", "APIs", "UI/UX Design"],
      status: "Completed",
      highlights: [
        "Integrated mobile scheduling and push notification stubs",
        "Responsive event detail screens and interactive ticketing flow",
        "Optimized for smooth cross-device performance"
      ]
    },
    {
      id: "isp-website-net",
      title: "Appville ISP Website & Network Management Portal",
      category: "web",
      summary: "Full commercial website and client portal deployed for Appville Limited ISP.",
      description: "Designed, coded, and deployed the official website for an Internet Service Provider (Appville Limited), including service plan displays, customer signups, and service ticket links.",
      clientOrContext: "Appville Limited ISP",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Web Hosting / DNS", "Networking"],
      status: "Deployed",
      link: "https://dmuiruri2000.wixsite.com/daniel-muiruri",
      highlights: [
        "Fully deployed and live in production",
        "Features package options for home & corporate Wi-Fi connections",
        "Directly hooked into Appville customer service workflow"
      ]
    },
    {
      id: "automation-assistant",
      title: "Task Automation & Virtual Assistant",
      category: "systems",
      summary: "Task automation project leveraging Python scripts and APIs to streamline scheduling, document handling, and query responses.",
      description: "Building an automated virtual assistant capable of natural language task routing, scheduling support, document processing, and administrative support.",
      clientOrContext: "Personal Project",
      technologies: ["Python", "REST APIs", "Automation", "NLP"],
      status: "In Development",
      highlights: [
        "Context-aware task handling and information search",
        "Automates administrative tasks and query routing",
        "Built-in API integrations for schedule and file triage"
      ]
    },
    {
      id: "landlord-tenant",
      title: "Landlord & Tenant Property Management System",
      category: "systems",
      summary: "In-house property management application automating rent tracking, tenant logs, and maintenance requests.",
      description: "Built a comprehensive system for property owners and tenants to streamline rental billing, record digital payment timelines, track maintenance tickets, and issue tenant notices.",
      clientOrContext: "Real Estate Client",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      status: "Completed",
      highlights: [
        "Automated rent invoice generation and payment verification",
        "Maintenance request queue with status updates for tenants",
        "Landlord analytics dashboard for vacancy and income tracking"
      ]
    },
    {
      id: "inventory-retail",
      title: "Retail Shop Inventory Management System",
      category: "systems",
      summary: "Desktop/Web inventory and POS control software for local retail operations.",
      description: "Created a stock control system for a retail merchant to keep real-time tabs on stock levels, alert on low inventory, calculate profit margins, and handle point-of-sale receipts.",
      clientOrContext: "Local Retail Merchant",
      technologies: ["PHP", "MySQL", "XAMPP", "HTML/CSS"],
      status: "Completed",
      highlights: [
        "Instant barcodes/SKU tracking and inventory re-order alerts",
        "Daily sales breakdown and revenue reports",
        "Intuitive cashier interface requiring minimal training"
      ]
    },
    {
      id: "insuite-safiris-brand",
      title: "Insuite Tours & Safiris — Brand Identity & Logo",
      category: "branding",
      summary: "Complete visual identity design and logo creation for a premier travel and tour company.",
      description: "Collaborated on designing brand guidelines, custom vector logos, tour banners, and social graphics for Insuite Tours and Safiris.",
      clientOrContext: "Insuite Tours and Safiris",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Strategy"],
      status: "Completed",
      highlights: [
        "Vector logo scalable for print, merchandise, and web banners",
        "Modern African wildlife & safari color palette",
        "Full social media marketing asset suite"
      ]
    },
    {
      id: "home-apparel-photo",
      title: "Home Brand Apparel Photography & Visuals",
      category: "branding",
      summary: "Commercial fashion and trend photography campaign for casual and official wear startup.",
      description: "Directed and shot product and lookbook photography sessions showcasing casual and official apparel for a rising clothing brand.",
      clientOrContext: "Home Apparel Startup",
      technologies: ["Photography", "Adobe Photoshop", "Lighting & Composition"],
      status: "Completed",
      highlights: [
        "Professional studio & outdoor trend lookbook imagery",
        "Enhanced color grading for digital e-commerce catalogs",
        "High-engagement visual content for social marketing"
      ]
    }
  ],
  skills: [
    {
      category: "Programming & Web Development",
      iconName: "Code2",
      items: [
        { name: "PHP", level: "Proficient", notes: "Full-stack web systems, backend APIs, MySQL queries" },
        { name: "HTML5 / CSS3", level: "Advanced", notes: "Responsive UI layouts, Tailwind, custom styling" },
        { name: "JavaScript / TypeScript", level: "Proficient", notes: "Dynamic frontends, DOM manipulation, React ecosystem" },
        { name: "C++", level: "Intermediate", notes: "Object-oriented programming, data structures, algorithms" },
        { name: "Python", level: "Learning", notes: "Web scraping, data analytics, automation APIs" }
      ]
    },
    {
      category: "Cloud, Systems & Databases",
      iconName: "Cloud",
      items: [
        { name: "MySQL Database", level: "Advanced", notes: "Relational schema design, SQL queries, indexing, security" },
        { name: "Huawei HCIA Cloud Computing V4.0", level: "Proficient", notes: "Certified online course completion" },
        { name: "Huawei HCIA Cloud Service V3.0", level: "Proficient", notes: "Cloud infrastructure provisioning & services" },
        { name: "Networking & ISP Infrastructure", level: "Advanced", notes: "Wi-Fi setup, router config, CCTV, 24/7 troubleshooting" }
      ]
    },
    {
      category: "Design, Media & Creative Tools",
      iconName: "Palette",
      items: [
        { name: "Elite Video Editing & Post-Production", level: "Advanced", notes: "Mastery in cinematic cuts, multi-cam pacing, sound design, transitions, b-roll sequencing & dynamic social/commercial formats (Premiere Pro, DaVinci Resolve, CapCut Pro)" },
        { name: "Product Design & UI/UX", level: "Advanced", notes: "Figma prototyping, wireframing, user flows, design systems, interactive web/mobile interfaces" },
        { name: "Photo Editing & Retouching", level: "Advanced", notes: "Master in color grading, retouching, visual composition, skin smoothing, lighting & batch edits (Lightroom, Photoshop, Photoshop Express/Mix, Canva, Snapseed, digital enhancers)" },
        { name: "Photography & Framing", level: "Learning", notes: "Actively practicing camera photography techniques & lighting setups; very strong eye for visual composition & shot direction" },
        { name: "Motion Design & Color Grading", level: "Advanced", notes: "Cinematic LUTs, keyframing, title typography, Foley sound syncing & visual effects" },
        { name: "Adobe Illustrator", level: "Advanced", notes: "Vector logos, brand identity guidelines, marketing banners & visual assets" },
        { name: "Adobe Photoshop", level: "Advanced", notes: "Advanced image editing, e-commerce lookbooks, UI graphics, poster design" },
        { name: "Blender 3D", level: "Learning", notes: "3D modelling & rendering fundamentals" }
      ]
    },
    {
      category: "Tools, Administration & Accounting",
      iconName: "Wrench",
      items: [
        { name: "Git / GitHub & VS Code", level: "Advanced", notes: "Version control, IDE workflow, project management" },
        { name: "XAMPP & Local Servers", level: "Advanced", notes: "Apache, MySQL admin, local test environments" },
        { name: "Android Studio", level: "Intermediate", notes: "Mobile application development" },
        { name: "CPA 1 & 2 (Pursuing CPA 3)", level: "Advanced", notes: "Accounting principles, financial records, billing" },
        { name: "Intuit QuickBooks", level: "Proficient", notes: "Business bookkeeping & financial invoicing" },
        { name: "Virtual Assistant (ALX Certified)", level: "Advanced", notes: "Data entry, client support, inbox & schedule triage" }
      ]
    }
  ],
  experiences: [
    {
      id: "freelance-consultant-6yr",
      title: "Freelance Full-Stack Developer, Product Designer & Elite Video Editor",
      company: "Independent Freelance & Part-Time Projects (Various Brands & Clients)",
      location: "Nairobi, Kenya & Remote",
      period: "2018 – Present (6+ Years)",
      type: "Work Experience",
      responsibilities: [
        "Delivered over 6 years of freelance and part-time projects for various brands, businesses, e-commerce stores, media creators, and individual clients.",
        "Engineered and customized responsive websites, web portals, and client systems tailored to unique brand identities.",
        "Crafted intuitive product UI/UX designs, wireframes, and interactive prototypes in Figma.",
        "Produced elite video editing, commercial reel cuts, motion graphics, audio sync, and cinematic color grading (Premiere Pro, DaVinci Resolve, CapCut Pro).",
        "Executed high-end photo editing, retouching, color grading, and visual enhancement for commercial apparel, brand lookbooks, marketing collateral, and photography.",
        "Mastered photo and video post-production software including Adobe Premiere Pro, DaVinci Resolve, Adobe Lightroom, Adobe Photoshop, Photoshop Express/Mix, Canva, and Snapseed while actively honing camera and lighting techniques.",
        "Managed end-to-end client consultation, requirements scoping, design iterations, hosting deployment, and ongoing site maintenance."
      ],
      keyAchievements: [
        "6+ years of continuous freelance & part-time project delivery across web development, product design, brand identity, elite video editing, and photography retouching.",
        "Consistently produced high-converting digital interfaces, viral short-form video reels, and polished visual brand catalogs."
      ]
    },
    {
      id: "appville-multirole",
      title: "Web Developer, Graphics Designer & Computer Technician",
      company: "Appville Limited",
      location: "Nairobi / Kenya",
      period: "2020 – Present",
      type: "Work Experience",
      responsibilities: [
        "Designing, coding, and maintaining web interfaces and applications to support business goals.",
        "Producing visual assets for company branding, digital marketing campaigns, and UI components.",
        "Troubleshooting hardware and software issues, performing computer repairs, and guaranteeing high system reliability.",
        "Delivering installation, configuration, and ongoing 24/7 support for Wi-Fi, CCTV, and network connectivity systems."
      ],
      keyAchievements: [
        "Successfully built and deployed Appville's official ISP portal.",
        "Provided zero-downtime technical support for corporate and residential client networks."
      ]
    },
    {
      id: "cci-kenya",
      title: "Customer Care Agent (Grubhub Campaign)",
      company: "CCI Kenya",
      location: "Nairobi, Kenya",
      period: "2024 – 2025",
      type: "Work Experience",
      responsibilities: [
        "Managed high-volume customer inquiries, payments, and troubleshooting for the Grubhub campaign.",
        "Discussed payment options and timelines with clients to ensure a smooth, transparent resolution.",
        "Contributed to targeted campaign performance metrics to boost customer satisfaction and retention."
      ]
    },
    {
      id: "nawasco-internship",
      title: "IT Department Intern (9 Months)",
      company: "NAWASCO (Nyeri Water & Sanitation Company)",
      location: "Nyeri, Kenya",
      period: "9 Months",
      type: "Internship",
      responsibilities: [
        "Worked hands-on with NAWASCO's IT systems, servers, and network infrastructure in a fast-paced environment.",
        "Delivered proactive user support and practical IT troubleshooting across multiple operational departments.",
        "Collaborated with cross-functional teams to ensure maximum reliability of municipal IT systems."
      ]
    },
    {
      id: "appville-attachment",
      title: "IT Technician & Officer Attachment (6 Months)",
      company: "Appville ISP Limited",
      location: "Kenya",
      period: "6 Months",
      type: "Attachment",
      responsibilities: [
        "Gained comprehensive experience in IT infrastructure management, incident response, and systems monitoring.",
        "Handled end-user tech support tickets and network maintenance for ISP operations.",
        "Sharpened rapid problem-solving abilities and technical documentation skills."
      ]
    },
    {
      id: "csr-sales-support",
      title: "Customer Service Representative & Sales Support",
      company: "Independent Client Engagements",
      location: "Nairobi, Kenya",
      period: "2020 – Present",
      type: "Work Experience",
      responsibilities: [
        "Engaged in sales and marketing strategies to promote products and foster client relationships.",
        "Cross-selling and upselling company services while providing needs-based guidance to boost customer loyalty.",
        "Guidance on payment methods, billing schedules, and customer inquiry management."
      ]
    }
  ],
  education: [
    {
      id: "seku",
      institution: "South Eastern Kenya University (SEKU)",
      qualification: "Bachelor of Science in Computer Science",
      period: "2019 – 2023",
      status: "Graduated",
      details: "Comprehensive coursework in algorithms, software engineering, databases, networking, and system design. Active member of SEKU ICT Club (2020)."
    },
    {
      id: "alx-se",
      institution: "ALX Software Engineering Program",
      qualification: "Software Engineering Certification",
      period: "2024 – 2025",
      status: "Completed / In Progress",
      details: "Intensive full-stack software engineering program covering low-level system engineering, modern web stacks, and team projects."
    },
    {
      id: "alx-va",
      institution: "ALX Program",
      qualification: "Virtual Assistant Certification",
      period: "Recent",
      status: "Certified",
      details: "Professional training in virtual assistance, executive support, workflow automation, and remote communication."
    },
    {
      id: "huawei-cloud-comp",
      institution: "Huawei Online Academy",
      qualification: "HCIA - Cloud Computing V4.0 Certification",
      period: "Recent",
      status: "Certified",
      details: "Virtualization, cloud computing architecture, storage, and cloud management fundamentals."
    },
    {
      id: "huawei-cloud-serv",
      institution: "Huawei Online Academy",
      qualification: "HCIA - Cloud Service V3.0 Certification",
      period: "Recent",
      status: "Certified",
      details: "Cloud infrastructure provisioning, compute services, network configuration, and cloud security."
    },
    {
      id: "cpa",
      institution: "KASNEB",
      qualification: "Certified Public Accountant (CPA 1, CPA 2)",
      period: "Ongoing",
      status: "Passed CPA 1 & 2 (Pursuing CPA 3)",
      details: "Financial accounting, auditing, taxation, and business management."
    },
    {
      id: "maseno",
      institution: "Maseno School",
      qualification: "Senior High School Education (KCSE)",
      period: "2014 – 2018",
      status: "Graduated",
      details: "Prestigious national secondary school in Kenya with strong focus on science and mathematics."
    },
    {
      id: "st-moses",
      institution: "St. Moses Primary School",
      qualification: "Junior Primary School Education (KCPE)",
      period: "2005 – 2013",
      status: "Graduated"
    }
  ],
  coursework: [
    "Networking Engineering and Management",
    "Customer Care Desk Services & Technical Support",
    "Virtual Assistant & Workflow Automation",
    "Programming – Full-Stack Web & Mobile",
    "Web and Application Development",
    "Data Input & Data Analytics",
    "Graphics Design & Commercial Photography",
    "Elite Video Editing & Motion Post-Production",
    "Academic, Article, and Blog Writing",
    "Sales and Marketing Strategy",
    "Financial Accounting & Billing"
  ],
  activities: {
    hobbies: [
      "Football & Handball",
      "Running & Fitness",
      "Reading Novels & Technology Books",
      "Listening to Audiobooks",
      "Music Listening & Producing Song Beats",
      "Elite Video Editing, Motion & Storytelling",
      "Photography & Visual Arts"
    ],
    clubActivities: [
      "SEKU ICT Club Active Member (2020)",
      "Participated in club coding sessions, events & hackathons",
      "Peer mentoring in programming and web design"
    ]
  },
  references: [
    {
      name: "Mr. Lawrence Githui",
      title: "Head of Appville Limited",
      organization: "Appville Limited ISP",
      phone: "+254 729 859 277 (0729859277)",
      email: "lawrengits@gmail.com",
      address: "P.O. Box 10400, Kenya"
    }
  ]
};
