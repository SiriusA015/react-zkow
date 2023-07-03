import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/kasa');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Twój koszyk jest pusty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>IDŹ DO KASY</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;