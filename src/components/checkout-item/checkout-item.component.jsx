import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import './checkout-item.styles.scss';
const CheckoutItem = ({ product }) => {
    const { id, name, price, quantity, imageUrl } = product;
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
        useContext(CartContext);

    const deleteItemHandler = () => deleteItemFromCart(product);
    const removeItemHandler = () => removeItemFromCart(product);
    const addItemHandler = () => addItemToCart(product);

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
