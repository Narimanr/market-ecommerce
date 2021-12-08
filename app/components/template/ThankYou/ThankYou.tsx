import styles from './ThankYou.module.scss';

// Import Interface
import {iProduct} from '@/interfaces/Interfaces';

// Components
import InvoiceItem from '@/element/InvoiceItem/InvoiceItem';
import InvoiceSummary from '@/element/InvoiceSummary/InvoiceSummary';


interface PageProps {
    invoiceId: string;
    email: string;
    name: string;
    phone: string;
    time: string;
    date: string;
    address: string;
    subtotal: string;
    shipping: string;
    discount: string;
    total: string;
    items: iProduct[];
};


export default function ThankYou(props: PageProps) {
    return (
        <div className={styles.ThankYouGrid}>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <span className={styles.message}>تشکر از شما!</span>
                        <p className={styles.orderConfirm}>
                            سفارش شماره
                            <span className={styles.orderNumber}>
                                {props.invoiceId}
                            </span>
                            با موفقیت ثبت شد!
                        </p>
                        <div className={styles.checkMail}>
                            <p>
                                ما ایمیلی به آدرس
                                <span className={styles.email}>
                                    {props.email}
                                </span>
                                حاوی تاییدیه سفارش و پرداخت شما ارسال نمودیم.                                   
                                چنان چه پس از گذشت سه دقیقه ایمیلی دریافت ننمودید، پوشه اسپم (Spam) خود را چک کنید.
                            </p>
                        </div>
                        <div className={styles.orderTime}>
                            <div className={styles.dateTime}>
                                <span className={styles.label}>
                                    <i className="bx bx-time-five"></i>
                                    زمان سفارش:
                                </span>

                                <span className={styles.date}>
                                    ۱۴۰۰/۰۹/۳۰
                                </span>

                                <span className={styles.time}>
                                    ۱۲:۵۹
                                </span>
                            </div>

                            <div className={styles.print}>
                                <i className="bx bxs-printer"></i>
                                <span>پرینت</span>
                            </div>
                        </div>
                    </div>
                
                <div className={styles.chart}>
                    <div className={styles.card}>
                        <i className="bx bxs-map-pin"></i>
                        <span className={styles.cardTitle}>
                            ارسال
                        </span>
                        <span className={styles.cardRecipient}>
                            {props.name}
                        </span>
                        <div className={styles.cardText}>
                            <span>{props.address}</span>
                            <span>{props.phone}</span>
                        </div>
                       
                    </div>
                    <div className={styles.card}>
                        <i className="bx bx-credit-card"></i>
                        <span className={styles.cardTitle}>
                            پرداخت
                        </span>
                        <span className={styles.cardRecipient}>
                            {props.name}
                        </span>
                        <div className={styles.cardText}>
                            <span>{props.address}</span>
                        </div>
                        
                    </div>
                    <div className={styles.card}>
                        <i className="bx bxs-truck"></i>
                        <span className={styles.cardTitle}>
                            حمل و نقل
                        </span>

                        <div className={styles.cardText}>
                            <span>شیوه منتخب:</span>
                            <span>از طریق پست پیشتاز</span>
                            <span>(در بازه زمانی متعارف تا حداکثر ۷۲ ساعت)</span>
                        </div>

                    </div>
                </div>

                <div className={styles.items}>
                    <div className={styles.list}>
                        <div className={styles.header}>
                            لیست سفارش
                        </div>
                        {props.items.map(item => {
                            return (
                                <InvoiceItem
                                    key={item.id}
                                    title={item.title}
                                    id={item.id}
                                    category={item.category}
                                    catSlug={item.catSlug}
                                    price={item.price}
                                    oldPrice={item.oldPrice}
                                    image={item.image}
                                />
                            );
                        })}
                    </div>

                    <div className={styles.checkout}>
                        <InvoiceSummary
                            subtotal={props.subtotal}
                            total={props.total}
                            discount={props.discount}
                            shipping={props.shipping}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}