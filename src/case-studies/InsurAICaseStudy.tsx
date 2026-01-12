import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function InsurAICaseStudy() {
  return (
    <section className="min-h-screen bg-[#1C1C1C] text-[#E5E5E5] px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#B48A3A] mb-10 hover:underline"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <h1 className="text-4xl font-bold text-[#B48A3A] mb-6">
          InsurAI – Enterprise Insurance Claim Automation
        </h1>

        <p className="leading-relaxed mb-10">
          InsurAI is a full-stack enterprise insurance claim management system
          designed to automate workflows and improve transparency.
        </p>

        <Section title="Problem">
          Manual insurance claim handling leads to delays, errors, and lack of
          visibility for stakeholders.
        </Section>

        <Section title="Architecture">
          React → Spring Boot → JWT Security → MySQL → Audit Logs
        </Section>

        <Section title="Key Features">
          <ul className="list-disc pl-6 space-y-2">
            <li>Role-based access control</li>
            <li>Workflow-driven claim lifecycle</li>
            <li>Secure REST APIs</li>
          </ul>
        </Section>

        <Section title="Outcome">
          Reduced claim processing delays, improved auditability through
          role-based workflows, and enabled scalable enterprise-ready deployment.
        </Section>

        <div className="mt-16 h-px bg-white/10" />

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://github.com/VUPPALAVARSHITH/InsurAI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#B48A3A]/20 text-[#B48A3A] rounded-lg hover:bg-[#B48A3A]/30 transition-all duration-300"
          >
            View Source Code →
          </a>
        </div>

      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-[#B48A3A] mb-4">{title}</h2>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}

export default InsurAICaseStudy;
