import { Link } from 'react-router-dom';
import { PageIntro } from '../components/sections/PageIntro';
import { DigitizingRequestForm } from '../components/sections/DigitizingRequestForm';
import { Button } from '../components/ui/Button';
import heroVisual from '../assets/hero_section_logo3.png';
import styles from './Services.module.css';

const services = [
  {
    id: 'vector-art',
    icon: 'VA',
    name: 'Vector art',
    description:
      'Send a photo, sketch, or low-resolution logo and our artists redraw it as clean, scalable vector art ready for any production method.',
    bullets: ['Unlimited revisions until approval', 'Delivered as AI, EPS, and PDF', 'Turnaround in 1-2 business days'],
  },
  {
    id: 'digitizing',
    icon: 'DG',
    name: 'Digitizing',
    description:
      'We convert your artwork into an embroidery-ready stitch file, mapping thread density, direction, and color breaks by hand.',
    bullets: ['Tested on a physical stitch-out', 'Matched to your machine format', 'Standalone or bundled with an order'],
  },
];

export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="What we offer"
        title="Services"
        description="Two services that make every other product possible: getting your artwork production-ready."
        visualImage={heroVisual}
        cta={
          <Link to="/contact">
            <Button variant="primary">Request a quote</Button>
          </Link>
        }
      />
      <div className="page-container">
        <div className={styles.grid}>
          {services.map((service) => (
            <div className={styles.card} key={service.id}>
              <span className={styles.icon} aria-hidden="true">
                {service.icon}
              </span>
              <h2 className={`${styles.name} text-h3`}>{service.name}</h2>
              <p className={`${styles.description} text-body`}>{service.description}</p>
              <ul className={styles.list}>
                {service.bullets.map((bullet) => (
                  <li className={styles.listItem} key={bullet}>
                    <span aria-hidden="true">&mdash;</span> {bullet}
                  </li>
                ))}
              </ul>
              <div>
                <Link to="/contact">
                  <Button variant="onLight" size="sm">
                    Request this service
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DigitizingRequestForm />
    </>
  );
}
