import styles from './Product.module.scss';

// Import Interface
import {iProduct} from '@/interfaces/Interfaces';
import ProductInfo from '@/layout/ProductInfo/ProductInfo';
import FrequnetGrid from '@/components/layout/Grid/FrequentGrid/FrequentGrid';
import ProductCarousel from '@/layout/ProductCarousel/ProductCarousel';


interface PageProps {
    title: string;
    image: string;
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