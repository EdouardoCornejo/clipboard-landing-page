import { FC } from 'react';
import logo from '../../../assets/svg/logo.svg';
import { linksData, socialData } from '../../../common';
import { Footer } from '../footer';
import style from './rootLayout.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <main className={style.rootLayout}>
      <div className={style.rootLayout__container}>{children}</div>
      <Footer logo={logo} links={linksData} social={socialData} />
    </main>
  );
};
