import styles from './TickerBar.module.css';

const tickerItems = [
  'Affordable Rates',
  'Fast Turnaround',
  'Certified Quality',
  'Easy Ordering',
  'Dedicated Support',
  'Free Digital Proofs',
];

export function TickerBar() {
  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {[0, 1].map((group) => (
          <div className={styles.group} key={group}>
            {tickerItems.map((item) => (
              <span className={styles.item} key={item}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
