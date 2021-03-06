import Link from 'next/link';
import Image from 'next/image';


import cardStyle from './FrequentCard.module.scss';

import {iProduct} from '@/interfaces/Interfaces';


export default function FrequentCard(props: iProduct) {
  return (
    <Link
    href={`/${encodeURIComponent(props.catSlug)}/${encodeURIComponent(props.id)}`}
    >
      <a href={`/${encodeURIComponent(props.catSlug)}/${encodeURIComponent(props.id)}/`}>
        <div className={cardStyle.card}>
          <div className={cardStyle.cardHeader}>
          </div>
            <div className={cardStyle.cardBody}>
              <div className={cardStyle.imageBox}>
              <Image src={props.image} alt="product image" layout="fill" objectFit="contain" priority={true} />
              </div>
            <div className={cardStyle.text}>
              <span className={cardStyle.category}>
                {props.category}
              </span>
              <span className={cardStyle.title}>
                {props.title}
              </span>
              </div>
            </div>
            <div className={cardStyle.cardFooter}>
            <button className={cardStyle.cartButton}>
              <i className='bx bxs-shopping-bag-alt bx-md'></i>
            </button>
          
            <div className={cardStyle.price}>
              <span className={cardStyle.old}>
                {props.oldPrice}
              </span>
              <div className={cardStyle.current}>
                <span className={cardStyle.number}>{ props.price }</span>
                <span className={cardStyle.currency}>تومانء</span>
              </div>
            </div>
          </div>
        </div>
        </a>
      </Link>
    );
}