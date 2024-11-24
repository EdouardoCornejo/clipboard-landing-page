import iconBlacklist from '../../assets/svg/icon-blacklist.svg';
import iconPreview from '../../assets/svg/icon-preview.svg';
import iconText from '../../assets/svg/icon-text.svg';
import styles from './info-section.module.scss';

export const InfoSection = () => {
  return (
    <section className={styles.info}>
      <div className={styles.info__container}>
        <img src={iconBlacklist} alt="blacklist" />
        <h2>Create blacklists</h2>
        <p>
          Ensure sensitive information never makes its way to your clipboard by
          excluding certain sources.
        </p>
      </div>
      <div className={styles.info__container}>
        <img src={iconText} alt="text" />
        <h2>Plain text snippets</h2>
        <p>
          Remove unwanted formatting from copied text for a consistent look.
        </p>
      </div>
      <div className={styles.info__container}>
        <img src={iconPreview} alt="preview" />
        <h2>Sneak preview</h2>
        <p>Quick preview of all snippets on your Clipboard for easy access.</p>
      </div>
    </section>
  );
};
