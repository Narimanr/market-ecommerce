import Image from 'next/image'

// Import Interface
import {iSpecial} from '@/interfaces/Interfaces';

// import Enum
import { Color } from '@/enums/Enums';

import cardStyle from './SpecialCard.module.scss';



export default function SpecialCard(props: iSpecial) {
    var cardColor = cardStyle.special;
    switch (props.color) {
        case Color.Grey:
            cardColor = cardStyle.specialGrey;
            break;
        case Color.Green:
            cardColor = cardStyle.specialGreen;
            break;
        case Color.Purple:
            cardColor = cardStyle.specialPurple;
            break;
         case Color.Orange:
            cardColor = cardStyle.specialOrange;
            break;
        case Color.DarkBlue:
            cardColor = cardStyle.specialDarkBlue;
            break;
        case Color.Blue:
            cardColor = cardStyle.special;
            break;
        default:
            cardColor = cardStyle.special;
    }

    return (
        <div className={cardColor}>
            <div className={cardStyle.specialHeader}>
                <span className={cardStyle.subtitle}>{props.subtitle}</span>
            </div>
            <div className={cardStyle.specialBody}>
                <span className={cardStyle.title}>{props.title}</span>
                <div className={cardStyle.imageBox}>
                    <Image src={props.image} alt="product image" layout="fill" objectFit="contain"  objectPosition="left" priority={true} />
                </div>
            </div>
        </div>
    );
};