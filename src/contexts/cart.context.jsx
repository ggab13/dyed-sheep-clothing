import { useState, createContext, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    //if found, ++ quantity

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    //return new array with modified cartItems / new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
    // find if cartItems contains itemToRemove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === itemToRemove.id
    );

    //if quanbtity is 0 remove

    /*  if (existingCartItem.quantity == 1) {
        return cartItems.map((cartItem) =>
            cartItem.id === itemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    } else {
        console.log(itemToRemove.quantity);
        return cartItems.filter((item) => item.id !== itemToRemove.id);
    } */

    if (existingCartItem.quantity == 1) {
        return cartItems.filter((item) => item.id !== itemToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === itemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );

    //return new array with modified cartItems / new cart item
    // return [...cartItems, { ...itemToRemove, quantity: 1 }];
};

const deleteCartItem = (cartItems, itemToDelete) => {
    // find if cartItems contains itemToRemove

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === itemToDelete.id
    );

    //if found, -- quantity

    if (existingCartItem) {
        return cartItems.filter((item) => item.id !== itemToDelete.id);
    }
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartQuantity(cartQuantity + 1);
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemFromCart = (itemToRemove) => {
        setCartItems(removeCartItem(cartItems, itemToRemove));
    };
    const deleteItemFromCart = (itemToDelete) => {
        setCartItems(deleteCartItem(cartItems, itemToDelete));
    };

    // Better practice to use useEffect for each occurence
    useEffect(() => {
        const newCartQuantity = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartQuantity(newCartQuantity);

        /*    const totalPrice = cartItems.reduce((prevVal, currentVal) => {
            return prevVal + currentVal.price * currentVal.quantity;
        }, 0);
        setTotalPrice(totalPrice); */
    }, [cartItems]);

    useEffect(() => {
        /*  const newCartQuantity = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartQuantity(newCartQuantity); */

        const totalPrice = cartItems.reduce((prevVal, currentVal) => {
            return prevVal + currentVal.price * currentVal.quantity;
        }, 0);
        setTotalPrice(totalPrice);
    }, [cartItems]);

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
        cartItems,
        cartQuantity,
        totalPrice,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
