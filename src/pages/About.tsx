import { PageIntro } from '../components/sections/PageIntro';
import { CherishedCustomers } from '../components/sections/CherishedCustomers';
import { CoreValues } from '../components/sections/CoreValues';
import { QualityGuaranteeBanner } from '../components/sections/QualityGuaranteeBanner';
import heroVisual from '../assets/hero_section_logo4.png';
import styles from './About.module.css';

const stats = [
  { value: '10+', label: 'Years in production' },
  { value: '2', label: 'Production facilities' },
  { value: '19', label: 'Product categories' },
  { value: '1 day', label: 'Average proof turnaround' },
];

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="Our story"
        title="About threadock"
        description="We started as a small embroidery shop and grew into a full custom-goods partner for teams, brands, and independent shops that need reliable reorders."
        visualImage={heroVisual}
      />
      <div className="page-container">
        <div className={styles.stats}>
          {stats.map((stat) => (
            <div className={styles.stat} key={stat.label}>
              <span className={`${styles.statValue} text-h1`}>{stat.value}</span>
              <span className={`${styles.statLabel} text-small`}>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.body}>
          <p className={`${styles.paragraph} text-body-lg`}>
            Every order runs through the same five-stage process: design consultation, mockup approval,
            production, quality check, and packaging. That consistency is what lets teams reorder season after
            season without re-explaining their brand every time.
          </p>
          <p className={`${styles.paragraph} text-body-lg`}>
            Our production floor covers embroidery, dye sublimation, screen printing, DTF, and vinyl cutting,
            with an in-house digitizing and vector art team so nothing gets stuck waiting on a third-party
            vendor.
          </p>
        </div>
      </div>
      <CherishedCustomers />
      <CoreValues />
      <QualityGuaranteeBanner />
    </>
  );
}
