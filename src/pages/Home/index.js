import Header from 'components/Header';
import styles from './Home.module.scss';
import imageExample from 'assets/image-example.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <Header
        title="Blue Page"
        description="The new yellow pages"
        image={imageExample}
        className={styles.header}
      />
      <div className={styles.categories}>
        <div className={styles['categories-title']}>
          <h1>Categories</h1>
        </div>
        <div className={styles['categories-container']}>
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate(`/category/${category.guid}`)}
            >
              <img
                src={category.image}
                alt={category.name}
              />
              <h1>{category.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
