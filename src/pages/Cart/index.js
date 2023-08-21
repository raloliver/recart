import { useDispatch, useSelector } from 'react-redux';

import Header from 'components/Header';
import styles from './Cart.module.scss';
import { Item } from 'components/Item';
import { cartActions } from 'store/reducers/cart/cart';

export default function Cart() {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => {
    let subTotal = 0;
    const searchValue = new RegExp(state.search, 'i');
    const cartReduce = state.cart.reduce((products, productOnCart) => {
      const product = state.products.find(
        (product) => product.guid === productOnCart.guid
      );

      subTotal += product.price * productOnCart.quantity;

      if (product.name.match(searchValue)) {
        products.push({
          ...product,
          quantity: productOnCart.quantity,
        });
      }

      return products;
    }, []);

    return {
      cart: cartReduce,
      total: subTotal,
    };
  });

  return (
    <div>
      <Header
        title="Cart"
        description="Last step after payment"
      />
      <div className={styles.cart}>
        {cart.map((product) => (
          <Item
            key={product.guid}
            {...product}
            cart
          />
        ))}

        <div className={styles.total}>
          <strong>Resume:</strong>
          <strong>
            Subtotal:
            <strong>$ {total.toFixed(2)}</strong>
          </strong>
        </div>
        <button
          className={styles.reset}
          onClick={() => dispatch(cartActions.resetCart())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
