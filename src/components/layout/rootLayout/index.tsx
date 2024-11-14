import { FC } from "react";
import { linksData, socialData } from "../../../common";
import { Footer } from "../footer";
import style from "./rootLayout.module.scss";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <main className={style.rootLayout}>
      <div className={style.rootLayout__container}>{children}</div>
      <Footer
        logo="/src/assets/svg/logo.svg"
        links={linksData}
        social={socialData}
      />
    </main>
  );
};
