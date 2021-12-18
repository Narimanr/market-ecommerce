import Image from 'next/image';
import { useState } from 'react';

import cardStyle from './CartItemCard.module.scss';

// Import Interface
import {iProduct} from '@/interfaces/Interfaces';


export default function CartItem(props: iProduct) {
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

  return (
            <div className={cardStyle.cartItem}>
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
                    <div className={cardStyle.quantity}>
                        <div className={cardStyle.buttons}>
                            <button onClick={decrement}>
                                <i className="bx bx-minus"></i>
                            </button>
                            <span>{qty}</span>
                            <button onClick={increment}>
                                <i className="bx bx-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className={cardStyle.price}>
                        <span className={cardStyle.old}>
                            {props.oldPrice}
                        </span>
                        <div className={cardStyle.current}>
                            <span className={cardStyle.number}>{ props.price }</span>
                            <span className={cardStyle.currency}>تومانء</span>
                        </div>
                    </div>
              
                    <button type="button" className={cardStyle.delete}>
                        <i className="bx bxs-trash"></i>
                    </button>
                    
                </div>
                  
                  
            </div>
    );
}