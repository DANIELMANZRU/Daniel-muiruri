import { DanielCVData } from '../types';

export const cvData: DanielCVData = {
  personalInfo: {
    fullName: "Daniel Muiruri Itugi",
    alias: "Daniel Muiruri",
    headline: "Data Engineer, Full-Stack Software Developer, ICT Infrastructure & Cloud Engineer (Huawei HCIA), Cybersecurity & Space Digital Infrastructure Researcher",
    location: "Nairobi, Kenya (P.O Box 187-10400)",
    phone: "+254799655572",
    email: "DMUIRURI2000@GMAIL.COM",
    poBox: "P.O BOX 187-10400, NAIROBI, KENYA",
    wixPortfolio: "https://dmuiruri2000.wixsite.com/daniel-muiruri",
    github: "https://github.com/DANIELMANZRU",
    linkedin: "https://www.linkedin.com/in/dmuiruri2000",
    whatsapp: "https://wa.me/254799655572",
    bioSummary: "Dedicated Computer Science graduate from South Eastern Kenya University with 6+ years of hands-on experience spanning data engineering (automated ETL/ELT pipelines, dimensional data modeling, star schemas, SQL query tuning & analytical warehousing), enterprise ICT infrastructure management, cybersecurity & risk mitigation, backup and disaster recovery solutions, cloud computing (Huawei HCIA certified in Cloud Computing & Cloud Services), full-stack software development, product UI/UX design, elite video editing, and workflow automation.",
    clubRoles: ["SEKU ICT Club Active Member (2020)", "Innovation Research, Hackathons & Peer Collaboration"],
    corePillars: [
      "Data Engineering, Automated ETL/ELT Pipelines & Analytical Warehousing (Python, SQL, PostgreSQL, DuckDB, Parquet)",
      "Dimensional Modeling, Star/Snowflake Schemas, Data Quality & Governance",
      "Enterprise ICT Infrastructure & Systems Administration",
      "Cybersecurity, Network Segmentation & Threat Risk Management",
      "Backup, Disaster Recovery & High-Availability Architecture",
      "Cloud Services & Virtualization (Huawei HCIA Cloud Certified)",
      "Enterprise Automation, Python Scripting & Systems Integration",
      "Software Development, Full-Stack Web & REST APIs (PHP, MySQL, C++, JS/TS, Python)",
      "Product Design, UI/UX Prototyping & Design Systems (Figma)",
      "Elite Video Editing & Cinematic Post-Production (Premiere Pro, DaVinci Resolve, CapCut Pro)",
      "6+ Years Freelance & Technical Consulting (Cross-Team Collaboration)"
    ]
  },
  projects: [
    {
      id: "telecom-data-warehouse",
      title: "Telecom & ISP Enterprise Data Warehouse & Automated ETL Pipeline",
      category: "data",
      summary: "Automated end-to-end ETL ingestion pipeline and star-schema analytical data warehouse processing multi-gigabyte ISP router syslogs, subscriber bandwidth sessions, and billing logs.",
      description: "Designed and engineered an automated multi-stage ETL data pipeline and columnar data warehouse. Ingests raw syslog streams, RADIUS accounting feeds, and customer billing records; transforms data through idempotent Python/SQL staging steps; validates data schemas; and loads into an optimized dimensional star schema for executive ARPU and NOC bandwidth forecasting dashboards.",
      clientOrContext: "Appville Limited ISP & Enterprise Data Systems",
      technologies: ["Python", "PostgreSQL", "SQL (Window Functions)", "DuckDB", "Apache Airflow (DAGs)", "Pandas / Polars", "Parquet", "ETL / ELT", "Data Modeling"],
      status: "Deployed",
      link: "https://dmuiruri2000.wixsite.com/daniel-muiruri",
      highlights: [
        "Processed 5M+ daily event records with sub-minute batch ingestion and zero data loss buffer",
        "Modeled dimensional star schema reducing complex analytical query latency by 82%",
        "Automated data quality checks, schema evolution validations, and instant anomaly alerting via Slack/Email"
      ],
      caseStudy: {
        problem: "ISP network engineers and finance stakeholders lacked consolidated visibility into subscriber bandwidth consumption, revenue leakage, and peak congestion periods due to siloed MySQL logs and raw flat syslog files.",
        solution: "Constructed an automated Python ETL orchestration pipeline with modular staging, data cleansing, deduplication, and an analytical PostgreSQL data warehouse optimized with partition pruning and covering indexes.",
        outcome: "Reduced NOC diagnostic query latency by 82%, automated daily executive ARPU reporting, and eliminated 12+ hours of manual data extraction each week.",
        metrics: ["5M+ Daily Records Processed", "82% Query Latency Reduction", "100% Automated Ingestion"]
      }
    },
    {
      id: "geospatial-telemetry-pipeline",
      title: "Real-Time Satellite Telemetry & Geospatial Sensor Stream Processing Engine",
      category: "data",
      summary: "Event streaming and analytical raster/vector pipeline ingesting orbital satellite telemetry, environmental IoT metrics, and spatial coordinates.",
      description: "Developed a robust geospatial data engineering pipeline capable of streaming, decoding, and indexing satellite orbital telemetry, IoT ground station sensors, and multispectral raster tiles. Implemented spatial indexing (PostGIS / H3 hexagons), automated raster tiling, and low-latency analytical aggregations.",
      clientOrContext: "Space Digital Infrastructure & Geospatial Research",
      technologies: ["Python", "PostGIS", "GDAL / Rasterio", "GeoPandas", "Event Streams", "Redis", "DuckDB", "Data Pipelines"],
      status: "Completed",
      link: "https://github.com/DANIELMANZRU",
      highlights: [
        "Sub-second event ingestion and spatial indexing for continuous ground station sensor telemetry",
        "Automated raster tiling and geometric reprojection pipelines for multi-band satellite data",
        "Integrated high-speed spatial querying using PostGIS and H3 discrete global grid systems"
      ],
      caseStudy: {
        problem: "Raw satellite imagery tiles and high-frequency ground station telemetry required hours of manual reprojection, coordinate conversion, and spatial alignment before spatial analysis.",
        solution: "Engineered an automated streaming ingestion and transformation pipeline utilizing Python, Rasterio/GDAL, and PostGIS with spatial indexing and automated metadata indexing.",
        outcome: "Cut raster processing turnaround from 4 hours to under 6 minutes and enabled real-time geospatial querying across sensor arrays.",
        metrics: ["97% Faster Spatial Processing", "Sub-second Ingestion", "Automated Raster Reprojection"]
      }
    },
    {
      id: "clinical-datamart-analytics",
      title: "Hospital Blood Bank & Clinical Transfusion Analytics Data Mart",
      category: "data",
      summary: "HIPAA-aligned clinical data mart and automated ETL extraction engine analyzing emergency donor trends, inventory shelf-life, and demand forecasting.",
      description: "Architected an automated data mart and analytical extraction pipeline from the hospital's primary transactional MySQL database. Enforced strict patient anonymization and data masking, created fact and dimension tables for blood units and emergency transfusion requests, and generated automated predictive shortage models.",
      clientOrContext: "Kitui Referral Hospital Clinical Analytics",
      technologies: ["SQL", "Python", "Data Warehousing", "Dimensional Modeling", "Data Anonymization", "ETL", "Tableau / BI Prep"],
      status: "Completed",
      highlights: [
        "Modeled star-schema data mart separating transactional OLTP load from heavy analytical reporting",
        "Built data masking and cryptographic hashing routines ensuring 100% regulatory data privacy compliance",
        "Identified seasonal blood group shortage patterns, boosting emergency inventory preparedness by 40%"
      ],
      caseStudy: {
        problem: "Hospital administration could not forecast rare blood group shortages or analyze historical supply bottlenecks without degrading live emergency transaction performance.",
        solution: "Built an isolated read-replica ETL pipeline that extracts, anonymizes, transforms, and loads clinical records into an optimized analytical data mart.",
        outcome: "Prevented critical supply stockouts with predictive inventory alerts, reduced report generation time by 90%, and guaranteed zero performance impact on transactional systems.",
        metrics: ["40% Better Stockout Preparedness", "90% Faster Analytics", "100% Anonymized Compliance"]
      }
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
      ],
      caseStudy: {
        problem: "Growing ISP subscriber base required automated self-service plan selection, online bandwidth triage, and instant support ticket dispatch without increasing NOC call overhead.",
        solution: "Engineered a high-performance web portal integrated with network routing diagnostics, MikroTik queue monitoring, and customer ticketing queues with role-based access control.",
        outcome: "Delivered 99.9% production availability, reduced manual support triage time by 50%, and scaled customer onboarding seamlessly.",
        metrics: ["99.9% SLA Uptime", "50% Faster Support Triage", "Hundreds of Active Subscribers"]
      }
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
      ],
      caseStudy: {
        problem: "Hospital clinicians faced emergency delays matching compatible blood types due to manual ledger record keeping and lack of real-time inventory visibility.",
        solution: "Built an algorithmic compatibility matching engine, RBAC permission hierarchy for staff, tamper-evident audit logs, and automated daily database snapshot backups.",
        outcome: "Reduced donor-to-patient emergency match turnaround time by 75% and eliminated ledger discrepancy errors with 100% database recovery assurance.",
        metrics: ["75% Match Time Reduction", "Zero Data Discrepancies", "100% Automated Backup Routine"]
      }
    },
    {
      id: "enterprise-cloud-dr",
      title: "Enterprise Multi-Tier Backup & Disaster Recovery Architecture",
      category: "systems",
      summary: "Automated, encrypted hybrid backup and disaster recovery pipeline guaranteeing business continuity and minimal RPO/RTO.",
      description: "Architected a resilient automated backup and disaster recovery framework utilizing Linux automation scripts, GPG/OpenSSL encryption, scheduled rsync syncs, and remote cloud replication to prevent ransomware and hardware loss.",
      clientOrContext: "Enterprise ICT Consulting & SME Clients",
      technologies: ["Linux / Bash", "Huawei Cloud OBS", "OpenSSL Encryption", "Rsync", "Systemd / Cron", "Disaster Recovery"],
      status: "Completed",
      highlights: [
        "Automated encrypted daily snapshots with rotation retention rules (7-day local, 30-day cloud)",
        "Zero-trust credential storage and end-to-end checksum verification on all archive transfers",
        "Tested recovery drills validating RTO < 30 minutes and RPO < 24 hours"
      ],
      caseStudy: {
        problem: "SME clients were vulnerable to silent disk corruption, ransomware threats, and unverified manual USB backups with no documented recovery time objective (RTO).",
        solution: "Engineered an automated bash and systemd daemon script pipeline that creates encrypted database and file snapshots, verifies checksums, and synchronizes to cloud storage with retention rotation.",
        outcome: "Achieved 100% disaster recovery drill success, slashed RTO to under 30 minutes, and completely eliminated manual backup human error.",
        metrics: ["RTO < 30 Minutes", "100% Recovery Verification", "Zero Manual Intervention"]
      }
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
      ],
      caseStudy: {
        problem: "Property managers struggled with payment reconciliation discrepancies, delayed maintenance tickets, and lost paper lease documentation across multi-unit buildings.",
        solution: "Developed a centralized database-driven portal with automated billing calculations, tenant ticket status dispatch, and daily automated database exports.",
        outcome: "Decreased rent reconciliation disputes by 90% and provided instant visibility on occupancy rates and revenue performance.",
        metrics: ["90% Drop in Payment Disputes", "Instant Maintenance Dispatch", "Automated Daily DB Exports"]
      }
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
      ],
      caseStudy: {
        problem: "Repetitive daily workflows like report generation, file archival, and email triage were consuming over 15 hours per week of manual effort.",
        solution: "Built a modular Python-based automation worker with API integrations, scheduled cron triggers, and automated notification alerts.",
        outcome: "Reclaimed 15+ weekly hours of administrative overhead with continuous error logging and fail-safe recovery.",
        metrics: ["15+ Hours Saved Weekly", "Automated Failure Recovery", "Continuous Audit Logs"]
      }
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
      category: "Data Engineering & Analytics Architecture",
      iconName: "Database",
      items: [
        { name: "ETL / ELT Pipeline Architecture & Orchestration", level: "Advanced", notes: "End-to-end data pipelines, scheduled automated DAGs (Airflow/Luigi/Cron), idempotent staging, data validation & retry mechanisms" },
        { name: "Data Warehousing & Dimensional Modeling", level: "Advanced", notes: "Star schema, snowflake schema, fact/dimension table design, SCD (Slowly Changing Dimensions), data marts & OLAP optimizations" },
        { name: "Advanced SQL & Query Optimization", level: "Advanced", notes: "Window functions, complex CTEs, indexing strategies (B-tree, GIN/GiST), EXPLAIN query plan analysis & performance tuning" },
        { name: "Relational & Analytical Engines", level: "Advanced", notes: "PostgreSQL, MySQL, DuckDB, Polars, Pandas, SQLite; columnar storage, partition pruning & Parquet files" },
        { name: "Data Quality, Governance & Security", level: "Proficient", notes: "Schema enforcement, data cleansing, Pydantic validation, cryptographic anonymization, audit trails & regulatory compliance" },
        { name: "Geospatial Data Engineering", level: "Proficient", notes: "PostGIS spatial queries, GeoPandas, GDAL/Rasterio, H3 spatial indexing, satellite raster ingestion pipelines" },
        { name: "Stream Ingestion & Event Processing", level: "Intermediate", notes: "Event streaming concepts, Redis caching/pub-sub, webhook ingestors, Change Data Capture (CDC) & batch micro-loaders" }
      ]
    },
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
        { name: "Python", level: "Proficient", notes: "Data engineering (Pandas, Polars, DuckDB), automated ETL pipelines, geospatial raster analysis & backend REST APIs" },
        { name: "C++", level: "Intermediate", notes: "Object-oriented programming, low-level data structures, algorithmic optimization" }
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
        "Delivered over 6 years of freelance and enterprise consulting projects across data engineering, software development, ICT infrastructure, cybersecurity risk mitigation, brand identity, and elite video post-production.",
        "Engineered end-to-end data engineering pipelines, dimensional data marts, and automated ETL extraction jobs converting raw server logs and transactional records into actionable analytics.",
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
        "Architected automated syslog and bandwidth telemetry ETL processing pipelines, aggregating ISP network metrics into relational and analytical schemas for proactive capacity planning.",
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
    "Data Engineering, Database Management Systems & Relational Warehousing",
    "Big Data Processing, ETL Pipeline Architecture & Dimensional Modeling",
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
