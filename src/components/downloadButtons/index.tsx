import { Button } from '../form';
import styles from './download-btn.module.scss';

export const DownloadBtn = () => {
  return (
    <div className={styles.btnContainer}>
      <Button color="primary" text="Download for iOS" />
      <Button color="secondary" text="Download for Mac" />
    </div>
  );
};
