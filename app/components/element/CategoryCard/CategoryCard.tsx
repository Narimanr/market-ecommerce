import Link from 'next/link';
import Image from 'next/image'

import cardStyle from './CategoryCard.module.scss';

export interface iCategory {
    title: string,
    slug: string,
    count: string,
    image: string,
};

export default function CategoryCard(props: iCategory) {

    return (
        <Link href={`/${encodeURIComponent(props.slug)}`}>
            <a href={`/${encodeURIComponent(props.slug)}/`}>
                <div className={cardStyle.category}>
                    <div className={cardStyle.categoryBody}>
                        <span className={cardStyle.title}>{props.title}</span>
                        <span className={cardStyle.count}>
                            {props.count}
                            {" "}
                            محصول
                        </span>
                        <div className={cardStyle.imageBox}>
                            <Image src={props.image} alt="product image" layout="fill" objectFit="contain"  objectPosition="left" />
                        </div>
                    </div>
                    <div className={cardStyle.categoryFooter}>
                        <i className='bx bxs-left-arrow-circle bx-md'></i>
                    </div>
                </div>
            </a>
        </Link>    
    );
};