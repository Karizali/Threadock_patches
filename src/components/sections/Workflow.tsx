import type { ReactNode } from 'react';
import styles from './Workflow.module.css';

interface WorkflowStep {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const steps: WorkflowStep[] = [
  {
    id: 'design',
    icon: (
      <svg {...iconProps}>
        <path d="M12 3v12" />
        <polyline points="7 8 12 3 17 8" />
        <path d="M5 21h14" />
      </svg>
    ),
    title: 'Send Your Design',
    description: 'Upload your logo or design and tell us what you need.',
  },
  {
    id: 'quote',
    icon: (
      <svg {...iconProps}>
        <line x1="12" y1="2" x2="12" y2="22" />
        <path d="M17 6.5h-6a2.75 2.75 0 0 0 0 5.5h2a2.75 2.75 0 0 1 0 5.5H7" />
      </svg>
    ),
    title: 'Get Your Quote',
    description: "We'll review and send you a fast, complete quote.",
  },
  {
    id: 'ship',
    icon: (
      <svg {...iconProps}>
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'We Produce & Ship',
    description: 'We craft your patches and ship them to you on time.',
  },
];

export function Workflow() {
  return (
    <section className={`section-tight ${styles.section}`}>
      <div className="page-container">
        <div className={styles.header}>
          <h2 className={`${styles.heading} text-h1`}>How It Works</h2>
          <p className={`${styles.subheading} text-body-lg`}>From idea to delivery in just 3 simple steps</p>
        </div>
        <div className={styles.list}>
          {steps.map((step) => (
            <div className={styles.step} key={step.id}>
              <span className={styles.circle}>
                <span className={styles.icon} aria-hidden="true">
                  {step.icon}
                </span>
              </span>
              <h3 className={`${styles.title} text-h4`}>{step.title}</h3>
              <p className={`${styles.description} text-small`}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
