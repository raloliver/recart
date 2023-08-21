import { useSelector } from 'react-redux';

import Header from 'components/Header';
import styles from './Cart.module.scss';
import { Item } from 'components/Item';

export default function Cart() {
  const cart = useSelector((state) => {
    const cartReduce = state.cart.reduce((products, productOnCart) => {
      const product = state.products.find(
        (product) => product.guid === productOnCart.guid
      );

      products.push({
        ...product,
        quantity: productOnCart.quantity,
      });

      return products;
    }, []);

    return cartReduce;
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
          />
        ))}

        <div className={styles.total}>
            <strong>
                Resume:
            </strong>
            <strong>
                Subtotal: 
                <strong>
                    $ 0.0
                </strong>
            </strong>
        </div>
      </div>
    </div>
  );
}
