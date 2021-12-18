import Image from 'next/image';

import cardStyle from './InvoiceItem.module.scss';


// Import Interface
import {iProduct} from '@/interfaces/Interfaces';



export default function InvoiceItem(props: iProduct) {


  return (
        <div className={cardStyle.invoiceItem}>
            <div className={cardStyle.info}>
                <div className={cardStyle.imageBox}>
                    <Image src={props.image} alt="product image" layout="fill" objectFit="contain" />
                </div>
                <div className={cardStyle.text}>
                    <span className={cardStyle.title}>
                        {props.title}
                  </span>
                  <div className={cardStyle.quantity}>
              <span>تعداد:</span>
              <span>3</span>
            </div>
                </div>
            </div>
        
          
                
                <div className={cardStyle.priceSection}>
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
    );
}