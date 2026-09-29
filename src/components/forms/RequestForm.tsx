import { useState, type ChangeEvent, type FormEvent } from 'react';
import { productCategories } from '../../data/navigation';
import { Button } from '../ui/Button';
import { submitFormRequest, type SubmissionSource } from '../../lib/submissions';
import styles from './RequestForm.module.css';

interface RequestFormProps {
  source: SubmissionSource;
}

const MAX_FILE_SIZE_MB = 10;
const ACCEPTED_FILE_TYPES = ['image/', 'application/pdf', '.ai', '.eps'];
const todayIso = new Date().toISOString().split('T')[0];

export function RequestForm({ source }: RequestFormProps) {
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
      await submitFormRequest(source, {
        width: String(data.get('width') ?? ''),
        height: String(data.get('height') ?? ''),
        category: String(data.get('category') ?? ''),
        attachment: String(data.get('attachment') ?? ''),
        border: String(data.get('border') ?? ''),
        neededBy: String(data.get('neededBy') ?? ''),
        quantity: String(data.get('quantity') ?? ''),
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        phone: String(data.get('phone') ?? ''),
        message: String(data.get('message') ?? ''),
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <label className={styles.field}>
          <span className={styles.visuallyHidden}>Width</span>
          <input name="width" type="number" min="0" max="200" step="0.1" placeholder="Width" />
        </label>
        <label className={styles.field}>
          <span className={styles.visuallyHidden}>Height</span>
          <input name="height" type="number" min="0" max="200" step="0.1" placeholder="Height" />
        </label>
        <label className={styles.field}>
          <span className={styles.visuallyHidden}>Product type</span>
          <select name="category" defaultValue="" required>
            <option value="" disabled>
              Select Product Type
            </option>
            {productCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          <span className={styles.visuallyHidden}>Attachment type</span>
          <select name="attachment" defaultValue="">
            <option value="" disabled>
              Select Attachment Type
            </option>
            <option>Iron-on</option>
            <option>Sew-on</option>
            <option>Adhesive backing</option>
            <option>Hook and loop</option>
            <option>Other</option>
          </select>
        </label>
        <label className={styles.field}>
          <span className={styles.visuallyHidden}>Border type</span>
          <select name="border" defaultValue="">
            <option value="" disabled>
              Select Border Type
            </option>
            <option>Merrowed</option>
            <option>Laser cut</option>
            <option>Heat cut</option>
            <option>No border</option>
          </select>
        </label>
        <label className={styles.field}>
          <span className={styles.visuallyHidden}>Needed by</span>
          <input name="neededBy" type="date" min={todayIso} aria-label="Needed by date" />
        </label>
        <label className={styles.field}>
          <span className={styles.visuallyHidden}>Quantity</span>
          <input name="quantity" type="number" min="1" max="100000" placeholder="Quantity" required />
        </label>
        <label className={styles.field}>
          <span className={styles.visuallyHidden}>Name</span>
          <input name="name" autoComplete="name" placeholder="Name" minLength={2} maxLength={80} required />
        </label>
        <label className={styles.field}>
          <span className={styles.visuallyHidden}>Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="Email" maxLength={120} required />
        </label>
        <label className={styles.field}>
          <span className={styles.visuallyHidden}>Contact phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Contact"
            maxLength={20}
            pattern="[0-9+()\-\s]{7,20}"
            title="Enter a valid phone number (7-20 digits)"
          />
        </label>
        <label className={`${styles.field} ${styles.fullWidth}`}>
          <span className={styles.visuallyHidden}>Additional information</span>
          <textarea name="message" rows={4} placeholder="Additional information..." maxLength={1000} />
        </label>
        <label className={styles.field}>
          <span className={styles.visuallyHidden}>How did you find us?</span>
          <select name="referral" defaultValue="">
            <option value="" disabled>
              How did you find us?
            </option>
            <option>Search engine</option>
            <option>Social media</option>
            <option>Referral</option>
            <option>Returning customer</option>
            <option>Other</option>
          </select>
        </label>
        <label className={`${styles.fileField} ${styles.field}`}>
          <span className={styles.visuallyHidden}>Artwork file</span>
          <input name="artwork" type="file" accept="image/*,.pdf,.ai,.eps" onChange={handleFileChange} />
          {fileName && !fileError && <span className={styles.fileName}>{fileName}</span>}
        </label>
      </div>

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
      <Button className={styles.submitButton} type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting…' : 'Submit Now'}
      </Button>
    </form>
  );
}
