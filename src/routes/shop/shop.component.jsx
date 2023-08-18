import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { ProductsContainer } from './shop.styles';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';
import { fetchCategoriesAsync } from '../../store/categories/category.action';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, []);
    return (
        <ProductsContainer>
            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=":category" element={<Category />} />
            </Routes>
        </ProductsContainer>
    );
};

export default Shop;
