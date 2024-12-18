import imageComputer from '../../assets/png/image-computer.png';
import style from './features.module.scss';

export const Features = () => {
  return (
    <section className={style.features}>
      <div className={style.features__image}>
        <img src={imageComputer} alt="computer" />
      </div>
      <div className={style.features__content}>
        <div className={style.features__content__info}>
          <h2>Quick Search</h2>
          <p>
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
        <div className={style.features__content__info}>
          <h2>iCloud Sync</h2>
          <p>Instantly saves and syncs snippets across all your devices.</p>
        </div>
        <div className={style.features__content__info}>
          <h2>Complete History</h2>
          <p>
            Retrieve any snippets from the first moment you started using the
            app.
          </p>
        </div>
      </div>
    </section>
  );
};
