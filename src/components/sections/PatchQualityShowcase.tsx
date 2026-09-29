import heroImage from '../../assets/hero_image.webp';
import patchImage from '../../assets/quality_patch.jpg';
import styles from './PatchQualityShowcase.module.css';

const rows = [
  {
    image: heroImage,
    title: 'High Quality Durable Custom Patches',
    description:
      'threadock offers high quality patches for individuals, designers, teams, and organizations to convey and promote their message in a way they want. We offer a wide range of colors, threads, patch types, and fabric at incredibly low prices. Choose your design or let our team choose a product for your event to get a lasting impression.',
    // Text on the left, image on the right.
    imageOnRight: true,
  },
  {
    image: patchImage,
    title: 'Top Class Digitizing & Patching Company',
    description:
      'Our proficient and well-trained patch makers can assist you in creating an attractive patch that you wear proudly. threadock started as a straightforward custom patch maker, and with our outstanding success and drive to keep moving ahead, we’ve extended our product line. Now we offer plain-woven, rubber, and chenille patches, with dozens of digitizers operating to provide you with the best custom patches at wholesale prices.',
    // Image on the left, text on the right.
    imageOnRight: false,
  },
];

export function PatchQualityShowcase() {
  return (
    <section className={styles.section}>
      <div className="page-container">
        <div className={styles.frame}>
          {rows.map((row) => (
            <div className={`${styles.row} ${row.imageOnRight ? styles.imageOnRight : ''}`} key={row.title}>
              <img className={styles.image} src={row.image} alt={row.title} />
              <div className={styles.text}>
                <h2 className={`${styles.title} text-h2`}>{row.title}</h2>
                <p className={`${styles.description} text-body`}>{row.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
