import { Formik, Form , Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import styles from './Register.module.scss';

export interface FormData {
    name: string,
    familyName: string,
    phone: string,
    password: string,
    repassword: string,
    email?: string,
}

interface FormProps {
    pullData: (data: FormData) => void;
}


const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'نام خیلی کوتاه است')
        .required('وارد کردن نام الزامی است'),
    familyName: Yup.string()
        .min(2, 'نام خانوادگی خیلی کوتاه است')
        .required('وارد کردن نام خانوادگی الزامی است'),
    phone: Yup.string()
        .min(10, 'شماره موبایل نمی‌تواند کمتر از ۱۰ رقم باشد')
        .max(11, 'شماره موبایل نمی‌تواند بیشتر از ۱۰ رقم باشد')
        .required('وارد کردن شماره موبایل الزامی است'),
    password: Yup.string()
        .min(8, 'رمز عبور باید بیش از ۸ کاراکتر باشد')
        .required('وارد کردن رمز عبور الزامی است'),
    repassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'رمز عبور تکرار شده صحیح نمی‌باشد'),
    email: Yup.string()
        .email('ایمیل نامعتبر است')
        .notRequired()
 });

export default function Register(props: FormProps) {
    
    return (
        <div className={styles.RegisterForm}>
            <div className={styles.form}>
                <Formik
                    initialValues={{
                        name: '',
                        familyName: '',
                        phone: '',
                        password: '',
                        repassword: '',
                    }}
                validationSchema={RegisterSchema}
                onSubmit={values => {
                    // same shape as initial values
                    props.pullData(values);
                }}
                >
                    <Form className={styles.formContainer} autoComplete={'off'}>
                        <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="name"
                            >
                                نام
                            </label>
                            <Field
                                name="name"
                                id="name"
                                type="text"
                                placeholder="نام"
                                className={`${styles.formInput}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="name" />
                            </div>
                        </div>

                        <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="familyName"
                            >
                                نام خانوادگی
                            </label>
                            <Field
                                name="familyName"
                                id="familyName"
                                type="text"
                                placeholder="نام خانوادگی"
                                className={`${styles.formInput}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="familyName" />
                            </div>
                        </div>

                        <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="phone"
                            >
                                شماره تلفن
                            </label>
                            <Field
                                name="phone"
                                id="phone"
                                type="tel"
                                placeholder="0912345678"
                                className={`${styles.formInput} ${styles.formInputLtr}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="phone" />
                            </div>
                        </div>

                        <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="email"
                            >
                                ایمیل
                            </label>
                            <Field
                                name="email"
                                id="email"
                                type="email"
                                placeholder="ایمیل (اختیاری)"
                                className={`${styles.formInput} ${styles.formInputLtr}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        
                        <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="password"
                            >
                                رمز عبور
                            </label>
                            <Field
                                name="password"
                                id="password"
                                type="password"
                                placeholder="رمز عبور"
                                className={`${styles.formInput} ${styles.formInputLtr}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="password" />
                            </div>
                        </div>

                        <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="repassword"
                            >
                                تکرار رمز عبور
                            </label>
                            <Field
                                name="repassword"
                                id="repassword"
                                type="password"
                                placeholder="تکرار رمز عبور"
                                className={`${styles.formInput} ${styles.formInputLtr}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="repassword" />
                            </div>
                        </div>
                        
                    
                        <div className={styles.formAction}>
                            <button className={styles.formButton} type="submit">ثبت نام</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

