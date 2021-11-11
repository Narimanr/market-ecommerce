import styles from './Hero.module.scss';

import Carousel, { Slide } from '@/element/Carousel/Carousel';

interface Props {
    items: Slide[]
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