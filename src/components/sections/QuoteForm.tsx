import { useState, type FormEvent } from 'react';
import { productCategories } from '../../data/navigation';
import { Input, Select, Textarea } from '../ui/Field';
import { Button } from '../ui/Button';
import { SectionHeading } from './SectionHeading';
import styles from './QuoteForm.module.css';

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section" id="quote">
      <div className="page-container">
        <SectionHeading eyebrow="Get started" title="Request a quote" onLight={false} />
        <div className={styles.panel}>
          <form className={styles.grid} onSubmit={onSubmit}>
            <Input label="Full name" name="name" onLight required placeholder="Jamie Rivera" />
            <Input label="Email" name="email" type="email" onLight required placeholder="you@company.com" />
            <Input label="Phone" name="phone" type="tel" onLight placeholder="(555) 012-3456" />
            <Select label="Product category" name="category" onLight defaultValue="">
              <option value="" disabled>
                Choose a category
              </option>
              {productCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
            <Input
              label="Size / placement"
              name="size"
              onLight
              placeholder="e.g. 3in left chest"
              className={styles.span2}
            />
            <Select label="How did you hear about us?" name="referral" onLight defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option value="search">Search engine</option>
              <option value="social">Social media</option>
              <option value="referral">Referral</option>
              <option value="repeat">Repeat customer</option>
              <option value="other">Other</option>
            </Select>
            <div className={styles.fileRow}>
              <label className="text-small" htmlFor="artwork">
                Artwork upload
              </label>
              <input
                id="artwork"
                className={styles.fileInput}
                type="file"
                accept="image/*,.pdf,.ai,.eps"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
              {fileName && <span className="text-micro">Selected: {fileName}</span>}
            </div>
            <Textarea
              label="Instructions"
              name="instructions"
              onLight
              rows={4}
              placeholder="Tell us about quantities, colors, and deadlines."
              className={styles.span2}
            />
            {submitted && (
              <div className={styles.success} role="status">
                Thanks — your request has been received. We&rsquo;ll follow up by email within one business day.
              </div>
            )}
            <div className={styles.submitRow}>
              <Button type="submit" variant="primary">
                Submit request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
