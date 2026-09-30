import { faqItems } from '../data/faq';
import { PageIntro } from '../components/sections/PageIntro';
import { Accordion } from '../components/ui/Accordion';
import heroVisual from '../assets/hero_section_logo6.png';
import styles from './Faq.module.css';

export default function Faq() {
  return (
    <>
      <PageIntro
        eyebrow="Support"
        title="Frequently asked questions"
        description="Answers to what most new customers ask before their first order."
        visualImage={heroVisual}
      />
      <div className="page-container">
        <div className={styles.body}>
          <Accordion items={faqItems} />
        </div>
      </div>
    </>
  );
}
