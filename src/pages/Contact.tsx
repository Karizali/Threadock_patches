import { RequestForm } from '../components/forms/RequestForm';
import { PageIntro } from '../components/sections/PageIntro';
import { CustomerSatisfactionBanner } from '../components/sections/CustomerSatisfactionBanner';
import { PatchQualityShowcase } from '../components/sections/PatchQualityShowcase';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Get in touch"
        title="Contact us"
        description="Questions, custom product ideas, or quote requests: our team is ready to help."
      />
      <section className={styles.contactSection}>
        <div className={`page-container ${styles.container}`}>
          <div className={styles.layout}>
            <div className={styles.contactInfo}>
              <h2 className={styles.headline}>We&rsquo;d Love to Meet You in Person or Via the Web!</h2>
              <h3 className={styles.subheading}>Reach us directly</h3>
              <p className={styles.description}>
                From custom patches to promotional goods, we help businesses and individuals bring their artwork to
                life. Tell us what you have in mind and our team will help you make it stand out.
              </p>

              <div className={styles.detailList}>
              <div className={styles.detail}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92z" /></svg>
                </span>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+13025550148">+1 (302) 555-0148</a>
                </div>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
                </span>
                <div>
                  <h3>Email Address</h3>
                  <a href="mailto:orders@threadock.com">orders@threadock.com</a>
                </div>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" /><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01M15 14v.01M15 17v.01" /></svg>
                </span>
                <div>
                  <h3>Main Office</h3>
                  <p>Wilmington, Delaware, USA</p>
                </div>
              </div>
              </div>
            </div>

            <RequestForm source="contact" />
          </div>
        </div>
      </section>
      <CustomerSatisfactionBanner />
      <PatchQualityShowcase />
    </>
  );
}
