import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './Category.module.scss';
import Header from 'components/Header';

export default function Category() {
  const { guid } = useParams();
  const category = useSelector((state) =>
    state.categories.find((category) => category.guid === guid)
  );

  return (
    <div>
      <Header
        title={category.name}
        description={category.description}
        image={category.cover}
        className={styles.header}
      />
    </div>
  );
}
