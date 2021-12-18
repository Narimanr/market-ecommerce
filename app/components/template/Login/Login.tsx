import Image from 'next/image';
import Link from 'next/link';
import styles from './Login.module.scss';

// import TwoFactor from '@/element/Form/Login/TwoFactor/TwoFactor';
import Username, {FormData} from '@/element/Form/Login/Username/Username';

export default function Login() {
    const formData = (data: FormData) => {
        console.log(data);
    }
    return (
        <div className={styles.AuthGrid}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.auth}>
                        <div className={styles.message}>
                            <span className={styles.header}>سلام مجدد!</span>
                            <span className={styles.welcome}>خوش بازگشتید، دلتنگ شما بودیم!</span>
                        </div>

                        <div className={styles.formWrapper}>
                            <Username pullData={formData} />

                            <div className={styles.switch}>
                                <span>عضو نیستید؟</span>
                                <Link href="/auth/signup">
                                    <a href="/auth/signup">
                                        ثبت نام کنید
                                    </a>
                                </Link>
                            </div>
                        </div>

                          <div className={styles.other}>
                                <span className={styles.overlay}>و یا از طریق</span>
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