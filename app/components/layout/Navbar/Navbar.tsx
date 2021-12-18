import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { useAppSelector } from '@/redux/hooks';


import styles from './Navbar.module.scss';


export default function Navbar() {
    const cartCount = useAppSelector((state) => state.cart.items.length);
    const [open, setOpen] = useState(false);
    var menuClass = '';
    if (open) {
         menuClass = styles.active;
    } 


    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">
                    <a href="/">
                        <Image src="/images/logo/vorna-mart-logo-color.png" alt="لوگو ورنا مارت" width={100} height={35} objectFit="contain" />
                    </a>
                </Link>

                <div className={styles.dropDown}>
                    	<div className={styles.dropDownIcon}>
                            <input className={styles.dropDownButton} type="checkbox" onClick={() => setOpen(!open)} />
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                </div>
            </div>
            <div className={`${styles.links} ${menuClass}`}>
                <ul>
                    <li className={styles.active}>
                        <Link href="/">
                            خانه
                        </Link>
                    </li>
                    <li>تماس با ما</li>
                    <li>درباره ما</li>
                </ul>
            </div>
            <div className={styles.actions}>
                <div className={styles.user}>
                    <Link href="/auth/login">
                            <i className='bx bxs-user'></i>
                    </Link>
                </div>
                <div className={styles.cart}>
                    <Link href="/cart">
                        <div>
                            {cartCount > 0 ? (<span  className={styles.count}>{ cartCount }</span>) : null}
                            <i className='bx bxs-basket'></i>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}