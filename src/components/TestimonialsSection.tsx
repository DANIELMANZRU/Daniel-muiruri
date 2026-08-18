import React from 'react';
import { Star, Quote, Award, CheckCircle2, Building2, Briefcase, Users, ShieldCheck } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  category: string;
  rating: number;
  content: string;
  projectTag: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Samuel K. Ndirangu',
    role: 'Operations Lead & Brand Founder',
    company: 'Apparel & E-Commerce Brand',
    category: 'Full-Stack Web & Brand Photography',
    rating: 5,
    content: 'Daniel built our e-commerce platform from scratch and handled all the product photo color grading and lookbook retouching. His attention to detail and ability to deliver web systems alongside creative branding is exceptional.',
    projectTag: 'Custom Web Portal & Lookbook Retouching'
  },
  {
    id: '2',
    name: 'Grace W. Mutua',
    role: 'IT Infrastructure Manager',
    company: 'Appville Limited',
    category: 'Web Development & Network Engineering',
    rating: 5,
    content: 'An indispensable asset to our technical team. Daniel managed MySQL database migrations, user web interface customization, and hardware network setups with calm competence and high efficiency.',
    projectTag: 'Database Systems & Network Setup'
  },
  {
    id: '3',
    name: 'David O. Otieno',
    role: 'E-Commerce Client',
    company: 'Local Business Solutions',
    category: 'Freelance Full-Stack & UI/UX Design',
    rating: 5,
    content: 'We hired Daniel for a part-time contract to redesign our web app. The Figma prototypes were clean, intuitive, and the converted React code ran blazingly fast. Highly recommended for any web or mobile design project.',
    projectTag: 'UI/UX Redesign & Web App'
  }
];

const METRICS = [
  { value: '6+ Years', label: 'Freelance & Part-Time Experience', icon: Briefcase },
  { value: '20+', label: 'Delivered Websites & Systems', icon: CheckCircle2 },
  { value: '100+', label: 'Photo & Brand Lookbooks Edited', icon: Star },
  { value: '100%', label: 'On-Time Project Delivery', icon: ShieldCheck }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400 flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>Trust & Freelance Impact</span>
          </p>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Client Feedback & <span className="font-serif italic text-purple-300">Milestones</span>
          </h2>
          <p className="text-white/70 text-base font-light leading-relaxed">
            Over 6 years of freelance and part-time project delivery for brands, startups, e-commerce stores, and technical teams.
          </p>
        </div>

        {/* Impact Stat Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
          {METRICS.map((metric, idx) => {
            const IconComp = metric.icon;
            return (
              <div key={idx} className="space-y-2 border-r border-white/5 last:border-r-0 pr-4 sm:pr-6">
                <div className="flex items-center gap-2 text-purple-400">
                  <IconComp className="w-4 h-4" />
                  <span className="text-2xl sm:text-3xl font-light font-mono text-white">{metric.value}</span>
                </div>
                <p className="text-xs text-white/60 font-light">{metric.label}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Header Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/10 group-hover:text-purple-400/40 transition-colors" />
                </div>

                {/* Content */}
                <p className="text-sm text-white/80 font-light leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <div>
                  <h4 className="text-sm font-medium text-white">{item.name}</h4>
                  <p className="text-xs text-white/50">{item.role} • {item.company}</p>
                </div>
                <div className="inline-block px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono text-purple-300">
                  {item.projectTag}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Categories Banner */}
        <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
          <span className="flex items-center gap-2 text-white/70">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Proven Track Record Across Diverse Industries:</span>
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">E-Commerce & Apparel</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">ISP & Telecommunications</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Tech Startups</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Local Enterprise Systems</span>
          </div>
        </div>

      </div>
    </section>
  );
};
