import gridStyle from './FrequentGrid.module.scss';

// Import Interface
import {iProduct} from '@/interfaces/Interfaces';

// Import Component
import FrequentCard from '@/components/element/Card/FrequentCard/FrequentCard';

interface Props {
    title: string,
    items: iProduct[]
}

export default function FrequentGrid(props: Props) {
    return (
        <section className={gridStyle.frequentGrid}>
            <h2>
                {props.title}
            </h2>

            <div className={gridStyle.gridDisplay}>
                {props.items.map(item => {
                    return (
                        <div className={gridStyle.item}>
                            <FrequentCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            category={item.category}
                            catSlug={item.catSlug}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            image={item.image}
                            />
                            <div className={gridStyle.plus}>
                                <i className="bx bx-plus"></i>
                            </div>
                        </div>
                        
                   );
                })}
            </div>
        </section>
    )
 }