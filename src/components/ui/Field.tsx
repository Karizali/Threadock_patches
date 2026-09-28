import { useId, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import styles from './Field.module.css';

interface FieldShellProps {
  label: string;
  hint?: string;
  error?: string;
  onLight?: boolean;
  required?: boolean;
  children: (props: { id: string; describedBy: string | undefined }) => ReactNode;
}

function FieldShell({ label, hint, error, onLight, required, children }: FieldShellProps) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={styles.field}>
      <label className={`${styles.label} ${onLight ? styles.labelOnLight : ''}`} htmlFor={id}>
        {label}
        {required ? ' *' : ''}
      </label>
      {children({ id, describedBy })}
      {hint && !error ? (
        <span className={styles.hint} id={hintId}>
          {hint}
        </span>
      ) : null}
      {error ? (
        <span className={styles.errorText} id={errorId} role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Omit<FieldShellProps, 'children'>;

export function Input({ label, hint, error, onLight, required, className = '', ...rest }: InputProps) {
  return (
    <FieldShell label={label} hint={hint} error={error} onLight={onLight} required={required}>
      {({ id, describedBy }) => (
        <input
          id={id}
          className={`${styles.control} ${error ? styles.error : ''} ${className}`}
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          required={required}
          {...rest}
        />
      )}
    </FieldShell>
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Omit<FieldShellProps, 'children'>;

export function Textarea({ label, hint, error, onLight, required, className = '', ...rest }: TextareaProps) {
  return (
    <FieldShell label={label} hint={hint} error={error} onLight={onLight} required={required}>
      {({ id, describedBy }) => (
        <textarea
          id={id}
          className={`${styles.control} ${error ? styles.error : ''} ${className}`}
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          required={required}
          {...rest}
        />
      )}
    </FieldShell>
  );
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  Omit<FieldShellProps, 'children'> & { children: ReactNode };

export function Select({ label, hint, error, onLight, required, className = '', children, ...rest }: SelectProps) {
  return (
    <FieldShell label={label} hint={hint} error={error} onLight={onLight} required={required}>
      {({ id, describedBy }) => (
        <select
          id={id}
          className={`${styles.control} ${error ? styles.error : ''} ${className}`}
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          required={required}
          {...rest}
        >
          {children}
        </select>
      )}
    </FieldShell>
  );
}
