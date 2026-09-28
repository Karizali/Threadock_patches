import { useState, type FormEvent } from 'react';
import { productCategories } from '../data/navigation';
import { Button } from '../components/ui/Button';
import { PageIntro } from '../components/sections/PageIntro';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

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

            <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <label className={styles.field}>
                <span className={styles.visuallyHidden}>Width</span>
                <input name="width" type="number" min="0" step="any" placeholder="Width" />
              </label>
              <label className={styles.field}>
                <span className={styles.visuallyHidden}>Height</span>
                <input name="height" type="number" min="0" step="any" placeholder="Height" />
              </label>
              <label className={styles.field}>
                <span className={styles.visuallyHidden}>Product type</span>
                <select name="category" defaultValue="" required>
                  <option value="" disabled>Select Product Type</option>
                  {productCategories.map((category) => <option key={category} value={category}>{category}</option>)}
                </select>
              </label>
              <label className={styles.field}>
                <span className={styles.visuallyHidden}>Attachment type</span>
                <select name="attachment" defaultValue="">
                  <option value="" disabled>Select Attachment Type</option>
                  <option>Iron-on</option><option>Sew-on</option><option>Adhesive backing</option><option>Hook and loop</option><option>Other</option>
                </select>
              </label>
              <label className={styles.field}>
                <span className={styles.visuallyHidden}>Border type</span>
                <select name="border" defaultValue="">
                  <option value="" disabled>Select Border Type</option>
                  <option>Merrowed</option><option>Laser cut</option><option>Heat cut</option><option>No border</option>
                </select>
              </label>
              <label className={styles.field}>
                <span className={styles.visuallyHidden}>Needed by</span>
                <input name="neededBy" type="date" aria-label="Needed by date" />
              </label>
              <label className={styles.field}>
                <span className={styles.visuallyHidden}>Quantity</span>
                <input name="quantity" type="number" min="1" placeholder="Quantity" required />
              </label>
              <label className={styles.field}>
                <span className={styles.visuallyHidden}>Name</span>
                <input name="name" autoComplete="name" placeholder="Name" required />
              </label>
              <label className={styles.field}>
                <span className={styles.visuallyHidden}>Email</span>
                <input name="email" type="email" autoComplete="email" placeholder="Email" required />
              </label>
              <label className={styles.field}>
                <span className={styles.visuallyHidden}>Contact phone</span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="Contact" />
              </label>
              <label className={`${styles.field} ${styles.fullWidth}`}>
                <span className={styles.visuallyHidden}>Additional information</span>
                <textarea name="message" rows={4} placeholder="Additional information..." />
              </label>
              <label className={styles.field}>
                <span className={styles.visuallyHidden}>How did you find us?</span>
                <select name="referral" defaultValue="">
                  <option value="" disabled>How did you find us?</option>
                  <option>Search engine</option><option>Social media</option><option>Referral</option><option>Returning customer</option><option>Other</option>
                </select>
              </label>
              <label className={`${styles.fileField} ${styles.field}`}>
                <span className={styles.visuallyHidden}>Artwork file</span>
                <input
                  name="artwork"
                  type="file"
                  accept="image/*,.pdf,.ai,.eps"
                  onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
                />
                {fileName && <span className={styles.fileName}>{fileName}</span>}
              </label>
            </div>

            {submitted && <p className={styles.success} role="status">Thanks, your request is ready. Our team will follow up by email.</p>}
            <Button className={styles.submitButton} type="submit">Submit Now</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
