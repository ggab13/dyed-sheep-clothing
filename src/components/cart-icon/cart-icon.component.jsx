import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const { cartQuantity, setCartQuantity } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{cartQuantity}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
