import imageDevices from '../../assets/png/image-devices.png';
import styles from './devices.module.scss';

export const Devices = () => {
  return (
    <div className={styles.devices}>
      <img src={imageDevices} alt="imageDevices" />
    </div>
  );
};
