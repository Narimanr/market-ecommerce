import { Formik, Form , Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import styles from './ShipmentForm.module.scss';

export interface FormData {
    province: string,
    city: string,
    zip: string,
    address: string,
}

interface FormProps {
    pullData: (data: FormData) => void;
}


const ShipmentSchema = Yup.object().shape({
    province: Yup.string()
        .min(2, 'نام استان خیلی کوتاه است')
        .max(30, 'نام استان خیلی بلند است')
        .required('وارد کردن استان الزامی است'),
    city: Yup.string()
        .min(2, 'نام شهر خیلی کوتاه است')
        .max(30, 'نام شهر خیلی بلند است')
        .required('وارد کردن شهر الزامی است'),
    address: Yup.string()
        .min(10, 'آدرس  خیلی کوتاه است')
        .max(100, 'آدرس خیلی بلند است')
        .required('وارد کردن آدرس الزامی است'),
    zip: Yup.string()
        .length(10, 'کد پستی باید ۱۰ رقمی باشد')
        .required('وارد کردن کد پستی الزامی است'),
 });

export default function ShipmentForm(props: FormProps) {
    
    return (
        <div className={styles.ShipmentForm}>
            <div className={styles.form}>
                <Formik
                initialValues={{
                    province: '',
                    city: '',
                    address: '',
                    zip: ''
                    }}
                validationSchema={ShipmentSchema}
                onSubmit={values => {
                    // same shape as initial values
                    props.pullData(values);
                }}
                >
                    <Form className={styles.formContainer}>
                        <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="province"
                            >
                                نام استان
                            </label>
                            <Field
                                name="province"
                                id="province"
                                type="text"
                                placeholder="نام استان"
                                className={`${styles.formInput}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="province" />
                            </div>
                        </div>
                        
                        <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="city"
                            >
                                نام شهر
                            </label>
                            <Field
                                name="city"
                                id="city"
                                type="text"
                                placeholder="نام شهر"
                                className={`${styles.formInput}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="city" />
                            </div>
                        </div>

                          <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="zip"
                            >
                                کد پستی
                            </label>
                            <Field
                                name="zip"
                                id="zip"
                                type="text"
                                placeholder="کد پستی"
                                className={`${styles.formInput}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="zip" />
                            </div>
                       </div>
                        
                        <div className={`${styles.formItem} ${styles.formItemFull}`}>
                            <label
                                className={styles.formLabel}
                                htmlFor="address"
                            >
                                آدرس
                            </label>
                            <Field
                                name="address"
                                id="address"
                                type="text"
                                placeholder="آدرس"
                                className={`${styles.formInput}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="address" />
                            </div>
                        </div>
                    
                        <div className={styles.formAction}>
                            <button className={styles.formButton} type="submit">ثبت آدرس</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

