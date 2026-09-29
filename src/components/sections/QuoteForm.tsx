import { useState, type ChangeEvent, type FormEvent } from 'react';
import bannerImage from '../../assets/bg_img_11.jpg';
import { productCategories } from '../../data/navigation';
import { submitFormRequest } from '../../lib/submissions';
import styles from './QuoteForm.module.css';

const MAX_FILE_SIZE_MB = 10;
const ACCEPTED_FILE_TYPES = ['image/', 'application/pdf', '.ai', '.eps'];

export function QuoteForm() {
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setFileName('');
      setFileError('');
      return;
    }
    const isAcceptedType = ACCEPTED_FILE_TYPES.some(
      (type) => file.type.startsWith(type) || file.name.toLowerCase().endsWith(type),
    );
    if (!isAcceptedType) {
      setFileError('Unsupported file type. Upload an image, PDF, AI, or EPS file.');
      event.target.value = '';
      setFileName('');
      return;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setFileError(`File is too large. Max size is ${MAX_FILE_SIZE_MB}MB.`);
      event.target.value = '';
      setFileName('');
      return;
    }
    setFileError('');
    setFileName(file.name);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (fileError) return;
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');
    try {
      await submitFormRequest('home', {
        width: '',
        height: '',
        category: String(data.get('category') ?? ''),
        attachment: '',
        border: '',
        neededBy: '',
        quantity: '',
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        phone: String(data.get('phone') ?? ''),
        message: String(data.get('placement') ?? ''),
        referral: String(data.get('referral') ?? ''),
        artworkFileName: fileName,
      });
      setStatus('success');
      form.reset();
      setFileName('');
      setFileError('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section-tight">
      <div className={styles.panel}>
        <div className={styles.image} style={{ backgroundImage: `url(${bannerImage})` }} />

        <div className={styles.formSide}>
          <h2 className={styles.heading}>Design Tips &amp; Bulk Order Updates</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span className={styles.label}>
                Name <span className={styles.required}>*</span>
              </span>
              <input name="name" placeholder="Enter Your Name" minLength={2} maxLength={80} required />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>
                Email Address <span className={styles.required}>*</span>
              </span>
              <input name="email" type="email" placeholder="Your Email" maxLength={120} required />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Phone Number</span>
              <input
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                maxLength={20}
                pattern="[0-9+()\-\s]{7,20}"
                title="Enter a valid phone number (7-20 digits)"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Select</span>
              <select name="category" defaultValue="">
                <option value="" disabled>
                  Select Category
                </option>
                {productCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Put Size or Placement</span>
              <input name="placement" placeholder="e.g. 3in, left chest" maxLength={200} />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Referred by</span>
              <input name="referral" placeholder="How did you hear about us?" maxLength={120} />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Upload Your Art Work</span>
              <input
                className={styles.fileInput}
                name="artwork"
                type="file"
                accept="image/*,.pdf,.ai,.eps"
                onChange={handleFileChange}
              />
              {fileName && !fileError && <span className={styles.fileName}>{fileName}</span>}
            </label>

            {fileError && (
              <p className={styles.errorText} role="alert">
                {fileError}
              </p>
            )}
            {status === 'success' && (
              <p className={styles.success} role="status">
                Thanks, your request is ready. Our team will follow up by email.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorText} role="alert">
                Something went wrong sending your request. Please try again.
              </p>
            )}

            <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting…' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
