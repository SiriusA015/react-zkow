import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Produkt</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Opis</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Ilość</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Cena</span>
        </HeaderBlock>
        <HeaderBlock>
          <a>Usuń</a>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Suma: {cartTotal},00 PLN</Total>
    </CheckoutContainer>
  );
};

export default Checkout;