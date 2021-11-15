import gridStyle from './CategoryGrid.module.scss';

import CategoryCard, {iCategory} from '@/element/CategoryCard/CategoryCard';

interface Props {
    items: iCategory[]
}

export default function CategoryGrid(props: Props) {
    return (
        <section className={gridStyle.categoryGrid}>
            <div className={gridStyle.title}>
                <span>محصولات ما </span>
                <h2>
                    دسته بندی اصلی محصولات
                </h2>
            </div>
            <div className={gridStyle.gridDisplay}>
                {props.items.map(item => {
                    return (
                        <CategoryCard key={item.title} title={item.title} image={item.image} count={item.count}  />
                   );
                })}

                <div className={gridStyle.browse}>
                    <span>مشاهده همه دسته بندی‌های</span>
                    <i className='bx bxs-left-arrow-circle bx-md'></i>
                </div>
            </div>
        </section>
    )
 }