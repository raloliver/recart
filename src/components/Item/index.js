import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillShopping,
  AiOutlineShopping,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';
import classNames from 'classnames';

import styles from './Item.module.scss';
import { productsActions } from 'store/reducers/products/products';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from 'store/reducers/cart/cart';

const iconProps = {
  color: '#197acf',
  size: 24,
};

export function Item(props) {
  const { name, image, price, description, favorite, guid, cart, quantity } =
    props;
  const dispatch = useDispatch();
  const isOnCart = useSelector((state) =>
    state.cart.some((product) => product.guid === guid)
  );

  function updateFavorite() {
    dispatch(productsActions.updateFavorite(guid));
  }

  function updateCart() {
    dispatch(cartActions.updateCart(guid));
  }

  return (
    <div className={classNames(styles.item, { [styles['item-cart']]: cart })}>
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
            {cart && (
              <div className={styles.quantity}>
                Quantity:
                <AiFillMinusCircle
                  {...iconProps}
                  className={styles['item-action']}
                  onClick={() => {
                    if (quantity >= 1) {
                      dispatch(
                        cartActions.updateQuantity({ guid, quantity: -1 })
                      );
                    }
                  }}
                />
                <span>{String(quantity || 0).padStart(2, '0')}</span>
                <AiFillPlusCircle
                  {...iconProps}
                  className={styles['item-action']}
                  onClick={() =>
                    dispatch(cartActions.updateQuantity({ guid, quantity: +1 }))
                  }
                />
              </div>
            )}
            {isOnCart ? (
              <AiFillShopping
                {...iconProps}
                className={styles['item-action']}
                onClick={updateCart}
              />
            ) : (
              <AiOutlineShopping
                {...iconProps}
                className={styles['item-action']}
                onClick={updateCart}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
