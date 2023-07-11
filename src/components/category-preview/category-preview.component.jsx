import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles';
import { PreviewContainer, Preview, Title } from './category-preview.styles';
const CategoryPreview = ({ title, products }) => {
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
