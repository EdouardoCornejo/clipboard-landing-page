import { FC } from "react";
import { Links, Social } from "../../../common";
import styles from "./footer.module.scss";

interface FooterProps {
  links: Array<Links>;
  social: Array<Social>;
  logo: string;
}

export const Footer: FC<FooterProps> = ({ links, logo, social }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <img src={logo} alt="logo" />
      </div>
      <nav className={styles.footer__links}>
        {links.map((link) => (
          <a key={link.id} href={link.link}>
            {link.name}
          </a>
        ))}
      </nav>
      <div className={styles.footer__social}>
        {social.map((social) => (
          <a key={social.id} href={social.link}>
            <img src={social.icon} alt={social.name} />
          </a>
        ))}
      </div>
    </footer>
  );
};
