import styles from './Product.module.scss';

// Interfaces
import { iCard } from '@/element/Card/Card';
import ProductInfo from '@/layout/ProductInfo/ProductInfo';
import FrequnetGrid from '@/layout/FrequentGrid/FrequentGrid';
import ProductCarousel from '@/layout/ProductCarousel/ProductCarousel';


interface PageProps {
    title: string;
    image: string;
    price: string;
    oldPrice?: string;
    description: string;
    category: string;
    tags: string;
    frequentItems?: iCard[];
    similarItems?: iCard[];
    
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