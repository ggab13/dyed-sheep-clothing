import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, totalPrice } = useContext(CartContext);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <span className="header-info">Product</span>
                <span className="header-info">Name</span>
                <span className="header-info">Quantity</span>
                <span className="header-info">Price</span>
                <span className="header-info">Remove</span>
            </div>

            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} product={cartItem} />
            ))}

            <p>TOTAL: {totalPrice}$</p>
        </div>
    );
};
export default Checkout;
