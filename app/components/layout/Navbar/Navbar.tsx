import Link from 'next/link';
import Image from 'next/image';

import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">
                    <a href="/">
                        <Image src="/images/electro-logo.png" alt="electro Logo" width={100} height={45} objectFit="contain" />
                    </a>
                </Link>
            </div>
            <div className={styles.links}>
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
            <div className={styles.contact}>
                <span>+۹۸-۱۲۳۴۵۶۷۸۹</span>
            </div>
        </nav>
    );
}