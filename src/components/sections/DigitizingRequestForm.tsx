import { useState, type FormEvent } from 'react';
import { SectionHeading } from './SectionHeading';
import { submitServiceRequest } from '../../lib/submissions';
import styles from './DigitizingRequestForm.module.css';

type RequestType = 'digitizing' | 'vector';
type Status = 'idle' | 'submitting' | 'success' | 'error';

const fileFormats: Record<RequestType, string[]> = {
  digitizing: ['DST', 'PES', 'EMB', 'JPEG', 'PDF', 'PXF', 'OFM', 'JEF', 'EXP', 'CND'],
  vector: ['AI', 'EPS', 'PDF', 'SVG', 'CDR', 'PNG'],
};

const MAX_DIMENSION_IN = 40;

export function DigitizingRequestForm() {
  const [type, setType] = useState<RequestType>('digitizing');
  const [status, setStatus] = useState<Status>('idle');
  const [formatError, setFormatError] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const formats = data.getAll('format').map(String);

    if (formats.length === 0) {
      setFormatError('Select at least one file format.');
      return;
    }
    setFormatError('');

    setStatus('submitting');
    try {
      await submitServiceRequest({
        requestType: type,
        width: String(data.get('width') ?? ''),
        height: String(data.get('height') ?? ''),
        formats,
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        contact: String(data.get('contact') ?? ''),
        message: String(data.get('message') ?? ''),
      });
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section" id="digitizing-request">
      <div className="page-container">
        <SectionHeading eyebrow="Get started" title="Request digitizing or vector art" onLight={false} />
        <div className={styles.layout}>
          <div className={styles.panel}>
            <div className={styles.tabs} role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={type === 'digitizing'}
                className={`${styles.tab} ${type === 'digitizing' ? styles.tabActive : ''}`}
                onClick={() => setType('digitizing')}
              >
                Digitizing
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={type === 'vector'}
                className={`${styles.tab} ${type === 'vector' ? styles.tabActive : ''}`}
                onClick={() => setType('vector')}
              >
                Vector
              </button>
            </div>

            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.row}>
                <input
                  className={styles.input}
                  name="width"
                  type="number"
                  min="0.1"
                  max={MAX_DIMENSION_IN}
                  step="0.1"
                  placeholder="Width (in)"
                  required
                />
                <input
                  className={styles.input}
                  name="height"
                  type="number"
                  min="0.1"
                  max={MAX_DIMENSION_IN}
                  step="0.1"
                  placeholder="Height (in)"
                  required
                />
              </div>

              <span className={styles.label}>Select File Format</span>
              <div className={styles.formatGrid}>
                {fileFormats[type].map((format) => (
                  <label className={styles.formatOption} key={format}>
                    <input type="checkbox" name="format" value={format} />
                    <span>{format}</span>
                  </label>
                ))}
              </div>
              {formatError && (
                <p className={styles.errorText} role="alert">
                  {formatError}
                </p>
              )}

              <div className={styles.row}>
                <input className={styles.input} name="name" placeholder="Name" maxLength={80} required />
                <input
                  className={styles.input}
                  name="email"
                  type="email"
                  placeholder="Email"
                  maxLength={120}
                  required
                />
              </div>
              <input
                className={styles.input}
                name="contact"
                type="tel"
                placeholder="Contact"
                maxLength={20}
                pattern="[0-9+()\-\s]{7,20}"
                title="Enter a valid phone number (7-20 digits)"
              />
              <textarea
                className={styles.textarea}
                name="message"
                placeholder="Message"
                rows={4}
                maxLength={1000}
              />

              {status === 'success' && (
                <div className={styles.success} role="status">
                  Thanks — your {type === 'digitizing' ? 'digitizing' : 'vector art'} request has been received.
                  We&rsquo;ll follow up by email within one business day.
                </div>
              )}
              {status === 'error' && (
                <div className={styles.errorText} role="alert">
                  Something went wrong sending your request. Please try again.
                </div>
              )}

              <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
                {status === 'submitting'
                  ? 'Submitting…'
                  : `Submit ${type === 'digitizing' ? 'Digitizing' : 'Vector'} Request`}
              </button>
            </form>
          </div>

          <div className={styles.info}>
            <span className={styles.badge} aria-hidden="true">
              TD
            </span>
            <p className={`${styles.copy} text-body`}>
              Custom patches are a simple way to add identity, branding, and personality to clothing, uniforms, bags,
              hats, and accessories. Whether you need embroidered, woven, PVC, or printed patches, each design can be
              customized with your preferred size, shape, colors, backing, and border style to match your brand or
              personal style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
