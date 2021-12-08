import Link from 'next/link';
import Image from 'next/image';


import cardStyle from './ProductCard.module.scss';

// Import Interface
import {iProduct} from '@/interfaces/Interfaces';

// Import Enum
import { Banner } from '@/enums/Enums';



export default function ProductCard(props: iProduct) {
  var bannerElement;
      switch (props.banner) {
        case Banner.Off:
          bannerElement = (
            <div className={cardStyle.bannerOff}>
              <span>تخفیف خورده</span>
            </div>
          );
           break;
        case Banner.Special:
          bannerElement = (
            <div className={cardStyle.bannerSpecial}>
              <span>ویژه</span>
            </div>
          );
          break;
        case Banner.Popular:
          bannerElement = (
            <div className={cardStyle.bannerPopular}>
              <span>محبوب</span>
            </div>
          );
          break;
        default:
          bannerElement = null;
  };


  return (
    <Link
      href={`/${encodeURIComponent(props.catSlug)}/${encodeURIComponent(props.id)}`}
    >
      <a href={`/${encodeURIComponent(props.catSlug)}/${encodeURIComponent(props.id)}/`}>
        <div className={cardStyle.card}>
            <div className={cardStyle.cardHeader}>
            {bannerElement}
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
                <span className={cardStyle.currency}>تومان</span>
              </div>
            </div>
          </div>
        </div>
        </a>
      </Link>
    );
}