//import { CartContext } from '../../contexts/cart.context';
//import { useContext } from 'react';
import './checkout-item.styles.scss';

import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
    addItemToCart,
    deleteItemFromCart,
    removeItemFromCart,
} from '../../store/cart/cart.action';

const CheckoutItem = ({ product }) => {
    const { id, name, price, quantity, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    /*   const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
        useContext(CartContext); */

    const deleteItemHandler = () =>
        dispatch(deleteItemFromCart(cartItems, product));
    const removeItemHandler = () =>
        dispatch(removeItemFromCart(cartItems, product));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, product));

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                {' '}
                <img src={imageUrl} alt={`${name}`}></img>
            </div>
            <span className="name">{name}</span>{' '}
            <span className="quantity">
                <div className="arrow">
                    {' '}
                    <span onClick={removeItemHandler}>&#10094;</span>
                </div>{' '}
                <span className="value">{quantity}</span>
                <div className="arrow">
                    {' '}
                    <span onClick={addItemHandler}>&#10095;</span>
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={deleteItemHandler}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
