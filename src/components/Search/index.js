import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import styles from './Search.module.scss';
import { searchActions } from 'store/reducers/search/search';

export default function Search() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const location = useLocation();

  useEffect(() => {
    dispatch(searchActions.resetSearch());
  }, [location.pathname, dispatch]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder="search..."
        value={search}
        onChange={(event) =>
          dispatch(searchActions.updateSearch(event.target.value))
        }
      />
    </div>
  );
}
