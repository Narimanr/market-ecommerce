// Import Interface
import {iProduct, iCategory, iSlide, iSpecial} from '@/interfaces/Interfaces';


// Import enums
import {Color} from '@/enums/Enums';


export const DUMMY_SLIDES: iSlide[] = [
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
      slug: 'supermarket',
      count: '21',
      image: '/images/categories/basket.png'
    },
    {
      title: 'ادویه‌جات',
      slug: 'spices',
      count: '24',
      image: '/images/categories/spices.png',
      },
     {
      title: 'گوشت',
      slug: 'meat',
      count: '8',
      image: '/images/categories/meat.png',
      },
      {
        title: 'شکلات',
        slug: 'chocolate',
        count: '19',
        image: '/images/categories/nutella.png',
      },
      {
        title: 'نوشیدنی',
        slug: 'drink',
        count: '32',
        image: '/images/categories/red-bull-can.png',
      },
      {
        title: 'سس',
        slug: 'sauce',
        count: '52',
        image: '/images/categories/ketchup.png',
      },
      {
        title: 'قهوه',
        slug: 'coffee',
        count: '18',
        image: '/images/categories/cup-of-coffee.png',
      },
      {
        title: 'غذای حیوانات',
        slug: 'pet-food',
        count: '36',
        image: '/images/categories/dogmeat.png',
      },
  ];

export const DUMMY_ITEMS: iProduct[] = [
    {
      id: '1',
      title: 'بسته ۶تایی دونات',
      image: '/images/products/donut.png',
      category: 'نان و شیرینی',
      catSlug: 'bread',
      price: '50,000',
      oldPrice: '65,000'
    },
    {
      id: '2',
      title: 'گونی برنج',
      image: '/images/products/rice.png',
      category: 'سوپر مارکتی',
      catSlug: 'supermarket',
      price: '1,145,000',
      oldPrice: '1,180,000'
      
    },
    {
      id: '3',
      title: 'سس باربیکیو هاینز',
      image: '/images/products/heinz-bbq.png',
      category: 'سوپر مارکتی',
      catSlug: 'supermarket',
      price: '83,000',
    },
    {
      id: '4',
      title: 'لیپتون آیس تی پک ۱۰ تایی',
      image: '/images/products/lipton-ice-tea.png',
      category: 'سوپر مارکتی',
      catSlug: 'supermarket',
      price: '45,000'
    },
      {
      id: '5',
      title: 'فندق',
      image: '/images/products/fandogh/1.jpg',
      category: 'سوپر مارکتی',
      catSlug: 'supermarket',
      price: '100,000',
      oldPrice: '65,000'
    },
  ];

export const DUMMY_SPECIAL_ITEMS: iSpecial[] = [
    {
      title: 'سبزی تازه',
      subtitle: 'محصولات جدید',
      image: '/images/products/vegetables.png',
      color: Color.Green
    },
    {
      title: 'نان و شیرینی',
      subtitle: 'محصولات تازه',
      image: '/images/products/bread.png',
      color: Color.Orange
    },
    {
      title: 'قهوه استارباکس',
      subtitle: 'پرفروش ترین',
      image: '/images/products/coffee.png',
      color: Color.Grey
    },
    {
      title: 'کیت کت روزانه',
      subtitle: 'پرفروش ترین',
      image: '/images/products/kitkat.png',
      color: Color.DarkBlue
    },
  ];

export const DUMMY_SPECIAL_ITEMS_2: iSpecial[] = [
     {
      title: 'جعبه دوریتوس ۶ تایی',
      subtitle: 'تند و آتشین',
      image: '/images/products/doritos-bag.png',
      color: Color.Grey
    },
     {
      title: 'پک سریال',
      subtitle: 'صبحانه کامل',
      image: '/images/products/cereal-pack.png',
      color: Color.Orange
     },
      {
      title: 'سالامی',
      subtitle: '۱۰۰٪ طبیعی',
      image: '/images/products/salami.png',
    }
];
  
export const FAKE_INVOICE = {
        invoiceId: '123456789',
        email: 'john.wick@vorna.com',
        name: 'جان ویک',
        phone: '09123456789',
        time: '۱۸:۲۴',
        date: '۱۴۰۰/۰۱/۳۰',
        address: 'تهران، میدان آزادی، اون سمت میدان، خیابان اول، کوچه دوم، پلاک سوم، طبقه چهارم، واحد پنجم',
        subtotal: '۱،۳۰۸،۰۰۰',
        shipping: '۵۰،۰۰۰',
        discount: '۳۵،۰۰۰',
        total: '۱،۳۵۸،۰۰۰',
}