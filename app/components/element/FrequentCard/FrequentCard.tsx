import Link from 'next/link';
import Image from 'next/image';


import cardStyle from './FrequentCard.module.scss';


export interface iCard {
    id: string, 
    category: string,
    title: string,
    price: string,
    oldPrice?: string,
    image: string,
    banner?: string
};



export default function FrequentCard(props: iCard) {
  return (
      <Link href={`/product/${encodeURIComponent(props.id)}`}>
      <a href={`/product/${encodeURIComponent(props.id)}`}>
        <div className={cardStyle.card}>
          <div className={cardStyle.cardHeader}>
          </div>
            <div className={cardStyle.cardBody}>
              <div className={cardStyle.imageBox}>
              <Image src={props.image} alt="product image" layout="fill" objectFit="contain" />
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
                <span className={cardStyle.currency}>تومان</span>
              </div>
            </div>
          </div>
        </div>
        </a>
      </Link>
    );
}