import { testimonials } from '../../data/testimonials';
import { SectionHeading } from './SectionHeading';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section className="section">
      <div className="page-container">
        <SectionHeading eyebrow="Reviews" title="What customers say" />
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <article className={styles.card} key={testimonial.id}>
              <span className={styles.stars} aria-label={`${testimonial.rating} out of 5 stars`}>
                {'★'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </span>
              <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
              <div className={styles.person}>
                <span className={styles.avatar} aria-hidden="true">
                  {testimonial.initials}
                </span>
                <div>
                  <div className={styles.name}>{testimonial.name}</div>
                  <div className={styles.role}>{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
