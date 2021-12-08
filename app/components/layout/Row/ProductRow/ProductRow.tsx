import rowStyle from './ProductRow.module.scss';

// Import Interface
import {iProduct} from '@/interfaces/Interfaces';

// Import Enums
import {Banner} from '@/enums/Enums';

import Card from '@/element/Card/ProductCard/ProductCard';

interface Props {
    title: string,
    items: iProduct[]
}

export default function ProductRow(props: Props) {
    return (
        <section className={rowStyle.productRow}>
            <h2>
                {props.title}
            </h2>

            <div className={rowStyle.rowDisplay}>
                {props.items.map(item => {
                    return (
                        <Card key={item.id} id={item.id} title={item.title} category={item.category} catSlug={item.catSlug} price={item.price} oldPrice={item.oldPrice}  image={item.image} banner={Banner.Off}  />
                    );
                })}
            </div>
        </section>
    )
 }