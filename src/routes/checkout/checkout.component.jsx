import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  ConfirmBtn,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const navigate = useNavigate();

  const goToConfirmation = () => {
    if (cartTotal > 0) {
      navigate("/potwierdzenie");
    }
  };

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
      <ConfirmBtn onClick={goToConfirmation}>Potwierdź zamówienie</ConfirmBtn>
    </CheckoutContainer>
  );
};

export default Checkout;
