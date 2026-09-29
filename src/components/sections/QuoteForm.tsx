import { RequestForm } from '../forms/RequestForm';
import { SectionHeading } from './SectionHeading';
import styles from './QuoteForm.module.css';

export function QuoteForm() {
  return (
    <section className="section" id="quote">
      <div className="page-container">
        <SectionHeading eyebrow="Get started" title="Request a quote" onLight={false} />
        <div className={styles.panel}>
          <RequestForm source="home" />
        </div>
      </div>
    </section>
  );
}
