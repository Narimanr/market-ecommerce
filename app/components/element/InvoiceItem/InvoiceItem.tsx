import Image from 'next/image';

import cardStyle from './InvoiceItem.module.scss';


export interface iCard {
    id: string, 
    category: string,
    title: string,
    price: string,
    oldPrice?: string,
    image: string,
    banner?: string
};



export default function InvoiceItem(props: iCard) {


  return (
            <div className={cardStyle.invoiceItem}>
                <div className={cardStyle.info}>
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
                  
                  <div className={cardStyle.priceSection}>
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
    );
}