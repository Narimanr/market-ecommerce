import Link from 'next/link';

import styles from './Cart.module.scss';

// Interfaces
import { iCard } from '@/element/Card/Card';

// Components
import CartItem from '@/element/CartItem/CartItem';


interface PageProps {
    items: iCard[];
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
                                <div className={styles.item}>
                                    <CartItem
                                        key={item.id}
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
                        <div className={styles.rows}>
                            <div className={styles.subtotal}>
                                <span className={styles.text}>مجموع</span>
                                <div className={styles.number}>
                                    <span >۱،۳۰۸،۰۰۰</span>
                                    <span className={styles.currency}>
                                        تومان
                                    </span>
                                </div>
                            </div>
                            <div className={styles.discount}>
                                <span className={styles.text}>تخفیف</span>
                                <div className={styles.number}>
                                    <span >۳۵،۰۰۰</span>
                                    <span className={styles.currency}>
                                        تومان
                                    </span>
                                </div>
                            </div>
                            <div className={styles.shipping}>
                                <span className={styles.text}>هزینه ارسال</span>
                                <div className={styles.number}>
                                    <span >۵۰،۰۰۰</span>
                                    <span className={styles.currency}>
                                        تومان
                                    </span>
                                </div>
                            </div>
                            <div className={styles.total}>
                                <span className={styles.text}>قابل پرداخت</span>
                                    <div className={styles.number}>
                                        <span >۱،۳۵۸،۰۰۰</span>
                                        <span className={styles.currency}>
                                            تومان
                                        </span>
                                    </div>
                            </div>
                        </div>


                        <Link href="/checkout">
                            <button className={styles.proceedButton}>
                                <div className={styles.price}>
                                    <span >۱،۳۵۸،۰۰۰</span>
                                    <span className={styles.currency}>
                                        تومان
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