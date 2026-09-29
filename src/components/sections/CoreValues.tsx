import styles from './CoreValues.module.css';

const values = [
  {
    icon: '🤝',
    title: 'Customer-Centric Approach',
    description:
      'We put our customers at the heart of every decision, ensuring your satisfaction and vision are always our priority.',
  },
  {
    icon: '💡',
    title: 'Creativity & Customization',
    description:
      'We believe in the power of unique ideas. Every patch we create is tailored to your individual needs and style.',
  },
  {
    icon: '🔎',
    title: 'Transparency & Trust',
    description: 'Honest communication and clear processes help us build strong, lasting relationships.',
  },
];

export function CoreValues() {
  return (
    <section className={styles.section}>
      <div className="page-container">
        <div className={styles.heading}>
          <h2 className={`${styles.title} text-h1`}>Our Core Values</h2>
          <p className={`${styles.subtitle} text-body-lg`}>
            At threadock, our core values guide everything we do.
          </p>
        </div>
        <div className={styles.grid}>
          {values.map((value) => (
            <div className={styles.card} key={value.title}>
              <span className={styles.icon} aria-hidden="true">
                {value.icon}
              </span>
              <h3 className={`${styles.cardTitle} text-h3`}>{value.title}</h3>
              <p className={`${styles.cardDescription} text-body`}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
