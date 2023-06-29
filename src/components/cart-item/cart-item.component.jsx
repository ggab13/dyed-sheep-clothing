import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${name}`}></img>
            <div className="item-details">{name}</div>
            <span className="price">
                {quantity} x ${price}
            </span>
        </div>
    );
};

export default CartItem;
