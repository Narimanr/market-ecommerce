import Link from 'next/link';
import styles from './Shipping.module.scss';

// Import Interface


// Components
import ShipmentForm, {FormData} from '@/element/Form/Shipment/ShipmentForm';
import InvoiceSummary from '@/element/InvoiceSummary/InvoiceSummary';


interface PageProps {
    subtotal: string;
    shipping: string;
    discount: string;
    total: string;
};



export default function Shipping(props: PageProps) {
    const formData = (data: FormData) => {
        console.log(data);
    }
    return (
        <div className={styles.ShippingGrid}>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <span className={styles.header}>شیوه ارسال</span>
                        <p className={styles.help}>با تکمیل اطلاعات خواسته شده، سفارش خود را دریافت کنید.</p>
                    </div>
                
                <div className={styles.shippingDetails}>
                    <div className={styles.sections}>
                        <div className={styles.card}>
                            <i className="bx bxs-map-pin"></i>
                            <span className={styles.cardTitle}>
                                آدرس
                            </span>
                            <p className={styles.cardInfo}>آدرسی که سفارش به آن ارسال خواهد شد را وارد کنید.</p>
                            <ShipmentForm pullData={formData} />
                        </div>
                  
                        <div className={styles.card}>
                            <i className="bx bxs-truck"></i>
                            <span className={styles.cardTitle}>
                                حمل و نقل
                            </span>

                            <div className={styles.cardSelect}>
                                <span>از طریق پیک</span>
                            </div>
                            <div className={styles.cardText}>
                                <span>(در بازه زمانی متعارف و برای سفارشات بالای ۳۰۰ هزار تومان رایگان)</span>
                            </div>

                        </div>

                        <div className={styles.card}>
                            <i className="bx bx-credit-card"></i>
                            <span className={styles.cardTitle}>
                                روش پرداخت
                            </span>
                            <span className={styles.cardSelect}>پرداخت آنلاین</span>
                            <div className={styles.cardText}>
                                <span>از طریق درگاه اینترنتی بانکی</span>
                            </div>
                        </div>
                    </div>



                    <div className={styles.checkout}>
                            <InvoiceSummary
                                subtotal={props.subtotal}
                                total={props.total}
                                discount={props.discount}
                                shipping={props.shipping}
                        />
                        

                        <Link href="/order/thankyou">
                            <button className={styles.proceedButton}>
                                <div className={styles.buttonPrice}>
                                    <span >۱،۳۵۸،۰۰۰</span>
                                    <span className={styles.currency}>
                                        تومان
                                    </span>
                                </div>
                                <div className={styles.buttonText}>
                                    <span>تایید و پرداخت</span>
                                    <i className='bx bx-arrow-back'></i>
                                </div>
                            </button>
                        </Link>
                    </div>
               </div>
            </div>
        </div>
    );
}