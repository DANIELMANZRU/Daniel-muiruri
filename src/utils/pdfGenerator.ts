import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { cvData } from '../data/cvData';

export const generateCvHtml = (): string => {
  const { personalInfo, education, projects, experiences, coursework, references } = cvData;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${personalInfo.fullName} - Curriculum Vitae</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, -apple-system, BlinkMacSystemFont, sans-serif;
      color: #1e293b;
      background: #f1f5f9;
      line-height: 1.4;
      font-size: 9.5pt;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }

    .cv-page {
      width: 210mm;
      min-height: 297mm;
      max-height: 297mm;
      height: 297mm;
      margin: 0 auto 10mm auto;
      background: #ffffff;
      padding: 12mm 14mm 10mm 14mm;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      page-break-after: always;
      break-after: page;
    }

    .page-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    /* Top Header Section */
    .header {
      border-bottom: 2px solid #0f172a;
      padding-bottom: 8px;
      margin-bottom: 2px;
    }
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 3px;
    }
    .name {
      font-size: 20pt;
      font-weight: 800;
      letter-spacing: -0.4px;
      text-transform: uppercase;
      color: #0f172a;
      line-height: 1.05;
    }
    .badge {
      display: inline-block;
      background: #0f766e;
      color: #ffffff;
      font-size: 7pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 2.5px 7px;
      border-radius: 3px;
    }
    .headline {
      font-size: 9.5pt;
      font-weight: 700;
      color: #0d9488;
      margin-top: 2px;
      margin-bottom: 6px;
      line-height: 1.25;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3px 12px;
      font-size: 8pt;
      color: #334155;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 6px 10px;
      border-radius: 3px;
    }
    .contact-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .contact-item strong {
      color: #0f172a;
      font-size: 7.5pt;
      text-transform: uppercase;
      letter-spacing: 0.2px;
    }
    .contact-item a {
      color: #0369a1;
      text-decoration: none;
      font-weight: 600;
    }

    /* Page 2 Continuation Mini-Header */
    .page2-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1.5px solid #0f172a;
      padding-bottom: 6px;
      margin-bottom: 2px;
    }
    .page2-title {
      font-size: 11pt;
      font-weight: 800;
      text-transform: uppercase;
      color: #0f172a;
      letter-spacing: 0.3px;
    }
    .page2-contacts {
      font-size: 7.5pt;
      color: #64748b;
      font-weight: 600;
    }

    /* Standard Section Formatting */
    .section {
      margin-bottom: 0;
    }
    .section-title {
      font-size: 9pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: #0f172a;
      border-bottom: 1.5px solid #cbd5e1;
      padding-bottom: 2px;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .section-title::after {
      content: "";
      height: 2.5px;
      width: 20px;
      background: #0d9488;
      display: inline-block;
    }
    
    .profile-text {
      font-size: 8.5pt;
      color: #334155;
      text-align: justify;
      line-height: 1.38;
    }

    /* Entries List */
    .item-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .item {
      display: flex;
      flex-direction: column;
      gap: 1.5px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 8.8pt;
    }
    .item-title {
      font-weight: 700;
      color: #0f172a;
    }
    .item-institution {
      color: #475569;
      font-weight: 600;
    }
    .item-date {
      font-size: 7.8pt;
      color: #64748b;
      font-weight: 600;
      white-space: nowrap;
    }
    .item-desc {
      font-size: 8pt;
      color: #475569;
      line-height: 1.3;
    }

    .bullet-list {
      margin-top: 1px;
      padding-left: 14px;
      font-size: 8pt;
      color: #334155;
      line-height: 1.32;
    }
    .bullet-list li {
      margin-bottom: 1.5px;
    }
    .bullet-list strong {
      color: #0f172a;
    }

    /* Skills Grid */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5px 8px;
      font-size: 7.8pt;
    }
    .skill-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-left: 3px solid #0d9488;
      padding: 4px 7px;
      border-radius: 2px;
    }
    .skill-title {
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 1px;
      font-size: 8pt;
    }
    .skill-body {
      color: #475569;
      line-height: 1.25;
    }

    /* Coursework Pills */
    .pills-container {
      display: flex;
      flex-wrap: wrap;
      gap: 3.5px;
    }
    .pill {
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      padding: 1.5px 5px;
      border-radius: 2px;
      font-size: 7.5pt;
      color: #1e293b;
      font-weight: 500;
    }

    /* References Box */
    .ref-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6px;
      font-size: 7.8pt;
    }
    .ref-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 5px 7px;
      border-radius: 2px;
    }
    .ref-name {
      font-weight: 700;
      color: #0f172a;
      font-size: 8.2pt;
    }
    .ref-title {
      color: #0d9488;
      font-weight: 600;
      font-size: 7.5pt;
      margin-bottom: 2px;
    }
    .ref-contact {
      color: #475569;
      font-size: 7.2pt;
      line-height: 1.3;
    }

    .page-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 7pt;
      color: #94a3b8;
      padding-top: 5px;
      border-top: 1px solid #e2e8f0;
      margin-top: 6px;
    }

    @media print {
      body {
        background: #ffffff !important;
        color: #000000 !important;
      }
      .cv-page {
        margin: 0 !important;
        box-shadow: none !important;
        page-break-after: always !important;
        break-after: page !important;
      }
    }
  </style>
</head>
<body>

  <!-- ==================== PAGE 1 ==================== -->
  <div class="cv-page" id="cv-page-1">
    <div class="page-content">
      
      <!-- Executive Header -->
      <div class="header">
        <div class="header-top">
          <div>
            <h1 class="name">${personalInfo.fullName}</h1>
            <div class="headline">${personalInfo.headline}</div>
          </div>
          <span class="badge">Verified Candidate</span>
        </div>

        <div class="contact-grid">
          <div class="contact-item">
            <strong>Location:</strong> <span>${personalInfo.location}</span>
          </div>
          <div class="contact-item">
            <strong>Phone:</strong> <span><a href="tel:${personalInfo.phone}">${personalInfo.phone}</a></span>
          </div>
          <div class="contact-item">
            <strong>Email:</strong> <span><a href="mailto:${personalInfo.email}">${personalInfo.email}</a></span>
          </div>
          <div class="contact-item">
            <strong>Portfolio:</strong> <span><a href="${personalInfo.wixPortfolio}" target="_blank">daniel-muiruri.wixsite.com</a></span>
          </div>
          <div class="contact-item">
            <strong>LinkedIn:</strong> <span><a href="${personalInfo.linkedin}" target="_blank">linkedin.com/in/dmuiruri2000</a></span>
          </div>
          <div class="contact-item">
            <strong>GitHub:</strong> <span><a href="${personalInfo.github}" target="_blank">github.com/DANIELMANZRU</a></span>
          </div>
        </div>
      </div>

      <!-- Professional Profile Summary -->
      <div class="section">
        <div class="section-title">Professional Profile & Career Summary</div>
        <p class="profile-text">
          ${personalInfo.bioSummary}
        </p>
      </div>

      <!-- Education & Certifications -->
      <div class="section">
        <div class="section-title">Education & Professional Certifications</div>
        <div class="item-list">
          ${education.map(edu => `
            <div class="item">
              <div class="item-header">
                <div>
                  <span class="item-title">${edu.qualification}</span> — 
                  <span class="item-institution">${edu.institution}</span>
                </div>
                <span class="item-date">${edu.period}</span>
              </div>
              ${edu.details ? `<p class="item-desc">${edu.details}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Technical Domain Matrix & Core Competencies -->
      <div class="section">
        <div class="section-title">Technical Domain Matrix & Core Competencies</div>
        <div class="skills-grid">
          <div class="skill-card">
            <div class="skill-title">ICT Infrastructure & Systems Administration</div>
            <div class="skill-body">Linux/Windows Server Administration, Active Directory, Cisco/MikroTik router configuration, structured cabling (Cat6/Fiber), VLAN segmentation, Wi-Fi networks, 24/7 SLA uptime guarantee.</div>
          </div>

          <div class="skill-card">
            <div class="skill-title">Cloud Virtualization & Disaster Recovery</div>
            <div class="skill-body">Huawei HCIA Cloud Computing V4.0 & Cloud Service V3.0 Certified, FusionCompute VM orchestration, cloud block storage, automated snapshots, RPO/RTO strategies, offsite data replication.</div>
          </div>

          <div class="skill-card">
            <div class="skill-title">Cybersecurity & Risk Management</div>
            <div class="skill-body">Network firewall access control lists (ACLs), role-based access control (RBAC), threat mitigation, security audits, endpoint protection, and automated disaster recovery protocols.</div>
          </div>

          <div class="skill-card">
            <div class="skill-title">Full-Stack Software Engineering & DBs</div>
            <div class="skill-body">PHP, MySQL (database normalization & indexing), React, TypeScript, Tailwind CSS, Python (automation scripts), C++, RESTful API development, and Git version control.</div>
          </div>

          <div class="skill-card">
            <div class="skill-title">Space Digital Tech & Remote Sensing</div>
            <div class="skill-body">Geospatial raster processing (QGIS/GDAL), multispectral satellite image band analysis, computational infrastructure research for fault-tolerant telemetry processing.</div>
          </div>

          <div class="skill-card">
            <div class="skill-title">Creative Media, Video & Accounting</div>
            <div class="skill-body">Adobe Premiere Pro, DaVinci Resolve, CapCut Pro, Photoshop, Lightroom, Illustrator, UI/UX prototyping in Figma, CPA 1 & 2 (accounting/internal financial controls).</div>
          </div>
        </div>
      </div>

    </div>

    <!-- Page 1 Footer -->
    <div class="page-footer">
      <span>${personalInfo.fullName} • Curriculum Vitae</span>
      <span>Page 1 of 2</span>
    </div>
  </div>


  <!-- ==================== PAGE 2 ==================== -->
  <div class="cv-page" id="cv-page-2">
    <div class="page-content">
      
      <!-- Page 2 Continuation Subheader -->
      <div class="page2-header">
        <div class="page2-title">${personalInfo.fullName} — Curriculum Vitae</div>
        <div class="page2-contacts">${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}</div>
      </div>

      <!-- Work Experience -->
      <div class="section">
        <div class="section-title">Work Experience & Professional Engagements</div>
        <div class="item-list">
          ${experiences.map(exp => `
            <div class="item">
              <div class="item-header">
                <div>
                  <span class="item-title">${exp.title}</span> — 
                  <span class="item-institution">${exp.company}</span>
                </div>
                <span class="item-date">${exp.period}</span>
              </div>
              <ul class="bullet-list">
                ${exp.responsibilities.slice(0, 3).map(r => `<li>${r}</li>`).join('')}
              </ul>
              ${exp.technologies && exp.technologies.length > 0 ? `
                <div style="font-size: 8pt; color: #047857; margin-top: 3px; font-family: monospace;">
                  Technologies: ${exp.technologies.join(' • ')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Key Featured Projects -->
      <div class="section">
        <div class="section-title">Key Engineering Projects & Deployed Systems</div>
        <div class="item-list">
          ${projects.slice(0, 4).map(p => `
            <div class="item">
              <div class="item-header">
                <span class="item-title">${p.title} ${p.clientOrContext ? `(${p.clientOrContext})` : ''}</span>
                <span class="item-date">${p.status}</span>
              </div>
              <p class="item-desc">${p.description}</p>
              ${p.highlights && p.highlights.length > 0 ? `
                <ul class="bullet-list">
                  ${p.highlights.slice(0, 2).map(h => `<li>${h}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Coursework -->
      <div class="section">
        <div class="section-title">Academic Coursework & Core Disciplines</div>
        <div class="pills-container">
          ${coursework.map(c => `<span class="pill">✓ ${c}</span>`).join('')}
        </div>
      </div>

      <!-- Verified References -->
      <div class="section">
        <div class="section-title">Professional References</div>
        <div class="ref-grid">
          ${references.map(ref => `
            <div class="ref-card">
              <div class="ref-name">${ref.name}</div>
              <div class="ref-title">${ref.title} • ${ref.organization}</div>
              <div class="ref-contact">
                <strong>Phone:</strong> ${ref.phone}<br>
                <strong>Email:</strong> ${ref.email}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>

    <!-- Page 2 Footer -->
    <div class="page-footer">
      <span>Official CV • Generated from verified portfolio at ${personalInfo.wixPortfolio}</span>
      <span>Page 2 of 2</span>
    </div>
  </div>

</body>
</html>`;
};

/**
 * Opens a dedicated popup / new tab with clean printable CV and triggers print automatically.
 */
export const openPrintWindow = (): boolean => {
  try {
    const htmlContent = generateCvHtml();
    const printWindow = window.open('', '_blank', 'width=900,height=950,menubar=no,toolbar=no,location=no,status=no');
    
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.focus();
          printWindow.print();
        }, 300);
      };
      return true;
    } else {
      printViaIframe(htmlContent);
      return true;
    }
  } catch (err) {
    console.error('Error opening print window:', err);
    return false;
  }
};

const printViaIframe = (html: string) => {
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow?.document;
  if (doc) {
    doc.open();
    doc.write(html);
    doc.close();
    setTimeout(() => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 2000);
    }, 400);
  }
};

/**
 * Generates and downloads a clean, multi-page, high-res PDF file directly to user device.
 * Renders each .cv-page as its own discrete A4 page so NO content is ever sliced across boundaries.
 */
export const downloadPdfDirect = async (): Promise<boolean> => {
  try {
    // Create an offscreen rendered container of the clean executive CV
    const offscreenDiv = document.createElement('div');
    offscreenDiv.id = 'offscreen-pdf-render';
    offscreenDiv.style.position = 'fixed';
    offscreenDiv.style.left = '-9999px';
    offscreenDiv.style.top = '0';
    offscreenDiv.style.width = '794px'; // 210mm at 96 DPI
    offscreenDiv.style.backgroundColor = '#f1f5f9';
    offscreenDiv.style.boxSizing = 'border-box';
    
    // Inject the sanitized CV HTML
    const fullHtml = generateCvHtml();
    const bodyMatch = fullHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const styleMatch = fullHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    
    const styles = styleMatch ? styleMatch[1] : '';
    const bodyContent = bodyMatch ? bodyMatch[1] : fullHtml;

    offscreenDiv.innerHTML = `
      <style>
        ${styles}
        .cv-page {
          width: 794px !important;
          height: 1123px !important;
          min-height: 1123px !important;
          max-height: 1123px !important;
          margin: 0 !important;
          padding: 45px 50px 35px 50px !important;
          box-shadow: none !important;
        }
      </style>
      ${bodyContent}
    `;
    
    document.body.appendChild(offscreenDiv);

    // Get each page element
    const pageElements = offscreenDiv.querySelectorAll('.cv-page');
    if (!pageElements || pageElements.length === 0) {
      throw new Error('No .cv-page elements found');
    }

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
    const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm

    for (let i = 0; i < pageElements.length; i++) {
      const pageEl = pageElements[i] as HTMLElement;
      
      const canvas = await html2canvas(pageEl, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: 794,
        height: 1123,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);

      if (i > 0) {
        pdf.addPage();
      }

      // Fill full A4 page perfectly
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
    }

    // Clean up temporary DOM element immediately
    if (document.body.contains(offscreenDiv)) {
      document.body.removeChild(offscreenDiv);
    }

    pdf.save('Daniel_Muiruri_Official_CV.pdf');
    return true;
  } catch (err) {
    console.error('Error generating direct PDF:', err);
    return openPrintWindow();
  }
};
