import { useState, createContext, useEffect } from 'react';

import {
    addCollectionAndDocuments,
    getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils.js';

import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap };

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            //console.log(categoryMap);
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    // Its commented out because once it was enough to commit data
    /*  useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA);
    }, []);
 */
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
