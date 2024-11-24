import logoGoogle from '../../assets/png/logo-google.png';
import logoHp from '../../assets/png/logo-hp.png';
import logoIbm from '../../assets/png/logo-ibm.png';
import logoMicrosoft from '../../assets/png/logo-microsoft.png';
import logoVectorGraphics from '../../assets/png/logo-vector-graphics.png';
import styles from './logos.module.scss';

export const Logos = () => {
  return (
    <section className={styles.logos}>
      <div className={styles.logos__logo}>
        <img src={logoGoogle} alt="Logo 1" />
      </div>
      <div className={styles.logos__logo}>
        <img src={logoIbm} alt="Logo 2" />
      </div>
      <div className={styles.logos__logo}>
        <img src={logoMicrosoft} alt="Logo 3" />
      </div>
      <div className={styles.logos__logo}>
        <img src={logoHp} alt="Logo 4" />
      </div>
      <div className={styles.logos__logo}>
        <img src={logoVectorGraphics} alt="Logo 5" />
      </div>
    </section>
  );
};
