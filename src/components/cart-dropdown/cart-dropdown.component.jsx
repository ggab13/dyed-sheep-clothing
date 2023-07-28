//import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectCartItems } from '../../store/cart/cart.selector';
//import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);

    // When there is an action use useNavigate when it direct use Link

    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.base}
                onClick={goToCheckoutHandler}
            >
                Go to checkout
            </Button>
        </CartDropdownContainer>
    );
};
export default CartDropdown;
