import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import styles from './Footer.module.scss';

const iconProps = {
  color: '#fff',
  size: 24,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconProps} />
        <FaTwitter {...iconProps} />
        <FaInstagram {...iconProps} />
      </div>
      <span>Just a project to practice React.</span>
    </footer>
  );
}
