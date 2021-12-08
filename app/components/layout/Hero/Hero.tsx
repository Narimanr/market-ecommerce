import styles from './Hero.module.scss';

import { iSlide } from '@/interfaces/Interfaces';
import Carousel from '@/element/Carousel/Carousel';

interface Props {
    items: iSlide[]
}

export default function Hero(props: Props) {
    return (
        <div className={styles.hero}>
            <div className={styles.heroSlider}>
                <Carousel items = {props.items} />
            </div>
        </div>
    );
    
}