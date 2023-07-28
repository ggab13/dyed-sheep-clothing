import { ProductCardContainer, ProductCardInfo } from './product-card.styles';
import { useDispatch, useSelector } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    // const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ProductCardInfo>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </ProductCardInfo>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to card
            </Button>
        </ProductCardContainer>
    );
};

export default ProductCard;
