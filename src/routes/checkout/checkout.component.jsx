import { useContext } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
    selectCartItems,
    selectCartTotal,
} from '../../store/cart/cart.selector';
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
    //const { cartItems, cartTotal } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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
