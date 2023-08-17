import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillShopping,
  AiOutlineShopping,
} from 'react-icons/ai';

import styles from './Item.module.scss';
import { productsActions } from 'store/reducers/products/products';
import { useDispatch } from 'react-redux';

const iconProps = {
  color: '#197acf',
  size: 24,
};

export function Item(props) {
  const { name, image, price, description, favorite, guid } = props;
  const dispatch = useDispatch();

  function updateFavorite() {
    dispatch(productsActions.updateFavorite(guid));
  }

  return (
    <div className={styles.item}>
      <div className={styles['item-image']}>
        <img
          src={image}
          alt={name}
        />
      </div>
      <div className={styles['item-description']}>
        <div className={styles['item-title']}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-price']}>
            $ {parseFloat(price).toFixed(2)}
          </div>
          <div className={styles['item-actions']}>
            {favorite ? (
              <AiFillHeart
                {...iconProps}
                color="#f21d56"
                className={styles['item-action']}
                onClick={updateFavorite}
              />
            ) : (
              <AiOutlineHeart
                {...iconProps}
                className={styles['item-action']}
                onClick={updateFavorite}
              />
            )}
            {false ? (
              <AiFillShopping
                {...iconProps}
                className={styles['item-action']}
              />
            ) : (
              <AiOutlineShopping
                {...iconProps}
                className={styles['item-action']}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
