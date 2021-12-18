import { Formik, Form , Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import styles from './Username.module.scss';

export interface FormData {
    username: string,
    password: string,
}

interface FormProps {
    pullData: (data: FormData) => void;
}


const UsernameSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'نام کاربری خیلی کوتاه است')
        .required('وارد کردن نام کاربری الزامی است'),
    password: Yup.string()
        .min(8, 'رمز عبور باید بیش از ۸ کاراکتر باشد')
        .required('وارد کردن رمز عبور الزامی است'),
 });

export default function Username(props: FormProps) {
    
    return (
        <div className={styles.UsernameForm}>
            <div className={styles.form}>
                <Formik
                initialValues={{
                    username: '',
                    password: '',
                    }}
                validationSchema={UsernameSchema}
                onSubmit={values => {
                    // same shape as initial values
                    props.pullData(values);
                }}
                >
                    <Form className={styles.formContainer}>
                        <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="username"
                            >
                                نام کاربری
                            </label>
                            <Field
                                name="username"
                                id="username"
                                type="text"
                                placeholder="نام کاربری"
                                className={`${styles.formInput}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="username" />
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
                                className={`${styles.formInput}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                        
                    
                        <div className={styles.formAction}>
                            <button className={styles.formButton} type="submit">ورود به حساب کاربری</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

