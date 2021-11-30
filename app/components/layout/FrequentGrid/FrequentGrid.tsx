import gridStyle from './FrequentGrid.module.scss';

import FrequentCard, {iCard} from '@/element/FrequentCard/FrequentCard';

interface Props {
    title: string,
    items: iCard[]
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