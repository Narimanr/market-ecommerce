import Link from 'next/link';

import styles from './Cart.module.scss';

// Interfaces
import  {iProduct}  from '@/interfaces/Interfaces';

// Components
import CartItem from '@/element/CartItemCard/CartItemCard';
import InvoiceSummary from '@/element/InvoiceSummary/InvoiceSummary';


interface PageProps {
    items: iProduct[];
};


export default function Cart(props: PageProps) {
    return (
        <div className={styles.CartGrid}>
            <div className={styles.items}>
                <div className={styles.wrapper}>
                    <div className={styles.cart}>
                        <div className={styles.back}>
                            <i className="bx bx-arrow-back bx-flip-horizontal"></i>
                            <span>ادامه خرید</span>
                        </div>
                        <span className={styles.header}>سبد خرید</span>
                        {props.items.map(item => {
                            return (
                                <div className={styles.item} key={item.id}>
                                    <CartItem
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        oldPrice={item.oldPrice}
                                        category={item.category}
                                        catSlug={item.catSlug}
                                        image={item.image}
                                    />
                                </div>
                            )
                        })}
                    </div>

                    <div className={styles.summary}>
                        <InvoiceSummary
                            subtotal={'۱،۳۰۸،۰۰۰'}
                            total={'۱،۳۵۸،۰۰۰'}
                            discount={'۳۵،۰۰۰'}
                            shipping={'۵۰،۰۰۰'}
                        />

                        <Link href="/order/shipping">
                            <button className={styles.proceedButton}>
                                <div className={styles.price}>
                                    <span >۱،۳۵۸،۰۰۰</span>
                                    <span className={styles.currency}>
                                        تومانء
                                    </span>
                                </div>
                                <div className={styles.text}>
                                    <span>ثبت سفارش</span>
                                    <i className='bx bx-arrow-back'></i>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}