import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Services' | 'Infrastructure' | 'Hiring' | 'Cloud';
  tags: string[];
}


const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Services',
    question: 'What engineering services and solutions does Daniel Muiruri specialize in?',
    answer: 'Daniel provides end-to-end data engineering (automated ETL/ELT pipelines, dimensional star-schema warehousing, SQL optimization, and stream ingestion), full-stack web and mobile engineering (React, TypeScript, PHP, Python), enterprise ICT infrastructure administration, network routing (MikroTik, Cisco), cloud infrastructure architecture (Huawei HCIA Certified in Cloud Computing & Services), and automated backup & disaster recovery pipelines.',
    tags: ['Data Engineering', 'ETL Pipelines', 'Full-Stack', 'React', 'Python', 'Huawei HCIA']
  },
  {
    id: 'faq-data-eng',
    category: 'Services',
    question: 'What data engineering and analytical pipeline capabilities does Daniel offer?',
    answer: 'Daniel architects robust, automated data engineering pipelines that extract, transform, and load high-throughput logs, telemetry, and transactional business records. Using Python, SQL, PostgreSQL, DuckDB, and Parquet columnar formats, he designs dimensional star/snowflake data warehouses, enforces automated schema validation and data quality checks, and optimizes query response times by over 80%.',
    tags: ['Data Engineering', 'ETL / ELT', 'Data Warehousing', 'SQL Tuning', 'DuckDB', 'PostgreSQL']
  },
  {
    id: 'faq-2',
    category: 'Infrastructure',
    question: 'What enterprise cloud and networking certifications does Daniel hold?',
    answer: 'Daniel holds a Bachelor of Science in Computer Science from South Eastern Kenya University (SEKU), Huawei Certified ICT Associate (HCIA) in Cloud Computing and Cloud Services, software engineering credentials from ALX Africa, and Certified Public Accountant (CPA Section 1 & 2) credentials from KASNEB.',
    tags: ['Huawei HCIA', 'Cloud Computing', 'SEKU CS', 'ALX', 'CPA']
  },
  {
    id: 'faq-3',
    category: 'Hiring',
    question: 'Is Daniel available for full-time, contract, or remote engineering roles?',
    answer: 'Yes! Daniel is fully available for full-time employment, contract consultancy, and freelance projects globally via remote work, as well as on-site or hybrid engagements in Nairobi, Kenya. He is ready to collaborate across international time zones with dedicated communication protocols.',
    tags: ['Remote', 'Full-time', 'Contract', 'Nairobi, Kenya', 'Global']
  },
  {
    id: 'faq-4',
    category: 'Infrastructure',
    question: 'How does Daniel approach system security, data backups, and disaster recovery?',
    answer: 'Daniel prioritizes resilience: implementing automated multi-tier backup pipelines (local + offsite cloud replication), zero-trust network segmentation, firewall Access Control Lists (ACLs), role-based permissions (RBAC), and verified recovery point/time objective (RPO/RTO) drills to guarantee 99.9% uptime SLA.',
    tags: ['Cybersecurity', 'Disaster Recovery', 'Backups', 'Uptime SLA']
  },
  {
    id: 'faq-5',
    category: 'Cloud',
    question: 'What is Daniel’s expertise in Huawei Cloud (HCIA) and hybrid infrastructure?',
    answer: 'Daniel is a Huawei Certified ICT Associate (HCIA) in Cloud Computing and Cloud Services. He designs resilient virtual computing topologies using Elastic Cloud Servers (ECS), isolated Virtual Private Cloud (VPC) subnets, automated snapshot backups, and cost-effective Object Storage Service (OBS) lifecycle tiering to connect on-premises physical networking with scalable cloud infrastructure.',
    tags: ['Huawei Cloud', 'HCIA Certified', 'Cloud Architecture', 'ECS / VPC', 'Hybrid Cloud']
  },
  {
    id: 'faq-6',
    category: 'Hiring',
    question: 'How quickly can projects commence, and how can clients request an estimate?',
    answer: 'Engagements can kick off immediately following an initial scope review. You can use the built-in Interactive Scope Estimator on this site to calculate upfront budget and timeline estimates, or reach out directly at DMUIRURI2000@GMAIL.COM or +254 799 655 572.',
    tags: ['Immediate Start', 'Scope Estimator', 'Direct Contact']
  }
];

export const SEOFAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const toggleFAQ = (id: string) => {
    soundEffects.playTick(600);
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = activeCategory === 'All' 
    ? FAQ_DATA 
    : FAQ_DATA.filter(f => f.category === activeCategory);

  return (
    <section id="faq" className="py-20 relative bg-[#060608] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>[08] FREQUENTLY ASKED QUESTIONS</span>
            <span className="h-[1px] flex-1 bg-white/10 hidden sm:block"></span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Frequently Asked Questions &amp; Hiring Overview
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light">
            Clear answers on technical competencies, Huawei HCIA cloud solutions, contract structures, and global availability.
          </p>
        </div>

        {/* Filter Categories */}

        <div className="flex flex-wrap items-center gap-2 mb-8">
          {['All', 'Services', 'Infrastructure', 'Cloud', 'Hiring'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundEffects.playTick(500);
                setActiveCategory(cat);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-black font-semibold shadow-lg shadow-emerald-500/20'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white/[0.04] border-emerald-500/40 shadow-lg shadow-emerald-500/5'
                    : 'bg-white/[0.015] border-white/10 hover:border-white/20 hover:bg-white/[0.025]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/10">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className={`text-sm sm:text-base font-medium transition-colors ${
                      isOpen ? 'text-emerald-400' : 'text-white/90'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 transition-transform ${
                    isOpen ? 'rotate-180 text-emerald-400 bg-emerald-500/10 border-emerald-500/30' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 space-y-3 text-xs sm:text-sm text-white/70 font-light leading-relaxed border-t border-white/5">
                    <p>{faq.answer}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {faq.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-white/50 border border-white/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

