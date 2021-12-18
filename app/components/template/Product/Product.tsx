import styles from './Product.module.scss';

// Import Interface
import {iProduct} from '@/interfaces/Interfaces';
import ProductInfo from '@/layout/ProductInfo/ProductInfo';
import FrequnetGrid from '@/components/layout/Grid/FrequentGrid/FrequentGrid';
import ProductCarousel from '@/components/layout/Carousel/ProductCarousel/ProductCarousel';


interface PageProps {
    title: string;
    id: string;
    image: string;
    gallery?: string[];
    price: string;
    oldPrice?: string;
    description: string;
    category: string;
    catSlug: string;
    tags: string;
    frequentItems?: iProduct[];
    similarItems?: iProduct[];
};


export default function Product(props: PageProps) {
    return (
        <div className={styles.ProductGrid}>
            <div className={styles.info}>
                <ProductInfo
                    id={props.id}
                    title={props.title}
                    image={props.image}
                    price={props.price}
                    oldPrice={props.oldPrice}
                    description={props.description}
                    category={props.category}
                    catSlug={props.catSlug}
                    tags={props.tags}
                />
            </div>
            <div className={styles.together}>
                {props.frequentItems && (
                <FrequnetGrid title="معمولا با هم خریداری می‌شوند" items={props.frequentItems} />
                )}
            </div>
            <div className={styles.related}>
                {props.similarItems && (
                    <ProductCarousel title="محصولات مشابه" items={props.similarItems} />
                )}
            </div>
        </div>
    );
}