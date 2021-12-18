import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addItem } from '@/redux/features/Cart/CartSlice';


import styles from './ProductInfo.module.scss';

interface Props {
    id: string;
    title: string;
    image: string;
    gallery?: string[];
    price: string;
    oldPrice?: string;
    tags: string;
    category: string;
    catSlug: string;
    description: string;
}

export default function ProductInfo(props: Props) {
    const [qty, setqty] = useState(1);
    const increment = () => {
        setqty(qty + 1);
    }
    const decrement = () => {
        if (qty == 1) {
            setqty(1);
        } else {
            setqty(qty - 1);
        }
    }
    const dispatch = useAppDispatch();

    const handleClick = () => {
        const payload = {
            id: props.id,
            quantity: qty
        }
        dispatch(addItem(payload));
    }

    

    return (
        <section className={styles.infoGrid}>
            
            <div className={styles.image}>
                <div className={styles.imageBox}>
                    {props.gallery ? (
                        <div>image gallery</div>
                    ) : (
                            <Image src={props.image} alt="product image" layout="fill" objectFit="contain" />
                    )}
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.infoHeader}>
                    <ul className={styles.breadcrumbs}>
                        <li>
                            <Link href="/">
                                <a href="/">خانه</a>
                            </Link>        
                        </li>
                        <li>
                            <Link href={`/${props.catSlug}`}>
                                <a href={`/${props.catSlug}/`}>
                                    {props.category}
                                </a>
                           </Link>        
                        </li>
                        <li>{props.title}</li>
                    </ul>
                    <h1>{props.title}</h1>

                    <div className={styles.price}>
                        <span className={styles.oldPrice}>
                            {props.oldPrice}
                        </span>
                        {props.price}
                        <span className={styles.currency}>تومان</span>
                    </div>
                </div>

                <div className={styles.addProduct}>
                    <div className={styles.quantity}>
                        <span>تعداد:</span>
                        <div className={styles.buttons}>
                            <button onClick={decrement}>
                                <i className="bx bx-minus"></i>
                            </button>
                            <span>{qty}</span>
                            <button onClick={increment}>
                                <i className="bx bx-plus"></i>
                            </button>
                        </div>
                    </div>
                    <Link href="/cart">
                        <button className={styles.cartButton} onClick={handleClick}>
                            <i className='bx bxs-shopping-bag-alt bx-md'></i>
                            <span>اضافه کردن به سبد خرید</span>
                        </button>
                    </Link>
                   
                </div>

                <hr />
                
                <div className={styles.meta}>
                    <div>
                        <span>دسته بندی:</span>
                        <Link href="/">
                            <a href="/">
                                {props.category}
                            </a>
                        </Link>
                    </div>

                    <div>
                        <span>برچسپ‌ها: </span>
                        {props.tags}
                    </div>
                </div>
               
            </div>

            <div className={styles.experience}>
                <div className={styles.featureBox}>
                    <div className={styles.featureItem}>
                        <div className={styles.featureIcon}>
                            <i className='bx bxs-truck'></i>
                        </div>
                        <div className={styles.featureInfo}>
                            <span className={styles.featureTitle}>ارسال سریع</span>
                            <span className={styles.featureSubtitle}>همه روزه</span>
                        </div>
                    </div>

                    <div className={styles.featureItem}>
                        <div className={styles.featureIcon}>
                            <i className='bx bxs-badge-check'></i>
                        </div>
                        <div className={styles.featureInfo}>
                            <span className={styles.featureTitle}>کیفیت تضمین شده</span>
                            <span className={styles.featureSubtitle}>توسط متخصصین</span>
                        </div>
                    </div>

                    <div className={styles.featureItem}>
                        <div className={styles.featureIcon}>
                            <i className='bx bxs-wallet'></i>
                        </div>
                        <div className={styles.featureInfo}>
                            <span className={styles.featureTitle}>قیمت تضمین شده</span>
                            <span className={styles.featureSubtitle}>هوادار جیب شما</span>
                        </div>
                    </div>
                </div>
                
                <div className={styles.hotline}>
                    <div>
                        <span>فروش عمده:</span>
                        <span className={styles.days}>
                            از شنبه تا پنجشنبه - ۹ الی ۱۷
                        </span>
                    </div>
                    <span className={styles.number}>
                        <a href="tel:+982123456789">021 - 23456789</a>
                    </span>
                </div>
                <div className={styles.affiliate}>
                    <span>علاقه مند به مشارکت در فروش هستین؟</span>
                    <a href="mailto:affiliate@supermarket.com">ایمیلی بفرستید</a>
                </div>
            </div>
        </section>
    )
 }