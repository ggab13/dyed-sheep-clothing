import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles';
import { PreviewContainer, Preview, Title } from './category-preview.styles';
import Spinner from '../spinner/spinner.component';
import { selectCategoriesIsLoading } from '../../store/categories/category.selector';
const CategoryPreview = ({ title, products }) => {
    const isLoading = useSelector(selectCategoriesIsLoading);
    return (
        <PreviewContainer>
            <h2>
                <Link to={title}>
                    <Title>{title.toUpperCase()}</Title>
                </Link>
            </h2>
            <Preview>
                {products
                    .filter((_, index) => index < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </Preview>
        </PreviewContainer>
    );
};
export default CategoryPreview;
