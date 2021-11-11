import Image from 'next/image'

import cardStyle from './SpecialCard.module.scss';

export const enum Colors  {
    Orange = 'Orange',
    Green = 'Green',
    Purple = 'Pirple',
    Grey = 'Grey',
    Blue = 'Blue',
    DarkBlue = 'DarkBlue'
};

export interface iSpecialCard {
    title: string,
    subtitle: string,
    image: string,
    color?: string
};

export default function SpecialCard(props: iSpecialCard) {
    var cardColor = cardStyle.special;
    switch (props.color) {
        case Colors.Grey:
            cardColor = cardStyle.specialGrey;
            break;
        case Colors.Green:
            cardColor = cardStyle.specialGreen;
            break;
        case Colors.Purple:
            cardColor = cardStyle.specialPurple;
            break;
         case Colors.Orange:
            cardColor = cardStyle.specialOrange;
            break;
        case Colors.DarkBlue:
            cardColor = cardStyle.specialDarkBlue;
            break;
        case Colors.Blue:
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
                    <Image src={props.image} alt="product image" layout="fill" objectFit="contain"  objectPosition="left" />
                </div>
            </div>
        </div>
    );
};