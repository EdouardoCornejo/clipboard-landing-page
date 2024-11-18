import styles from './logos.module.scss';
export const Logos = () => {
  return (
    <section className={styles.logos}>
      <div className={styles.logos__logo}>
        <img src="/src/assets/png/logo-google.png" alt="Logo 1" />
      </div>
      <div className={styles.logos__logo}>
        <img src="/src/assets/png/logo-ibm.png" alt="Logo 2" />
      </div>
      <div className={styles.logos__logo}>
        <img src="/src/assets/png/logo-microsoft.png" alt="Logo 3" />
      </div>
      <div className={styles.logos__logo}>
        <img src="/src/assets/png/logo-hp.png" alt="Logo 4" />
      </div>
      <div className={styles.logos__logo}>
        <img src="/src/assets/png/logo-vector-graphics.png" alt="Logo 5" />
      </div>
    </section>
  );
};
