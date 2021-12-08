import styles from './Category.module.scss';

// Import Interface
import { iProduct} from '@/interfaces/Interfaces';

import ProductGrid from '@/components/layout/Grid/ProductGrid/ProductGrid';


interface PageProps {
    title: string;
    items: iProduct[];
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