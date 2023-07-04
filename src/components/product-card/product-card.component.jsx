import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItemToCart } from '../../store/cart/cart.reducer';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  ProductCartInfoContainer
} from './product-card.styles';

const   ProductCard = ({ title, product }) => {
  const { id, name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <ProductCartContainer>
      <Link to={`/sklep/${title}/${id}`}>
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
          <ProductCartInfoContainer>
            <Name>{name}</Name>
            <Price>{price}</Price>
          </ProductCartInfoContainer>
        </Footer>
      </Link>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Dodaj do koszyka
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
