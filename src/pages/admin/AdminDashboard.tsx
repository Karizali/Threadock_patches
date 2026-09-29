import { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth-context';
import {
  subscribeToSubmissions,
  subscribeToServiceRequests,
  type FormSubmission,
  type ServiceSubmission,
} from '../../lib/submissions';
import styles from './Admin.module.css';

function formatTimestamp(createdAt: FormSubmission['createdAt']) {
  const date = createdAt?.toDate();
  if (!date) return '—';
  return date.toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

type Tab = 'quotes' | 'service';

export default function AdminDashboard() {
  const { user, signOutAdmin } = useAuth();
  const [tab, setTab] = useState<Tab>('quotes');

  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [quotesStatus, setQuotesStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  const [serviceRequests, setServiceRequests] = useState<ServiceSubmission[]>([]);
  const [serviceStatus, setServiceStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    const unsubscribe = subscribeToSubmissions(
      (next) => {
        setSubmissions(next);
        setQuotesStatus('ready');
      },
      () => setQuotesStatus('error'),
    );
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeToServiceRequests(
      (next) => {
        setServiceRequests(next);
        setServiceStatus('ready');
      },
      () => setServiceStatus('error'),
    );
    return unsubscribe;
  }, []);

  return (
    <div className={styles.dashboard}>
      <header className={styles.dashboardHeader}>
        <div>
          <span className={styles.authEyebrow}>threadock admin</span>
          <h1 className={styles.dashboardTitle}>Form submissions</h1>
        </div>
        <div className={styles.dashboardHeaderActions}>
          <span className={styles.dashboardUser}>{user?.email}</span>
          <button className={styles.signOutButton} type="button" onClick={() => signOutAdmin()}>
            Sign out
          </button>
        </div>
      </header>

      <div className={styles.dashboardTabs} role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'quotes'}
          className={`${styles.dashboardTab} ${tab === 'quotes' ? styles.dashboardTabActive : ''}`}
          onClick={() => setTab('quotes')}
        >
          Quote requests ({submissions.length})
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'service'}
          className={`${styles.dashboardTab} ${tab === 'service' ? styles.dashboardTabActive : ''}`}
          onClick={() => setTab('service')}
        >
          Digitizing / vector requests ({serviceRequests.length})
        </button>
      </div>

      {tab === 'quotes' && (
        <>
          {quotesStatus === 'loading' && <p className={styles.dashboardState}>Loading submissions…</p>}
          {quotesStatus === 'error' && (
            <p className={styles.dashboardState}>
              Couldn&rsquo;t load submissions. Check that your Firebase project and Firestore rules are set up.
            </p>
          )}
          {quotesStatus === 'ready' && submissions.length === 0 && (
            <p className={styles.dashboardState}>No quote requests yet.</p>
          )}
          {quotesStatus === 'ready' && submissions.length > 0 && (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Received</th>
                    <th>Source</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Category</th>
                    <th>Size</th>
                    <th>Attachment</th>
                    <th>Border</th>
                    <th>Needed by</th>
                    <th>Qty</th>
                    <th>Referral</th>
                    <th>Artwork</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr key={submission.id}>
                      <td>{formatTimestamp(submission.createdAt)}</td>
                      <td>
                        <span className={styles.sourceBadge}>{submission.source}</span>
                      </td>
                      <td>{submission.name}</td>
                      <td>{submission.email}</td>
                      <td>{submission.phone || '—'}</td>
                      <td>{submission.category || '—'}</td>
                      <td>
                        {submission.width || submission.height
                          ? `${submission.width || '?'} × ${submission.height || '?'}`
                          : '—'}
                      </td>
                      <td>{submission.attachment || '—'}</td>
                      <td>{submission.border || '—'}</td>
                      <td>{submission.neededBy || '—'}</td>
                      <td>{submission.quantity || '—'}</td>
                      <td>{submission.referral || '—'}</td>
                      <td>{submission.artworkFileName || '—'}</td>
                      <td className={styles.messageCell}>{submission.message || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {tab === 'service' && (
        <>
          {serviceStatus === 'loading' && <p className={styles.dashboardState}>Loading submissions…</p>}
          {serviceStatus === 'error' && (
            <p className={styles.dashboardState}>
              Couldn&rsquo;t load submissions. Check that your Firebase project and Firestore rules are set up.
            </p>
          )}
          {serviceStatus === 'ready' && serviceRequests.length === 0 && (
            <p className={styles.dashboardState}>No digitizing / vector requests yet.</p>
          )}
          {serviceStatus === 'ready' && serviceRequests.length > 0 && (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Received</th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Size</th>
                    <th>Formats</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceRequests.map((request) => (
                    <tr key={request.id}>
                      <td>{formatTimestamp(request.createdAt)}</td>
                      <td>
                        <span className={styles.sourceBadge}>{request.requestType}</span>
                      </td>
                      <td>{request.name}</td>
                      <td>{request.email}</td>
                      <td>{request.contact || '—'}</td>
                      <td>
                        {request.width || request.height ? `${request.width || '?'} × ${request.height || '?'}` : '—'}
                      </td>
                      <td>{request.formats.length > 0 ? request.formats.join(', ') : '—'}</td>
                      <td className={styles.messageCell}>{request.message || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}
