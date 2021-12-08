import styles from './Storefront.module.scss';

// Interfaces
import {iSlide, iProduct, iCategory, iSpecial} from '@/interfaces/Interfaces';

// Layouts
import Hero from '@/layout/Hero/Hero';
import CategoryGrid from '@/layout/Grid/CategoryGrid/CategoryGrid';
import ProductRow from '@/layout/Row/ProductRow/ProductRow';
import SpecialRow from '@/layout/Row/SpecialRow/SpecialRow';
import ProductGrid from '@/layout/Grid/ProductGrid/ProductGrid';
import ProductCarousel from '@/layout/ProductCarousel/ProductCarousel';



interface PageProps {
  slides: iSlide[],
  categories: iCategory[],
  items: iProduct[],
  specialItems: iSpecial[],
  specialItemsAgain: iSpecial[]
};

export default function Storefront(props: PageProps) {

    return (
      <div className={styles.StorefrontGrid}>
        <div className={styles.hero}>
          <Hero items={props.slides} />
        </div>

        <div className={styles.category}>
          <CategoryGrid items={props.categories} />
        </div>
      
        <div className={styles.sale}>
          <ProductRow title="تخفیفات هیجان انگیز" items={props.items} />
        </div>

        <div className={styles.special}>
          <SpecialRow items={props.specialItems} />
        </div>

        <div className={styles.browse}>
          <ProductGrid title="برترین‌ها" items={props.items} />
        </div>

        <div className={styles.why}>
          <div className={styles.whyBackground}>
            <div className={styles.whyText}>
              <p>بیش از ۱۵۰۰ نفر در ۱۵ سال به ما اعتماد کردند</p>
              <span>دلیل این انتخاب چه بوده؟</span>
              <ul>
                <li>
                  <i className='bx bxs-check-shield'></i>
                  <span>تضیمن قیمت</span>
                </li>
                <li>
                  <i className='bx bxs-check-shield'></i>
                  <span>تضیمن کیفیت</span>
                </li>
                <li>
                  <i className='bx bxs-check-shield'></i>
                  <span>تضیمن سلامت</span>
                </li>
                <li>
                  <i className='bx bxs-check-shield'></i>
                  <span>تضیمن ارسال</span>
                </li>
              </ul>
            </div>
            <div className={styles.whyOverlay}>
          </div>
          </div>
          
        </div>

        <div className={styles.recommended}>
          <ProductRow title="پیشنهاد شده برای شما" items={props.items} />
        </div>

        <div className={styles.specialAgain}>
          <SpecialRow items={props.specialItemsAgain} />
        </div>

        <div className={styles.scroll}>
          <ProductCarousel title="بهترین‌های ماه" items={props.items}  />
        </div>
      
      </div>
    );

}