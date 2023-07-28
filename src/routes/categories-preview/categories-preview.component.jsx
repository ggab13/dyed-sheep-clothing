import { useContext, Fragment } from 'react';
import { useSelector } from 'react-redux';
// import { CategoriesContext } from '../../contexts/categories.context';
//import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { PreviewContainer, Preview, Title } from './categories-preview.styles';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <PreviewContainer>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview
                        key={title}
                        title={title}
                        products={products}
                    />
                );
            })}
        </PreviewContainer>
        /*    <Fragment>
            {Object.keys(categoriesMap).map((title) => (
                <Fragment>
                    <h2>{title}</h2>
                    <div className="products-container">
                        {categoriesMap[title].map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </Fragment>
            ))}
        </Fragment> */
    );
};

export default CategoriesPreview;
