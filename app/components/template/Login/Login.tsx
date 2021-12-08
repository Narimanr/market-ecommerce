import Image from 'next/image';
import styles from './Login.module.scss';

import { useFormik } from 'formik';




interface PageProps {

};


export default function Login() {
const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values => {
    //   login(values);
    },
      });
    
    return (
        <div className={styles.AuthGrid}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.auth}>
                        <div className={styles.message}>
                            <span className={styles.header}>سلام مجدد!</span>
                            <span className={styles.welcome}>خوش بازگشتید، دلتنگ شما بودیم!</span>
                        </div>

                        <div className={styles.form}>
                            <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
                                <div className={styles.formField}>
                                    <label
                                    className={styles.formLabel}
                                    htmlFor="username"
                                    >
                                    نام کاربری
                                    </label>
                                    <input
                                    type="text"
                                    id="username"
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
                                    className={styles.formInput}
                                    placeholder="نام کاربری خود را وارد کنید"
                                    />
                                </div>

                                <div className={styles.formField}>
                                    <label
                                    className={styles.formLabel}
                                    htmlFor="password"
                                    >
                                    رمز عبور
                                    </label>
                                    <input
                                    type="password"
                                    id="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className={styles.formInput}
                                    placeholder="رمز عبور"
                                    />
                                </div>

                                <div className={styles.formForgot}>
                                    <span>فراموش کردم</span>
                                </div>

                               
                                <div className={styles.formSubmit}>
                                    <button
                                        className={styles.formButton}
                                        type="submit"
                                        >
                                            <i className='bx bx-log-in-circle bx-md bx-flip-horizontal'></i>
                                        <span>ورود به حساب کاربری</span>
                                    </button>
                                </div>
                            </form>

                            <div className={styles.other}>
                                <span className={styles.overlay}>یا از طریق</span>

                                <div className={styles.OAuth}>
                                    <div className={styles.logoButton}>
                                        <div className={styles.icon}>
                                          <Image src="/svg/apple-icon.svg" alt="Continue with apple Logo" width={25} height={25} objectFit="contain" />
                                        </div>
                                    </div>
                                    <div className={styles.logoButton}>
                                        <div className={styles.icon}>
                                          <Image src="/svg/google-icon.svg" alt="Continue with google Logo" width={25} height={25} objectFit="contain" />
                                        </div>
                                    </div>
                                    <div className={styles.logoButton}>
                                        <div className={styles.icon}>
                                          <Image src="/svg/facebook-icon.svg" alt="Continue with facebook Logo" width={25} height={25} objectFit="contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className={styles.image}>
                        <div className={styles.imageContainer}>
                            <Image src="/images/authenticate-3.png" alt="Authenticate image" layout="fill" objectFit="contain" priority={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}