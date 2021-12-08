import gridStyle from './ProductGrid.module.scss';

// Import Intercace
import {iProduct} from '@/interfaces/Interfaces';

// Import enum
import { Banner } from '@/enums/Enums';

import Card from '@/element/Card/ProductCard/ProductCard';

interface Props {
    title?: string,
    items: iProduct[]
}

export default function ProductGrid(props: Props) {
    return (
        <section className={gridStyle.productGrid}>
            <h2>
                {props.title}
            </h2>

            <div className={gridStyle.gridDisplay}>
                {props.items.map(item => {
                    return (
                        <Card key={item.id} id={item.id} title={item.title} category={item.category} catSlug={item.catSlug} price={item.price} oldPrice={item.oldPrice} image={item.image} banner={Banner.Special}  />
                   );
                })}
            </div>
        </section>
    )
 }