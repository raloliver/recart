import classNames from 'classnames';
import { RiShoppingCartFill, RiShoppingCart2Line } from 'react-icons/ri';

import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Search from 'components/Search';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const iconProps = {
  color: '#fff',
  size: 24,
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <Logo
        className={styles.brand}
        onClick={() => navigate('/')}
      />
      <div className={styles.menu}>
        <Link
          to="/"
          className={classNames(styles.item, {
            [styles.active]: location.pathname === '/',
          })}
        >
          Home
        </Link>
      </div>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.shortcuts}>
        <Link to="/cart">
          {location.pathname === '/cart' ? (
            <RiShoppingCartFill {...iconProps} />
          ) : (
            <RiShoppingCart2Line {...iconProps} />
          )}
        </Link>
      </div>
    </nav>
  );
}
