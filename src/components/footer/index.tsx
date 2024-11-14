
import styles from './footer.module.scss';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
       <div className={styles.footer__logo}>
        <img src="/src/assets/svg/logo.svg" alt="logo" />
      </div>
      <div className={styles.footer__links}>
        <a href="https://www.google.com">FAQs</a>
        <a href="https://www.google.com">Privacy Policy</a>
        <a href="https://www.google.com">Install Guide</a>
        <a href="https://www.google.com">Contact Us</a>
        <a href="https://www.google.com">Press Kit</a>
      </div>
      <div className={styles.footer__social}>
        <a href="https://www.facebook.com">
          <img src="/src/assets/svg/icon-facebook.svg" alt="facebook" />
        </a>
        <a href="https://www.twitter.com">
          <img src="/src/assets/svg/icon-twitter.svg" alt="facebook" />
        </a>
        <a href="https://www.instagram.com">
          <img src="/src/assets/svg/icon-instagram.svg" alt="facebook" />
        </a>
      </div>
    </footer>
  );
};
