import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    // When there is an action use useNavigate when it direct use Link

    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
            ))}
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
            {/*   <Link className="nav-link" to="/checkout">
                <Button>Go to checkout</Button>
            </Link> */}
        </div>
    );
};
export default CartDropdown;
