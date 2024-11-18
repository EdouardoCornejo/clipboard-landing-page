import { FC } from 'react';
import style from './section.module.scss';

interface SectionProps {
  title: string;
  content: string;
}

export const Section: FC<SectionProps> = ({ content, title }) => {
  return (
    <section className={style.section}>
      <div className={style.section__content}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
};
