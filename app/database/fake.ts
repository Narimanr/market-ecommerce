import { iCard } from '@/element/Card/Card';
import { iCategory } from '@/element/CategoryCard/CategoryCard';
import { iSpecialCard, Colors } from '@/element/SpecialCard/SpecialCard';
import { Slide } from '@/components/element/Carousel/Carousel'; 


export const DUMMY_SLIDES: Slide[] = [
    {
      id: '1',
      url: "/images/hero/visual-stories-micheile-TqQoPFLhpjA-unsplash.jpg"
    },
    {
      id: '2',
      url: "/images/hero/denny-muller-mGP8gyGb8zY-unsplash.jpg"
    },
    {
      id: '3',
      url: "/images/hero/dmitry-mashkin-N5fp98wt6h8-unsplash.jpg"
    },
    {
      id: '4',
      url: "/images/hero/janko-ferlic-h9Iq22JJlGk-unsplash.jpg"
    },
     {
      id: '5',
      url: "/images/hero/maddi-bazzocco-Hz4FAtKSLKo-unsplash.jpg"
    },
    {
      id: '6',
      url: "/images/hero/monique-carrati---uvxmcdMv4-unsplash.jpg"
    },
    {
      id: '7',
      url: "/images/hero/maria-lin-kim-8RaUEd8zD-U-unsplash.jpg"
    }
   ];
  
export const DUMMY_CATEGORIES: iCategory[] = [
    {
      title: 'سوپر مارکتی',
      count: '21',
      image: '/images/categories/basket.png'
    },
    {
      title: 'ادویه‌جات',
      count: '24',
      image: '/images/categories/spices.png',
      },
     {
      title: 'گوشت',
      count: '8',
      image: '/images/categories/meat.png',
      },
      {
        title: 'شکلات',
        count: '19',
        image: '/images/categories/nutella.png',
      },
      {
        title: 'نوشیدنی',
        count: '32',
        image: '/images/categories/red-bull-can.png',
      },
      {
        title: 'سس',
        count: '52',
        image: '/images/categories/ketchup.png',
      },
      {
        title: 'قهوه',
        count: '18',
        image: '/images/categories/cup-of-coffee.png',
      },
      {
        title: 'غذای حیوانات',
        count: '36',
        image: '/images/categories/dogmeat.png',
      },
  ];

export const DUMMY_ITEMS: iCard[] = [
    {
      id: '1',
      title: 'بسته ۶تایی دونات',
      image: '/images/products/donut.png',
      category: 'نان و شیرینی',
      price: '۵۰،۰۰۰',
      oldPrice: '۶۵،۰۰۰'
    },
    {
      id: '2',
      title: 'گونی برنج',
      image: '/images/products/rice.png',
      category: 'سوپر مارکتی',
      price: '۱،۱۴۵،۰۰۰',
      
    },
    {
      id: '3',
      title: 'سس باربیکیو هاینز',
      image: '/images/products/heinz-bbq.png',
      category: 'سوپر مارکتی',
      price: '۸۳،۰۰۰'
    },
    {
      id: '4',
      title: 'لیپتون آیس تی پک ۱۰ تایی',
      image: '/images/products/lipton-ice-tea.png',
      category: 'سوپر مارکتی',
      price: '۴۵،۰۰۰'
    }
  ];

export const DUMMY_SPECIAL_ITEMS: iSpecialCard[] = [
    {
      title: 'سبزی تازه',
      subtitle: 'محصولات جدید',
      image: '/images/products/vegetables.png',
      color: Colors.Green
    },
    {
      title: 'نان و شیرینی',
      subtitle: 'محصولات تازه',
      image: '/images/products/bread.png',
      color: Colors.Orange
    },
    {
      title: 'قهوه استارباکس',
      subtitle: 'پرفروش ترین',
      image: '/images/products/coffee.png',
      color: Colors.Grey
    },
    {
      title: 'کیت کت روزانه',
      subtitle: 'پرفروش ترین',
      image: '/images/products/kitkat.png',
      color: Colors.DarkBlue
    },
  ];

export  const DUMMY_SPECIAL_ITEMS_2: iSpecialCard[] = [
     {
      title: 'جعبه دوریتوس ۶ تایی',
      subtitle: 'تند و آتشین',
      image: '/images/products/doritos-bag.png',
      color: Colors.Grey
    },
     {
      title: 'پک سریال',
      subtitle: 'صبحانه کامل',
      image: '/images/products/cereal-pack.png',
      color: Colors.Orange
     },
      {
      title: 'سالامی',
      subtitle: '۱۰۰٪ طبیعی',
      image: '/images/products/salami.png',
    }
  ];