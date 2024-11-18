import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__background} />
      <div className={styles.header__logo}>
        <img src="/src/assets/svg/logo.svg" alt="logo" />
      </div>
      <div className={styles.header__content}>
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
    </header>
  );
};
