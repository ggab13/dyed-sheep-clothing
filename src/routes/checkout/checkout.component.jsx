import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.jsx';
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderInfo,
    Total,
} from './checkout.styles.jsx';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderInfo>Product</HeaderInfo>
                <HeaderInfo>Name</HeaderInfo>
                <HeaderInfo>Quantity</HeaderInfo>
                <HeaderInfo>Price</HeaderInfo>
                <HeaderInfo>Remove</HeaderInfo>
            </CheckoutHeader>

            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} product={cartItem} />
            ))}

            <Total>TOTAL: {cartTotal}$</Total>
        </CheckoutContainer>
    );
};
export default Checkout;
