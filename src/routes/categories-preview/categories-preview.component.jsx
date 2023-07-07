import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
//import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import './categories-preview.styles.scss';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <div className="category-preview-container">
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
        </div>
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
