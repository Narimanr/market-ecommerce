import styles from './Category.module.scss';

// Interfaces
import { iCard } from '@/element/Card/Card';
import ProductGrid from '@/layout/ProductGrid/ProductGrid';


interface PageProps {
    title: string;
    items: iCard[];
};


export default function Product(props: PageProps) {
    return (
        <div className={styles.CategoryGrid}>
            <div className={styles.info}>
                <ProductGrid items={props.items} title={props.title} />
            </div>
        </div>
    );
}