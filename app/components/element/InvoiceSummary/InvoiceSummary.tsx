// Import Interface
import { iInvoiceSummary } from '@/interfaces/Interfaces';

import cardStyle from './InvoiceSummary.module.scss';

export default function InvoiceSummary(props: iInvoiceSummary) {
    return (
            <div className={cardStyle.rows}>
                <div className={cardStyle.subtotal}>
                    <span className={cardStyle.text}>جمع محصولات</span>
                    <div className={cardStyle.number}>
                        <span>{props.subtotal}</span>
                        <span className={cardStyle.currency}>
                            تومانء
                        </span>
                    </div>
                </div>
                <div className={cardStyle.discount}>
                    <span className={cardStyle.text}>تخفیف</span>
                    <div className={cardStyle.number}>
                    <span>{props.discount}</span>
                        <span className={cardStyle.currency}>
                            تومانء
                        </span>
                    </div>
                </div>
                <div className={cardStyle.shipping}>
                    <span className={cardStyle.text}>هزینه ارسال</span>
                    <div className={cardStyle.number}>
                        <span>{props.shipping}</span>
                        <span className={cardStyle.currency}>
                            تومانء
                        </span>
                    </div>
                </div>
                <div className={cardStyle.total}>
                    <span className={cardStyle.text}>مجموع</span>
                        <div className={cardStyle.number}>
                            <span>{props.total}</span>
                            <span className={cardStyle.currency}>
                                تومانء
                            </span>
                        </div>
            </div>
            </div>
    );
};