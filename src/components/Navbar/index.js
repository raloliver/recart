import classNames from 'classnames';
import { RiShoppingCartFill, RiShoppingCart2Line } from 'react-icons/ri';

import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

const iconProps = {
  color: 'white',
  size: 24,
};

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.menu}>
        <a
          href="/"
          className={classNames(styles.item, {
            [styles.active]: window.location.pathname === '/',
          })}
        >
          Home
        </a>
      </div>
      <div className={styles.search}></div>
      <div className={styles.shortcuts}>
        <a href="/cart">
          {window.location.pathname === '/cart' ? (
            <RiShoppingCartFill {...iconProps} />
          ) : (
            <RiShoppingCart2Line {...iconProps} />
          )}
        </a>
      </div>
    </nav>
  );
}
