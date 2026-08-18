import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PhotoShowcaseSection } from './components/PhotoShowcaseSection';
import { ProjectEstimatorSection } from './components/ProjectEstimatorSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CoverLetterModal } from './components/CoverLetterModal';
import { PrintableCvModal } from './components/PrintableCvModal';
import { CommandPalette } from './components/CommandPalette';
import { Toast } from './components/Toast';

export default function App() {
  const [coverLetterOpen, setCoverLetterOpen] = useState(false);
  const [printCvOpen, setPrintCvOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black">
      
      {/* Top Fixed Header Navbar */}
      <Navbar
        onOpenCoverLetter={() => setCoverLetterOpen(true)}
        onOpenPrintCv={() => setPrintCvOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero Banner */}
        <HeroSection
          onOpenCoverLetter={() => setCoverLetterOpen(true)}
          onOpenPrintCv={() => setPrintCvOpen(true)}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          onShowToast={showToast}
        />

        {/* Section 2: Experience & Work Timeline */}
        <ExperienceSection />

        {/* Section 3: Filterable Projects & Portfolio */}
        <ProjectsSection onShowToast={showToast} />

        {/* Section 4: Skills Matrix & Tools */}
        <SkillsSection />

        {/* Section 5: Education, Certifications & Leadership */}
        <EducationSection />

        {/* Section 6: Photo Retouching & Photography Showcase */}
        <PhotoShowcaseSection />

        {/* Section 8: Interactive Scope Estimator (Feature 2) */}
        <ProjectEstimatorSection />

        {/* Section 9: Contact Form & Availability */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals & Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenCoverLetter={() => setCoverLetterOpen(true)}
        onOpenPrintCv={() => setPrintCvOpen(true)}
        onShowToast={showToast}
      />

      <CoverLetterModal
        isOpen={coverLetterOpen}
        onClose={() => setCoverLetterOpen(false)}
      />

      <PrintableCvModal
        isOpen={printCvOpen}
        onClose={() => setPrintCvOpen(false)}
      />

      {/* Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

    </div>
  );
}
