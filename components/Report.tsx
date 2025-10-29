import React, { forwardRef } from 'react';
import SectionTitle from './SectionTitle';

const ReportSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-200 mb-3">{title}</h3>
        <div className="text-slate-400 space-y-3">{children}</div>
    </div>
);

const Report = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="report" className="py-24 fade-up-on-scroll">
      <div className="container mx-auto">
        <SectionTitle number="4" title="Internship Report" className="mb-12" />
        <div className="max-w-4xl mx-auto bg-zinc-900/50 p-8 rounded-lg border border-zinc-800">
            
            <div className="text-center mb-8 border-b border-zinc-800 pb-6">
                <h1 className="text-3xl font-bold text-slate-100">Internship Completion Report</h1>
                <p className="text-slate-400 mt-2">AICTE OIB-SIP Internship Program</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
                <div><strong className="text-slate-300 block">Name:</strong> <span className="font-signature text-xl text-slate-100">Mahima Kushwaha</span></div>
                <div><strong className="text-slate-300 block">Company:</strong> Oasis Infobyte</div>
                <div><strong className="text-slate-300 block">Role:</strong> Web Development and Designing Intern</div>
                <div><strong className="text-slate-300 block">Duration:</strong> 05 August 2025 - 05 September 2025</div>
            </div>

            <ReportSection title="Company Overview">
                <p>Oasis Infobyte is a technology services company that provides a range of software solutions and internship opportunities. The company focuses on fostering practical skills in students through its AICTE-approved virtual internship programs, like the OIB-SIP, which connect academic knowledge with real-world project experience.</p>
            </ReportSection>

            <ReportSection title="Internship Role">
                <p>As a Web Development and Designing Intern, my primary responsibility was to complete the "Responsive Portfolio and Blog Website" project. This involved designing, developing, and deploying a professional, single-page application from scratch. The role required a strong understanding of front-end technologies to build a user-friendly and aesthetically pleasing website with sections for About, Projects, Blog, and Contact.</p>
            </ReportSection>

            <ReportSection title="Skills Gained">
                <p>This one-month internship was instrumental in enhancing my technical and soft skills. Key competencies developed include:</p>
                <ul className="list-disc list-inside pl-4">
                    <li><strong>Front-End Design:</strong> Improved ability to translate design concepts into functional user interfaces using HTML, CSS, and JavaScript.</li>
                    <li><strong>Responsiveness:</strong> Gained proficiency in creating layouts that adapt seamlessly across various devices, from desktops to mobile phones.</li>
                    <li><strong>Debugging:</strong> Enhanced problem-solving skills by identifying and fixing CSS alignment issues and JavaScript logic errors.</li>
                    <li><strong>Project Presentation:</strong> Learned to structure and document a project effectively using version control with Git and GitHub.</li>
                    <li><strong>Tool Proficiency:</strong> Became more efficient with development tools such as VS Code and browser developer tools.</li>
                </ul>
            </ReportSection>

            <ReportSection title="Challenges Faced">
                <p>The project presented several technical challenges that provided valuable learning opportunities. The primary hurdles were ensuring consistent mobile responsiveness across all components, resolving complex CSS alignment and stacking issues, and optimizing images for faster page load times without sacrificing quality.</p>
            </ReportSection>

            <ReportSection title="Contributions">
                <p>My main contribution was the successful completion of the "Responsive Portfolio and Blog Website" project. The final deliverable is a fully functional, well-documented, and visually appealing website. Additionally, I actively participated in feedback sessions, sharing insights from my development process.</p>
            </ReportSection>

            <ReportSection title="Conclusion & Recommendations">
                <p>The internship at Oasis Infobyte was a highly rewarding experience that significantly strengthened my front-end development skills. To further enhance the program, I recommend that Oasis Infobyte consider extending the project duration to allow for more in-depth exploration of advanced topics.</p>
            </ReportSection>
        </div>
      </div>
    </section>
  );
});

Report.displayName = 'Report';

export default Report;