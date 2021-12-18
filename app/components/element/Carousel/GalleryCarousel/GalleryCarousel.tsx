import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import carouselStyle from './GalleryCarousel.module.scss';

// import Swiper core and required modules
import SwiperCore, {Pagination,Navigation} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

// Import Interface
import {iSlide} from '@/interfaces/Interfaces';

interface PageProps {
    items: iSlide[]
}


export default function GalleryCarousel(props: PageProps) {

    return (
        <div className={carouselStyle.imageSlider}>
            <Swiper
                className={carouselStyle.swiper}
                slidesPerView={1}
                loop={true}
                pagination={{ "clickable": true }}
                navigation={true}
                dir="rtl"
                observer={true}
                observeParents={true}
            >
                {props.items.map(item => {
                    return (
                        <SwiperSlide key={item.id} className={carouselStyle.swiperSlide}>
                            <Image src={item.url} layout="fill" alt="carousel image" />
                        </SwiperSlide>
                    );
                }) }
            </Swiper>
        </div>
   
    );
}