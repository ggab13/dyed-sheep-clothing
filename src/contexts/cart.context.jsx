import { useState, createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

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

export const CART_ACTION_TYPE = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
};

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};
const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload,
            };
        case 'SET_IS_CART_OPEN':
            return {
                ...state,
                isCartOpen: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
};

export const CartProvider = ({ children }) => {
    /*   const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0); */

    const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
        useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );

        const newCartTotal = newCartItems.reduce((total, cartItem) => {
            return total + cartItem.price * cartItem.quantity;
        }, 0);

        dispatch({
            type: 'SET_CART_ITEMS',
            payload: {
                cartItems: newCartItems,
                cartTotal: newCartTotal,
                cartCount: newCartCount,
            },
        });
    };

    /*   const setCartItems = (cartItems) => {
        dispatch({
            type: CART_ACTION_TYPE.ADD_ITEM_TO_CART,
            payload: cartItems,
        });
    }; */

    /*   // Better practice to use useEffect for each occurence
       useEffect(() => {
        const newCartQuantity = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartQuantity(newCartQuantity);
    }, [cartItems]);

    useEffect(() => {
        const totalPrice = cartItems.reduce((prevVal, currentVal) => {
            return prevVal + currentVal.price * currentVal.quantity;
        }, 0);
        setTotalPrice(totalPrice);
    }, [cartItems]); */

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };

    const removeItemFromCart = (itemToRemove) => {
        const newCartItems = removeCartItem(cartItems, itemToRemove);
        updateCartItemsReducer(newCartItems);
    };
    const deleteItemFromCart = (itemToDelete) => {
        const newCartItems = deleteCartItem(cartItems, itemToDelete);
        updateCartItemsReducer(newCartItems);
    };

    const setIsCartOpen = (bool) => {
        dispatch({ type: 'SET_IS_CART_OPEN', payload: bool });
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
        cartItems,
        cartCount,
        cartTotal,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
