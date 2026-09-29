import { useState, type FormEvent } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import styles from './Admin.module.css';

export default function AdminLogin() {
  const { user, loading, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!loading && user) {
    const from = (location.state as { from?: Location })?.from?.pathname ?? '/admin';
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await signIn(email, password);
      navigate('/admin', { replace: true });
    } catch (err) {
      setError(err instanceof Error && err.message.includes('VITE_FIREBASE') ? err.message : 'Invalid email or password.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.authScreen}>
      <form className={styles.authCard} onSubmit={handleSubmit}>
        <span className={styles.authEyebrow}>threadock admin</span>
        <h1 className={styles.authTitle}>Sign in</h1>
        <label className={styles.authField}>
          <span>Email</span>
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={styles.authField}>
          <span>Password</span>
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && (
          <p className={styles.authError} role="alert">
            {error}
          </p>
        )}
        <button className={styles.authSubmit} type="submit" disabled={submitting}>
          {submitting ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
