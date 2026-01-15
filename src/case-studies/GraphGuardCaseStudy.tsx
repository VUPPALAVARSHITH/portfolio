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
          GraphGuard – AML Risk Analysis Platform
        </h1>

        {/* Intro */}
        <p className="leading-relaxed max-w-3xl mb-4">
          GraphGuard is an end-to-end Anti-Money Laundering (AML) risk analysis
          platform that began as a graph-based machine learning research project
          and evolved into a full-stack, analyst-facing investigation system.
          Financial transactions are modeled as a graph, risk is computed
          offline using Graph Neural Networks, and results are operationalized
          through scalable backend services and an interactive web interface.
        </p>

        <p className="text-[#B48A3A] font-medium mb-12">
          Built to reflect how real AML analysts prioritize and investigate risk
          under extreme class imbalance.
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
            must prioritize explainability, ranking quality, and analyst trust.
          </p>
        </Section>

        {/* System Architecture */}
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

            <FlowBlock title="Investigation Platform">
              PostgreSQL-backed datastore, Spring Boot APIs, and a React-based
              analyst dashboard for account exploration and transaction flow
              analysis
            </FlowBlock>
          </div>
        </Section>

        {/* System Evolution */}
        <Section title="System Evolution (ML → Full-Stack)">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Graph Neural Networks (GraphSAGE + GAT) are trained offline to
              compute edge-level and account-level AML risk scores.
            </li>
            <li>
              Precomputed risk outputs are stored in PostgreSQL to decouple
              machine learning inference from online investigation workloads.
            </li>
            <li>
              Spring Boot REST APIs expose ranked accounts, transaction context,
              and investigation views using pagination and indexed queries.
            </li>
            <li>
              A React + TypeScript dashboard enables analysts to explore risky
              accounts, inspect transaction flows, and understand model-driven
              explanations.
            </li>
          </ul>
        </Section>

        {/* Engineering Decisions */}
        <Section title="Key Engineering Decisions">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Graph-based Modeling:</strong> Used Graph Neural Networks
              to capture relational dependencies not observable in tabular data.
            </li>
            <li>
              <strong>GraphSAGE & GAT:</strong> Selected for scalable neighborhood
              aggregation and attention-based weighting of high-impact
              transactions.
            </li>
            <li>
              <strong>Ranking-Focused Evaluation:</strong> Optimized for
              Recall@K and account-level metrics aligned with analyst workflows.
            </li>
            <li>
              <strong>Offline ML + Online Serving:</strong> Separated model
              training from investigation-time queries to ensure scalability
              and reliability.
            </li>
          </ul>
        </Section>

        {/* Challenges */}
        <Section title="Challenges & Trade-offs">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Extreme Class Imbalance:</strong> Suspicious transactions
              represented &lt;0.1% of the dataset, requiring careful metric
              selection.
            </li>
            <li>
              <strong>Scalability:</strong> Preprocessing and modeling scaled to
              ~6.9M transactions under limited compute constraints.
            </li>
            <li>
              <strong>Explainability vs Performance:</strong> Prioritized model
              interpretability over marginal accuracy gains.
            </li>
          </ul>
        </Section>

        {/* Results */}
        <Section title="Outcomes & Results">
          <ul className="list-disc pl-6 space-y-3">
            <li>Achieved ~0.65 ROC-AUC on a highly imbalanced AML dataset</li>
            <li>Successfully ranked high-risk accounts using Recall@K metrics</li>
            <li>
              Delivered an analyst-facing investigation dashboard supporting
              account prioritization and transaction flow analysis
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
              Evaluation metrics must align with operational investigation goals
            </li>
            <li>
              Explainability is a first-class requirement in regulated domains
              such as finance
            </li>
            <li>
              With more time, temporal GNNs could further capture evolving
              transaction behavior
            </li>
          </ul>
        </Section>

        <div className="mt-16 h-px bg-white/10" />

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://github.com/VUPPALAVARSHITH/GraphGuard-AML-Platform"
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

/* ---------- Reusable Components ---------- */

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
