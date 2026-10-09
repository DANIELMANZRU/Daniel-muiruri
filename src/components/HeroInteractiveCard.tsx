import React, { useState } from 'react';
import { 
  Terminal, 
  Server, 
  ShieldCheck, 
  Network, 
  Cloud, 
  Database, 
  Copy, 
  Check, 
  Activity, 
  Award, 
  Code2, 
  Lock, 
  ArrowUpRight, 
  Cpu, 
  Layers,
  ChevronRight,
} from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface HeroInteractiveCardProps {
  onShowToast: (msg: string) => void;
  onScrollToContact: () => void;
}

type ViewMode = 'dossier' | 'topology' | 'terminal';
type TerminalTab = 'overview' | 'certs' | 'stack';

interface TopologyNode {
  id: string;
  name: string;
  layer: 'cloud' | 'network' | 'app' | 'storage';
  role: string;
  status: 'Operational' | 'Active' | 'Protected';
  metrics: string;
  details: string;
  technologies: string[];
}

const TOPOLOGY_NODES: TopologyNode[] = [
  {
    id: 'cloud-tier',
    name: 'Huawei Cloud VPC',
    layer: 'cloud',
    role: 'Enterprise Cloud Infrastructure',
    status: 'Operational',
    metrics: '99.9% SLA • Isolated Subnets',
    details: 'Dual-zone ECS instances, VPC peering, automated security groups with ingress filtering.',
    technologies: ['Huawei Cloud ECS', 'VPC', 'OBS Object Storage', 'Security Groups'],
  },
  {
    id: 'network-core',
    name: 'MikroTik Gateway',
    layer: 'network',
    role: 'Perimeter Routing & ISP QoS',
    status: 'Active',
    metrics: 'Gigabit Wireguard • VLAN Trunking',
    details: 'Dynamic queue trees for traffic prioritization, CAPsMAN wireless management, and redundant ISP failover.',
    technologies: ['RouterOS v7', 'VLANs', 'Queues QoS', 'Firewall Filter'],
  },
  {
    id: 'app-engine',
    name: 'Application Tier',
    layer: 'app',
    role: 'Full-Stack Services & APIs',
    status: 'Active',
    metrics: '12ms Latency • Nginx Reverse Proxy',
    details: 'Linux Debian runtime running PHP, Node.js/TypeScript microservices, and secure RESTful endpoints.',
    technologies: ['Linux / Ubuntu', 'Nginx', 'React / TypeScript', 'PHP / Python'],
  },
  {
    id: 'storage-dr',
    name: 'Data Pipeline & Warehouse',
    layer: 'storage',
    role: 'ETL Pipelines & Analytical DW',
    status: 'Protected',
    metrics: '5M+ Events/Day • Star Schema',
    details: 'Automated Python ETL pipelines, PostgreSQL/MySQL warehousing, DuckDB analytical engines, and encrypted offsite snapshot backups.',
    technologies: ['Python ETL', 'PostgreSQL / DuckDB', 'Star Schema', 'Parquet / OBS', 'Automated DR'],
  },
];

export const HeroInteractiveCard: React.FC<HeroInteractiveCardProps> = ({
  onShowToast,
  onScrollToContact,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('dossier');
  const [terminalTab, setTerminalTab] = useState<TerminalTab>('overview');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('cloud-tier');
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [isHealthChecking, setIsHealthChecking] = useState(false);
  const [healthStatus, setHealthStatus] = useState<string>('All Systems Operational');

  // 3D perspective tilt effect for the card container
  const [transformStyle, setTransformStyle] = useState('rotateY(-4deg) rotateX(2deg)');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply subtle 3D tilt when not interacting heavily
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransformStyle(`rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.008)`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('rotateY(-4deg) rotateX(2deg) scale(1)');
  };

  const switchMode = (mode: ViewMode) => {
    soundEffects.playTick(700);
    setViewMode(mode);
  };

  const copyExecutiveSummary = () => {
    soundEffects.playTick(900);
    const summary = `CANDIDATE BRIEFING: Daniel Muiruri Itugi
• Roles: Data Engineer, Full-Stack Developer, Huawei HCIA Cloud Solutions & Systems Architect
• Experience: 6+ Years Data Pipelines, Enterprise Systems, ISP Network Engineering & Software
• Core Certifications: Huawei HCIA Cloud (Certified), ALX Software Engineering, CPA 1 & 2
• Status: Available for Immediate High-Impact Roles & Consultancies (Nairobi / Remote)`;

    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    onShowToast('Copied Executive Candidate Briefing to clipboard!');
    setTimeout(() => setCopiedSummary(false), 2400);
  };

  const triggerHealthCheck = () => {
    soundEffects.playPop();
    setIsHealthChecking(true);
    setHealthStatus('Probing Nodes & Endpoints...');

    setTimeout(() => {
      setIsHealthChecking(false);
      setHealthStatus('99.9% Uptime SLA Verified • 12ms');
      onShowToast('Architecture Health Check: 4/4 Nodes Healthy (12ms latency)');
    }, 900);
  };

  const activeNode = TOPOLOGY_NODES.find((n) => n.id === selectedNodeId) || TOPOLOGY_NODES[0];

  return (
    <div
      className="w-full max-w-lg transition-all duration-300 ease-out"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-full bg-[#08090b] rounded-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_30px_rgba(16,185,129,0.12)] overflow-hidden transition-all duration-200 ${
          !isHovered ? 'animate-float3d' : ''
        }`}
        style={{
          transform: transformStyle,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Top Mode Switcher Bar */}
        <div className="bg-[#0e1014] px-3 sm:px-4 py-2.5 border-b border-white/10 flex items-center justify-between gap-2 select-none">
          <div className="flex items-center gap-1.5 bg-white/[0.04] p-1 rounded-lg border border-white/5">
            <button
              id="hero-tab-dossier"
              onClick={() => switchMode('dossier')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono tracking-tight transition-all ${
                viewMode === 'dossier'
                  ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40 shadow-sm'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
              title="Executive Dossier & Impact Metrics"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Dossier</span>
            </button>

            <button
              id="hero-tab-topology"
              onClick={() => switchMode('topology')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono tracking-tight transition-all ${
                viewMode === 'topology'
                  ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/40 shadow-sm'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
              title="Interactive Cloud & Network Topology"
            >
              <Network className="w-3.5 h-3.5 text-sky-400" />
              <span>Topology</span>
            </button>

            <button
              id="hero-tab-terminal"
              onClick={() => switchMode('terminal')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono tracking-tight transition-all ${
                viewMode === 'terminal'
                  ? 'bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/40 shadow-sm'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
              title="Developer JSON Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span>Terminal</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest hidden sm:inline">
              LIVE
            </span>
          </div>
        </div>

        {/* ---------------- MODE 1: EXECUTIVE DOSSIER ---------------- */}
        {viewMode === 'dossier' && (
          <div className="p-4 sm:p-5 space-y-3.5">
            {/* Simple Status & Location Header */}
            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-300 font-medium text-[11px]">
                  Available for High-Impact Roles
                </span>
              </div>
              <span className="text-white/40 text-[10px]">Nairobi • Remote</span>
            </div>

            {/* Clean Key Metrics */}
            <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <div>
                <div className="text-xl font-bold font-mono text-emerald-400">6+ Yrs</div>
                <div className="text-[10px] text-white/60 mt-0.5">Experience</div>
              </div>
              <div className="border-x border-white/10">
                <div className="text-xl font-bold font-mono text-sky-400">99.9%</div>
                <div className="text-[10px] text-white/60 mt-0.5">Uptime SLA</div>
              </div>
              <div>
                <div className="text-xl font-bold font-mono text-amber-300">HCIA</div>
                <div className="text-[10px] text-white/60 mt-0.5">Cloud Certified</div>
              </div>
            </div>

            {/* Core Competency Highlights */}
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-white/80">
                <Database className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <div className="text-[11px] truncate">
                  <strong className="text-white font-medium">Data Engineering:</strong>{' '}
                  <span className="text-white/60">ETL Pipelines, PostgreSQL, DuckDB, Parquet</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-white/80">
                <Cloud className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <div className="text-[11px] truncate">
                  <strong className="text-white font-medium">Cloud &amp; Networks:</strong>{' '}
                  <span className="text-white/60">Huawei Cloud, MikroTik RouterOS, Linux</span>
                </div>
              </div>
            </div>

            {/* Streamlined Action Buttons */}
            <div className="flex items-center gap-2 pt-0.5">
              <button
                id="btn-copy-dossier"
                onClick={copyExecutiveSummary}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/35 text-emerald-300 text-xs font-mono font-medium transition-all"
              >
                {copiedSummary ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Briefing Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copy 1-Click Briefing</span>
                  </>
                )}
              </button>

              <button
                onClick={onScrollToContact}
                className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-mono transition-all"
              >
                <span>Contact</span>
                <ChevronRight className="w-3.5 h-3.5 text-white/50" />
              </button>
            </div>
          </div>
        )}

        {/* ---------------- MODE 2: ARCHITECTURE TOPOLOGY ---------------- */}
        {viewMode === 'topology' && (
          <div className="p-4 sm:p-5 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-white/70">
                <Activity className="w-3.5 h-3.5 text-sky-400" />
                <span>Production Stack Architecture</span>
              </div>
              <button
                onClick={triggerHealthCheck}
                disabled={isHealthChecking}
                className="text-[10px] text-sky-400 hover:text-sky-300 underline font-mono flex items-center gap-1"
              >
                {isHealthChecking ? 'Pinging...' : 'Probe Nodes ↺'}
              </button>
            </div>

            {/* Interactive Topology Graph Flow */}
            <div className="grid grid-cols-2 gap-2">
              {TOPOLOGY_NODES.map((node) => {
                const isSelected = selectedNodeId === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => {
                      soundEffects.playTick(650);
                      setSelectedNodeId(node.id);
                    }}
                    className={`p-2.5 rounded-xl border text-left transition-all relative overflow-hidden ${
                      isSelected
                        ? 'bg-sky-500/15 border-sky-400/50 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      {node.layer === 'cloud' && <Cloud className="w-4 h-4 text-sky-400" />}
                      {node.layer === 'network' && <Network className="w-4 h-4 text-emerald-400" />}
                      {node.layer === 'app' && <Cpu className="w-4 h-4 text-purple-400" />}
                      {node.layer === 'storage' && <Database className="w-4 h-4 text-amber-400" />}
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-white/60">
                        {node.status}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-white truncate">{node.name}</div>
                    <div className="text-[10px] text-white/50 truncate font-mono mt-0.5">{node.metrics}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Deep-Dive Drawer */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 font-mono">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
                  {activeNode.name}
                </span>
                <span className="text-[10px] text-sky-300/80">{activeNode.role}</span>
              </div>
              <p className="text-[11px] text-white/70 leading-relaxed font-sans">
                {activeNode.details}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeNode.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Status footer for topology */}
            <div className="flex items-center justify-between text-[10px] font-mono text-white/40 pt-0.5">
              <span>Status: <strong className="text-emerald-400 font-normal">{healthStatus}</strong></span>
              <span className="text-white/30">Click any tier to inspect</span>
            </div>
          </div>
        )}

        {/* ---------------- MODE 3: DEVELOPER CLI TERMINAL ---------------- */}
        {viewMode === 'terminal' && (
          <div>
            {/* Terminal Tabs */}
            <div className="flex border-b border-white/10 bg-white/[0.02] text-[11px] font-mono">
              <button
                onClick={() => {
                  soundEffects.playTick(600);
                  setTerminalTab('overview');
                }}
                className={`flex-1 py-2 px-3 border-r border-white/10 text-center transition-colors ${
                  terminalTab === 'overview'
                    ? 'bg-white/10 text-emerald-400 font-bold border-b-2 border-b-emerald-400'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                overview.json
              </button>
              <button
                onClick={() => {
                  soundEffects.playTick(600);
                  setTerminalTab('certs');
                }}
                className={`flex-1 py-2 px-3 border-r border-white/10 text-center transition-colors ${
                  terminalTab === 'certs'
                    ? 'bg-white/10 text-emerald-400 font-bold border-b-2 border-b-emerald-400'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                certs.json
              </button>
              <button
                onClick={() => {
                  soundEffects.playTick(600);
                  setTerminalTab('stack');
                }}
                className={`flex-1 py-2 px-3 text-center transition-colors ${
                  terminalTab === 'stack'
                    ? 'bg-white/10 text-emerald-400 font-bold border-b-2 border-b-emerald-400'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                stack.json
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-5 text-[11px] leading-relaxed text-white/90 space-y-3 min-h-[220px] font-mono">
              <div className="text-white/30 text-[10px] flex items-center justify-between pb-1 border-b border-white/5">
                <span>// EXECUTION_LOG: active_session</span>
                <span>PING 12ms</span>
              </div>

              {terminalTab === 'overview' && (
                <div className="space-y-1.5">
                  <p><span className="text-emerald-400">"candidate"</span>: <span className="text-amber-300">"Daniel Muiruri Itugi"</span>,</p>
                  <p><span className="text-emerald-400">"headline"</span>: <span className="text-amber-300">"Data Engineer, Cloud &amp; Full-Stack Architect"</span>,</p>
                  <p><span className="text-emerald-400">"specialization"</span>: <span className="text-amber-300">"ETL Pipelines, Data Warehousing, Cloud &amp; Security"</span>,</p>
                  <p><span className="text-emerald-400">"experience"</span>: <span className="text-amber-300">"6+ Yrs Data Systems, Enterprise Networks &amp; Portals"</span>,</p>
                  <p><span className="text-emerald-400">"status"</span>: <span className="text-emerald-300 font-semibold">"Available for High-Impact Roles"</span></p>
                </div>
              )}

              {terminalTab === 'certs' && (
                <div className="space-y-1.5">
                  <p><span className="text-emerald-400">"huaweiCloud"</span>: <span className="text-sky-300">"HCIA Cloud Computing &amp; Cloud Service (Certified)"</span>,</p>
                  <p><span className="text-emerald-400">"softwareEng"</span>: <span className="text-sky-300">"ALX Software Engineering Certificate"</span>,</p>
                  <p><span className="text-emerald-400">"virtualAssistant"</span>: <span className="text-sky-300">"ALX Virtual Assistant Specialist"</span>,</p>
                  <p><span className="text-emerald-400">"accounting"</span>: <span className="text-sky-300">"KASNEB CPA Sections 1 &amp; 2"</span></p>
                </div>
              )}

              {terminalTab === 'stack' && (
                <div className="space-y-1.5">
                  <p><span className="text-emerald-400">"data engineering"</span>: <span className="text-emerald-300">["Python", "PostgreSQL", "DuckDB", "ETL DAGs", "Star Schema"]</span>,</p>
                  <p><span className="text-emerald-400">"cloud &amp; devops"</span>: <span className="text-purple-300">["Huawei Cloud", "Backup/DR", "Virtualization", "Linux"]</span>,</p>
                  <p><span className="text-emerald-400">"fullstack &amp; APIs"</span>: <span className="text-purple-300">["PHP", "MySQL", "React", "TypeScript", "Python"]</span>,</p>
                  <p><span className="text-emerald-400">"ict &amp; security"</span>: <span className="text-purple-300">["MikroTik", "Linux Server", "Active Directory", "Firewalls"]</span></p>
                </div>
              )}

              {/* Prompt Line */}
              <div className="pt-2 flex items-center gap-2 text-white/50 border-t border-white/10 text-[11px]">
                <span className="text-emerald-400 font-bold">&gt;</span>
                <span className="text-white/80">system.status --check --verified</span>
                <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block ml-auto"></span>
              </div>
            </div>
          </div>
        )}

        {/* Global Card Footer */}
        <div className="bg-black/40 px-4 py-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40 font-mono">
          <span className="flex items-center gap-1.5">
            <Server className="w-3 h-3 text-sky-400" />
            <span>PORT 3000 • NAIROBI/REMOTE</span>
          </span>
          <span className="text-emerald-400/80">Interactive 3D Stage ↺</span>
        </div>
      </div>
    </div>
  );
};
