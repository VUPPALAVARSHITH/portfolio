import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function GraphGuardCaseStudy() {
  return (
    <section className="min-h-screen bg-[#1C1C1C] text-[#E5E5E5] px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Back Navigation */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#B48A3A] mb-10 hover:underline"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold text-[#B48A3A] mb-4">
          GraphGuard – Explainable AML Risk Analysis
        </h1>

        {/* Intro */}
        <p className="leading-relaxed max-w-3xl mb-4">
          GraphGuard is an end-to-end Anti-Money Laundering (AML) risk analysis
          system that prioritizes suspicious bank accounts by modeling financial
          transactions as a graph and applying explainable Graph Neural Networks.
        </p>

        {/* Why it matters */}
        <p className="text-[#B48A3A] font-medium mb-12">
          Built to reflect how real AML analysts investigate risk under extreme
          data imbalance.
        </p>

        {/* Problem Context */}
        <Section title="Problem Context">
          <p>
            Traditional AML systems rely heavily on rule-based logic or tabular
            machine learning models. These approaches struggle to capture
            relational transaction patterns that emerge across interconnected
            accounts in real financial networks.
          </p>

          <p className="mt-4">
            In practice, AML datasets are extremely imbalanced, and investigators
            can only review a limited number of high-risk accounts. As a result,
            optimizing for accuracy alone is insufficient — effective AML systems
            must prioritize explainability and account-level risk ranking.
          </p>
        </Section>

        {/* System Architecture – Flow Version */}
        <Section title="System Architecture">

          <p className="text-sm uppercase tracking-wider text-[#B48A3A] mb-6">
            End-to-End System Flow
          </p>

          <div className="space-y-4 max-w-xl">

            <FlowBlock title="Raw Transaction Data">
              AMLSim dataset containing millions of financial transactions
            </FlowBlock>

            <Arrow />

            <FlowBlock title="Preprocessing & Feature Engineering">
              Cleaning, normalization, and transaction-level feature extraction
            </FlowBlock>

            <Arrow />

            <FlowBlock title="Graph Construction">
              Accounts modeled as nodes and transactions modeled as edges
            </FlowBlock>

            <Arrow />

            <FlowBlock title="GNN Model (GraphSAGE / GAT)">
              Edge-level risk prediction using relational learning
            </FlowBlock>

            <Arrow />

            <FlowBlock title="Risk Aggregation Layer">
              Aggregates transaction risk into account-level prioritization
            </FlowBlock>

            <Arrow />

            <FlowBlock title="Analyst Dashboard">
              Streamlit interface for investigation and risk exploration
            </FlowBlock>

          </div>
        </Section>

        {/* Engineering Decisions */}
        <Section title="Key Engineering Decisions">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Graph-based Modeling:</strong> Used Graph Neural Networks to
              capture relational dependencies between accounts and transactions
              that are not observable in tabular representations.
            </li>
            <li>
              <strong>GraphSAGE & GAT:</strong> Selected GraphSAGE for scalable
              neighborhood aggregation and GAT for attention-based weighting of
              high-impact transactions.
            </li>
            <li>
              <strong>Recall@K Evaluation:</strong> Optimized evaluation around
              Recall@K and account-level metrics to align with analyst
              investigation constraints.
            </li>
            <li>
              <strong>Static Full-Graph Training:</strong> Adopted a static graph
              setup to reflect realistic AML deployment and regulatory
              constraints.
            </li>
          </ul>
        </Section>

        {/* Challenges */}
        <Section title="Challenges & Trade-offs">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Extreme Class Imbalance:</strong> Suspicious transactions
              represented a very small fraction of the dataset, requiring careful
              metric selection and evaluation strategy.
            </li>
            <li>
              <strong>Scalability:</strong> Preprocessing and modeling were scaled
              to approximately 6.9 million transactions under limited compute
              resources.
            </li>
            <li>
              <strong>Explainability vs Performance:</strong> Prioritized
              interpretability and trust over marginal performance gains from
              deeper or more complex models.
            </li>
          </ul>
        </Section>

        {/* Results */}
        <Section title="Outcomes & Results">
          <ul className="list-disc pl-6 space-y-3">
            <li>Achieved ~0.65 ROC-AUC on a highly imbalanced AML dataset</li>
            <li>Successfully ranked high-risk accounts using Recall@K metrics</li>
            <li>
              Delivered an analyst-facing Streamlit dashboard for interactive
              investigation and risk exploration
            </li>
          </ul>
        </Section>

        {/* Learnings */}
        <Section title="Key Learnings">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Graph representations significantly improve modeling of financial
              behavior over traditional tabular approaches
            </li>
            <li>
              Evaluation metrics must align with operational goals rather than
              generic accuracy measures
            </li>
            <li>
              Explainability is a first-class requirement in regulated domains
              such as finance
            </li>
            <li>
              With more time, I would explore temporal GNNs to capture evolving
              transaction behavior across time windows
            </li>
          </ul>
        </Section>

        <div className="mt-16 h-px bg-white/10" />

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://github.com/VUPPALAVARSHITH/GraphGuard-AML"
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

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-14">
      <h2 className="text-2xl font-semibold text-[#B48A3A] mb-4">
        {title}
      </h2>
      <div className="leading-relaxed max-w-3xl">
        {children}
      </div>
    </div>
  );
}

function FlowBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/10 border border-white/10 rounded-xl p-4">
      <h3 className="font-semibold text-[#B48A3A] mb-1">
        {title}
      </h3>
      <p className="text-sm text-[#E5E5E5]">
        {children}
      </p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center text-[#B48A3A] text-xl">
      ↓
    </div>
  );
}

export default GraphGuardCaseStudy;
