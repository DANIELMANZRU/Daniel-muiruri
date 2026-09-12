import { DanielCVData } from '../types';

export const cvData: DanielCVData = {
  personalInfo: {
    fullName: "Daniel Muiruri Itugi",
    alias: "Daniel Muiruri",
    headline: "Full-Stack Software Developer, ICT Infrastructure & Cloud Engineer (Huawei HCIA), Cybersecurity & Space Digital Infrastructure Researcher",
    location: "Nairobi, Kenya (P.O Box 187-10400)",
    phone: "+254799655572",
    email: "DMUIRURI2000@GMAIL.COM",
    poBox: "P.O BOX 187-10400, NAIROBI, KENYA",
    wixPortfolio: "https://dmuiruri2000.wixsite.com/daniel-muiruri",
    github: "https://github.com/DANIELMANZRU",
    linkedin: "https://www.linkedin.com/in/dmuiruri2000",
    whatsapp: "https://wa.me/254799655572",
    bioSummary: "Dedicated Computer Science graduate from South Eastern Kenya University with 6+ years of hands-on experience spanning enterprise ICT infrastructure management, cybersecurity & risk mitigation, backup and disaster recovery solutions, cloud computing (Huawei HCIA certified in Cloud Computing & Cloud Services), full-stack software development, product UI/UX design, elite video editing, and applied research in geospatial data, remote sensing, and space digital infrastructure.",
    clubRoles: ["SEKU ICT Club Active Member (2020)", "Innovation Research, Hackathons & Peer Collaboration"],
    corePillars: [
      "Enterprise ICT Infrastructure & Systems Administration",
      "Cybersecurity, Network Segmentation & Threat Risk Management",
      "Backup, Disaster Recovery & High-Availability Architecture",
      "Cloud Services & Virtualization (Huawei HCIA Cloud Certified)",
      "Space Digital Infrastructure, Remote Sensing & Geospatial Research (Active Learning)",
      "Software Development, Full-Stack Web & REST APIs (PHP, MySQL, C++, JS/TS, Python)",
      "Product Design, UI/UX Prototyping & Design Systems (Figma)",
      "Elite Video Editing & Cinematic Post-Production (Premiere Pro, DaVinci Resolve, CapCut Pro)",
      "6+ Years Freelance & Technical Consulting (Cross-Team Collaboration)"
    ]
  },
  projects: [
    {
      id: "geospatial-space-infrastructure",
      title: "Geospatial Remote Sensing & Space Digital Infrastructure Pipeline",
      category: "research",
      summary: "Applied research and computational pipeline exploring satellite imagery processing, geospatial coordinates, and resilient space digital infrastructure telemetry.",
      description: "Conducted applied computational research analyzing multispectral satellite data, digital elevation models, and cloud-hosted geospatial raster pipelines. Explored fault-tolerant networking, automated backup and recovery models for ground station / space digital infrastructure, and low-latency satellite telemetry ingestion.",
      clientOrContext: "Academic Research & Innovation / Open Satellite Data",
      technologies: ["Python", "QGIS / GDAL", "Geospatial Data", "Remote Sensing", "Space Digital Infrastructure", "Cloud Telemetry", "Backup & Recovery"],
      status: "Completed",
      highlights: [
        "Processed multispectral satellite bands for land cover classification and environmental change detection",
        "Designed resilient data ingestion pipelines with automated cloud backup and recovery mechanisms",
        "Researched fault-tolerant networking models for space digital infrastructure and ground telemetry synchronization",
        "Demonstrated innovative problem-solving in handling high-volume earth observation raster datasets"
      ]
    },
    {
      id: "blood-bank",
      title: "Hospital Blood Donation & Emergency Match System",
      category: "web",
      summary: "A secure web-based blood donor, inventory tracking, and emergency matching portal engineered for Kitui Referral Hospital.",
      description: "Developed a mission-critical web-based system for managing blood bank inventory, tracking donor registrations, matching rare blood types during emergencies, maintaining audit trails, and implementing database redundancy.",
      clientOrContext: "Kitui Referral Hospital",
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "XAMPP", "Cybersecurity & Audit Logs", "Data Redundancy"],
      status: "Completed",
      highlights: [
        "Engineered real-time algorithmic matching for emergency blood group availability",
        "Streamlined match notifications for urgent patient transfusions under strict hospital SLAs",
        "Implemented role-based access control (RBAC), secure database audit trails, and automated daily backup routines"
      ]
    },
    {
      id: "tamasha-app",
      title: "Tamasha — Mobile Event Management App",
      category: "mobile",
      summary: "Collaborative mobile application designed for seamless event discovery, ticketing, and attendee engagement.",
      description: "Worked as part of a cross-functional software team to build a mobile solution for event organizers and attendees, featuring schedule browsing, ticket registration, and venue guidance.",
      clientOrContext: "Collaborative Team Project",
      technologies: ["Android Studio", "Java / Kotlin", "APIs", "UI/UX Design", "Team Collaboration"],
      status: "Completed",
      highlights: [
        "Integrated mobile scheduling and push notification stubs",
        "Responsive event detail screens and interactive ticketing flow",
        "Optimized for smooth cross-device performance through active team collaboration"
      ]
    },
    {
      id: "isp-website-net",
      title: "Appville ISP Website & Network Infrastructure Management Portal",
      category: "web",
      summary: "Full commercial website and client portal deployed for Appville Limited ISP with network monitoring hooks.",
      description: "Designed, coded, and deployed the official website for an Internet Service Provider (Appville Limited), including service plan displays, customer signups, ticketing, network routing integration, and bandwidth triage.",
      clientOrContext: "Appville Limited ISP",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "ICT Infrastructure", "Networking / DNS", "Firewall Rules"],
      status: "Deployed",
      link: "https://dmuiruri2000.wixsite.com/daniel-muiruri",
      highlights: [
        "Fully deployed and live in production with 99.9% uptime reliability",
        "Integrated network package options for home & corporate fiber/wireless connectivity",
        "Directly hooked into Appville customer service, ticketing, and network infrastructure management workflows"
      ]
    },
    {
      id: "automation-assistant",
      title: "Task Automation & Enterprise Workflow Assistant",
      category: "systems",
      summary: "Task automation and administrative assistant leveraging Python scripts, APIs, and automated scheduling routines.",
      description: "Building an automated virtual assistant capable of natural language task routing, scheduling support, document processing, and administrative support with built-in backup and recovery.",
      clientOrContext: "Personal Project",
      technologies: ["Python", "REST APIs", "Automation", "NLP", "Risk Management"],
      status: "In Development",
      highlights: [
        "Context-aware task handling and information search with automated error handling",
        "Automates administrative tasks, inbox triage, and query routing",
        "Built-in API integrations for schedule and file backups"
      ]
    },
    {
      id: "landlord-tenant",
      title: "Landlord & Tenant Property Management Enterprise System",
      category: "systems",
      summary: "In-house enterprise property management application automating rent tracking, tenant logs, maintenance requests, and database backups.",
      description: "Built a comprehensive system for property owners and tenants to streamline rental billing, record digital payment timelines, track maintenance tickets, issue tenant notices, and safeguard tenant records with encrypted credentials and database backups.",
      clientOrContext: "Real Estate Client",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "Backup & Recovery"],
      status: "Completed",
      highlights: [
        "Automated rent invoice generation and payment verification with audit logs",
        "Maintenance request queue with status updates for tenants",
        "Landlord analytics dashboard for vacancy, income tracking, and automated database snapshot exports"
      ]
    },
    {
      id: "inventory-retail",
      title: "Retail Shop Inventory & POS Enterprise System",
      category: "systems",
      summary: "Desktop/Web inventory and POS control software with stock reconciliation, access control, and transaction logs.",
      description: "Created a stock control system for a retail merchant to keep real-time tabs on stock levels, alert on low inventory, calculate profit margins, and handle point-of-sale receipts with robust access control.",
      clientOrContext: "Local Retail Merchant",
      technologies: ["PHP", "MySQL", "XAMPP", "HTML/CSS", "Cybersecurity RBAC"],
      status: "Completed",
      highlights: [
        "Instant barcodes/SKU tracking and inventory re-order alerts",
        "Daily sales breakdown and revenue reports with exportable backup copies",
        "Intuitive cashier interface requiring minimal training with granular role permissions"
      ]
    },
    {
      id: "insuite-safiris-brand",
      title: "Insuite Tours & Safiris — Brand Identity & Logo",
      category: "branding",
      summary: "Complete visual identity design and logo creation for a premier travel and tour company.",
      description: "Collaborated on designing brand guidelines, custom vector logos, tour banners, and social graphics for Insuite Tours and Safiris.",
      clientOrContext: "Insuite Tours and Safiris",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Strategy", "Cross-Team Collaboration"],
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
      category: "Cloud, Systems & ICT Infrastructure",
      iconName: "Cloud",
      items: [
        { name: "Huawei HCIA Cloud Computing V4.0", level: "Advanced", notes: "Certified: Virtualization (FusionCompute), cloud storage, computing architecture, VPC routing & disaster recovery" },
        { name: "Huawei HCIA Cloud Service V3.0", level: "Advanced", notes: "Certified: Cloud infrastructure provisioning, compute instances, storage buckets, IAM access control & cloud security" },
        { name: "Enterprise ICT Infrastructure & Systems Admin", level: "Advanced", notes: "Linux & Windows Server administration, Active Directory user provisioning, structured cabling, patch management & 24/7 SLA uptime" },
        { name: "Cybersecurity & Risk Management", level: "Intermediate", notes: "Firewalls, network segmentation, endpoint security, role-based access control (RBAC), vulnerability scanning & risk mitigation (Active Learning)" },
        { name: "Backup, Disaster Recovery & High Availability", level: "Advanced", notes: "Automated snapshot policies, RPO/RTO strategies, offsite data replication, database dump automation & failover testing" },
        { name: "Networking & ISP Infrastructure", level: "Advanced", notes: "Wi-Fi deployment, router/switch configurations, VLANs, DNS/DHCP, CCTV surveillance & 24/7 incident response" },
        { name: "Geospatial Data & Space Digital Infrastructure", level: "Learning", notes: "Applied research in satellite imagery raster analysis (QGIS/GDAL), remote sensing pipelines, GIS mapping & ground station telemetry" },
        { name: "MySQL Database Administration", level: "Advanced", notes: "Relational schema design, SQL optimization, data redundancy, transaction integrity & backup scheduling" }
      ]
    },
    {
      category: "Programming & Software Engineering",
      iconName: "Code2",
      items: [
        { name: "PHP", level: "Proficient", notes: "Full-stack web systems, enterprise backend APIs, MySQL database integration & security" },
        { name: "HTML5 / CSS3 & Tailwind CSS", level: "Advanced", notes: "Responsive UI layouts, modern design systems, fluid responsive typography" },
        { name: "JavaScript / TypeScript", level: "Proficient", notes: "Dynamic frontends, DOM manipulation, React ecosystem, asynchronous APIs" },
        { name: "C++", level: "Intermediate", notes: "Object-oriented programming, low-level data structures, algorithmic optimization" },
        { name: "Python", level: "Learning", notes: "Data analytics, automation scripts, geospatial raster processing & REST APIs" }
      ]
    },
    {
      category: "Design, Media & Creative Tools",
      iconName: "Palette",
      items: [
        { name: "Elite Video Editing & Post-Production", level: "Advanced", notes: "Mastery in cinematic cuts, multi-cam pacing, sound design, transitions, b-roll sequencing & dynamic social/commercial formats (Premiere Pro, DaVinci Resolve, CapCut Pro)" },
        { name: "Product Design & UI/UX", level: "Advanced", notes: "Figma prototyping, wireframing, user flows, design systems, interactive web/mobile interfaces" },
        { name: "Photo Editing & Retouching", level: "Advanced", notes: "Master in color grading, retouching, visual composition, skin smoothing, lighting & batch edits (Lightroom, Photoshop, Photoshop Express/Mix, Canva, Snapseed)" },
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
        { name: "Git / GitHub & VS Code", level: "Advanced", notes: "Version control, branching strategies, IDE workflow, team collaboration" },
        { name: "XAMPP & Local Servers", level: "Advanced", notes: "Apache, MySQL admin, local test environments & staging servers" },
        { name: "Android Studio", level: "Intermediate", notes: "Mobile application development, SDK tools, emulation" },
        { name: "CPA 1 & 2 (Pursuing CPA 3)", level: "Advanced", notes: "Financial accounting, auditing principles, internal controls & risk management" },
        { name: "Intuit QuickBooks", level: "Proficient", notes: "Business bookkeeping, financial invoicing & ledger reconciliation" },
        { name: "Virtual Assistant (ALX Certified)", level: "Advanced", notes: "Workflow automation, executive support, data entry & schedule triage" }
      ]
    }
  ],
  experiences: [
    {
      id: "freelance-consultant-6yr",
      title: "Freelance Full-Stack Developer, Systems Consultant & Elite Video Editor",
      company: "Independent Freelance & Enterprise Technical Projects",
      location: "Nairobi, Kenya & Remote",
      period: "2018 – Present (6+ Years)",
      type: "Work Experience",
      responsibilities: [
        "Delivered over 6 years of freelance and enterprise consulting projects across software development, ICT infrastructure, cybersecurity risk mitigation, brand identity, and elite video post-production.",
        "Engineered secure, responsive web portals and database systems with integrated backup and disaster recovery mechanisms.",
        "Assisted clients with ICT infrastructure setup, router configurations, Wi-Fi security hardening, and endpoint troubleshooting.",
        "Conducted applied research and computational workflows in geospatial data analysis, automation scripts, and space digital infrastructure modeling.",
        "Produced elite video editing, commercial reel cuts, motion graphics, audio sync, and cinematic color grading (Premiere Pro, DaVinci Resolve, CapCut Pro).",
        "Executed high-end photo editing, retouching, color grading, and visual enhancement for commercial apparel and brand lookbooks.",
        "Managed end-to-end client consultation, requirements scoping, cross-team collaboration, hosting deployment, and SLA maintenance."
      ],
      keyAchievements: [
        "6+ years of continuous technical delivery across software development, ICT infrastructure management, and creative media.",
        "Maintained 99.9% uptime on deployed client portals through structured backup and recovery protocols."
      ]
    },
    {
      id: "appville-multirole",
      title: "Web Developer, ICT Systems Technician & Network Officer",
      company: "Appville Limited ISP",
      location: "Nairobi / Kenya",
      period: "2020 – Present",
      type: "Work Experience",
      responsibilities: [
        "Managing enterprise ICT infrastructure, structured cabling, router/switch configurations, and Wi-Fi networks for corporate and residential ISP clients.",
        "Enforcing cybersecurity best practices, firewall access rules, and network segmentation to mitigate security risks and prevent unauthorized intrusions.",
        "Configuring automated backup and disaster recovery schedules for critical web assets, client database records, and router configuration files.",
        "Designing, deploying, and maintaining web interfaces, client billing portals, and network diagnostic tools to support business operations.",
        "Delivering rapid 24/7 technical troubleshooting and hardware maintenance to ensure maximum SLA uptime and client satisfaction."
      ],
      keyAchievements: [
        "Engineered and deployed Appville's official ISP customer and network management portal.",
        "Maintained zero-downtime reliability across client fiber and wireless installations through proactive infrastructure monitoring."
      ]
    },
    {
      id: "cci-kenya",
      title: "Customer Care Agent & Technical Support (Grubhub Campaign)",
      company: "CCI Kenya",
      location: "Nairobi, Kenya",
      period: "2024 – 2025",
      type: "Work Experience",
      responsibilities: [
        "Managed high-volume customer inquiries, account verifications, payment disputes, and technical troubleshooting for the Grubhub campaign.",
        "Maintained strict data security, user confidentiality, and risk management protocols during payment processing.",
        "Collaborated with international cross-functional support teams to exceed client SLAs and customer satisfaction targets."
      ]
    },
    {
      id: "nawasco-internship",
      title: "IT & Enterprise Systems Intern (9 Months)",
      company: "NAWASCO (Nyeri Water & Sanitation Company)",
      location: "Nyeri, Kenya",
      period: "9 Months",
      type: "Internship",
      responsibilities: [
        "Worked hands-on with NAWASCO's enterprise ICT infrastructure, server rooms, database systems, and municipal network hardware.",
        "Participated in enterprise system administration, Active Directory user account provisioning, patch updates, and hardware servicing.",
        "Executed routine database backup routines and verified data disaster recovery readiness across municipal departments.",
        "Provided proactive tier-1 and tier-2 IT support to over 100+ staff members, ensuring smooth day-to-day utility operations."
      ]
    },
    {
      id: "appville-attachment",
      title: "ICT Infrastructure & Network Operations Attachment (6 Months)",
      company: "Appville ISP Limited",
      location: "Kenya",
      period: "6 Months",
      type: "Attachment",
      responsibilities: [
        "Gained comprehensive experience in ISP infrastructure management, network monitoring, and rapid incident response.",
        "Assisted in configuring MikroTik routers, wireless access points, VLANs, and firewall filtering rules.",
        "Conducted routine system health audits, data backup checks, and technical documentation for field installations.",
        "Fostered strong cross-team collaboration with field technicians, network engineers, and customer support staff."
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
        "Engaged in sales, marketing, and client account management strategies to build long-term business partnerships.",
        "Provided technical guidance on IT service packages, hardware procurement, and billing schedules.",
        "Delivered prompt customer communication and resolution tracking."
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
      details: "Comprehensive coursework in algorithms, computer networks, database systems, enterprise software architecture, cybersecurity fundamentals, and geospatial computing. Active member of SEKU ICT Club (2020) and innovation research groups."
    },
    {
      id: "huawei-cloud-comp",
      institution: "Huawei Online Academy",
      qualification: "HCIA - Cloud Computing V4.0 Certification",
      period: "Recent",
      status: "Certified",
      details: "Comprehensive certification in cloud virtualization architecture (FusionCompute), compute virtualization, storage virtualization (FusionStorage), virtual network routing, and enterprise disaster recovery."
    },
    {
      id: "huawei-cloud-serv",
      institution: "Huawei Online Academy",
      qualification: "HCIA - Cloud Service V3.0 Certification",
      period: "Recent",
      status: "Certified",
      details: "Certified mastery in cloud infrastructure provisioning, Elastic Cloud Servers (ECS), Virtual Private Clouds (VPC), IAM security controls, cloud storage resilience, and enterprise cloud architecture."
    },
    {
      id: "alx-se",
      institution: "ALX Software Engineering Program",
      qualification: "Software Engineering Certification",
      period: "2024 – 2025",
      status: "Completed / In Progress",
      details: "Intensive full-stack software engineering program covering low-level systems engineering, C programming, Unix shell, modern web stacks, and cross-functional team projects."
    },
    {
      id: "alx-va",
      institution: "ALX Program",
      qualification: "Virtual Assistant Certification",
      period: "Recent",
      status: "Certified",
      details: "Professional training in virtual assistance, executive support, workflow automation, and remote team collaboration."
    },
    {
      id: "cpa",
      institution: "KASNEB",
      qualification: "Certified Public Accountant (CPA 1, CPA 2)",
      period: "Ongoing",
      status: "Passed CPA 1 & 2 (Pursuing CPA 3)",
      details: "Financial accounting, internal auditing, taxation, financial risk management, and business controls."
    },
    {
      id: "maseno",
      institution: "Maseno School",
      qualification: "Senior High School Education (KCSE)",
      period: "2014 – 2018",
      status: "Graduated",
      details: "Prestigious national secondary school in Kenya with strong focus on science, mathematics, and leadership."
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
    "Enterprise ICT Infrastructure Management & Systems Administration",
    "Cybersecurity, Network Segmentation & Threat Risk Management",
    "Backup, Disaster Recovery & High-Availability Architecture",
    "Huawei HCIA Cloud Computing & Cloud Service Architecture",
    "Networking Engineering, VLANs, Routers & ISP Infrastructure",
    "Geospatial Data, Remote Sensing & Space Digital Infrastructure (Research)",
    "Full-Stack Web, REST APIs & Mobile Application Development",
    "Research Methodology, Problem Solving & Applied Innovation",
    "Cross-Functional Team Collaboration & Agile Project Delivery",
    "Customer Care Desk Services & Technical Support",
    "Elite Video Editing & Cinematic Post-Production",
    "Financial Accounting, Internal Controls & Risk Assessment (CPA)"
  ],
  activities: {
    hobbies: [
      "Space Technologies, Remote Sensing & Astronomy Exploration",
      "Cybersecurity Research, CTFs & Tech Experimentation",
      "Elite Video Editing, Motion Design & Visual Storytelling",
      "Photography & Urban Cityscape Framing",
      "Football & Handball",
      "Running & Fitness",
      "Reading Technology Books & Audiobooks",
      "Music Production & Audio Engineering"
    ],
    clubActivities: [
      "SEKU ICT Club Active Member (2020)",
      "Collaborated on innovative technical projects, software hackathons, and research coding sessions",
      "Conducted peer mentoring in programming, web design, and network fundamentals",
      "Active participant in tech community forums and innovation challenges"
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
