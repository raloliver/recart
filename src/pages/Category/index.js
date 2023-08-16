import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './Category.module.scss';
import Header from 'components/Header';
import { Item } from 'components/Item';

export default function Category() {
  const { guid } = useParams();
  const categoryName = useSelector(
    ({ categories }) =>
      categories.find((category) => category.guid === guid).name
  );
  const { category, products } = useSelector(({ categories, products }) => ({
    category: categories.find((category) => category.guid === guid),
    products: products.filter((product) => product.category === categoryName),
  }));

  return (
    <div>
      <Header
        title={category.name}
        description={category.description}
        image={category.cover}
        className={styles.header}
      />

      <div className={styles.products}>
        {products?.map((product) => (
          <Item
            key={product.guid}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}
