import { useState, createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
    signOutUser,
} from '../utils/firebase/firebase.utils';
// Value to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPE = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
};

const INITIAL_STATE = {
    currentUser: null,
};

export const UserProvider = ({ children }) => {
    /*     const [currentUser, setCurrentUser] = useState(null); */

    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user));
    };

    //signOutUser();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    const value = { currentUser, setCurrentUser };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
