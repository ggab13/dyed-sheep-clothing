import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { ProductsContainer } from './shop.styles';

const Shop = () => {
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
