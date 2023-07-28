import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === itemToRemove.id
    );

    if (existingCartItem.quantity == 1) {
        return cartItems.filter((item) => item.id !== itemToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === itemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const deleteCartItem = (cartItems, itemToDelete) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === itemToDelete.id
    );

    if (existingCartItem) {
        return cartItems.filter((item) => item.id !== itemToDelete.id);
    }
};

export const setIsCartOpen = (boolean) => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const deleteItemFromCart = (cartItems, itemToDelete) => {
    const newCartItems = deleteCartItem(cartItems, itemToDelete);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
