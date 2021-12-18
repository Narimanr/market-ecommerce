import Image from 'next/image';
import { Formik, Form , Field, ErrorMessage, FormikConfig, FormikValues } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import React, { useState } from 'react';

import styles from './TwoFactor.module.scss';


const phoneSchema = Yup.object({
    phoneNumber: Yup.string()
        .phone("IR", false, 'لطفا شماره تلفن معتبر وارد کنید')
        .required('Required'),
});

const tokenSchema = Yup.object({
    token: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .length(6, "باید دقیقا ۶ رقم وارید شود")
        .min(6, "باید دقیقا ۶ رقم وارید شود")
        .max(6, "باید دقیقا ۶ رقم وارید شود")
        .required('رمز یکبار مصرف ۶ رقمی را وارد کنید')
});

export default function TwoFactor() {
    return (
        <div className={styles.TwoFactor}>
            <div className={styles.form}>
                <FormikStepper
                initialValues={{
                    phoneNumber: '',
                    token: ''
                }}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
                >
                    <FormikStep validationSchema={phoneSchema}>
                        <label
                            className={styles.formLabel}
                            htmlFor="phoneNumber"
                        >
                            شماره تلفن
                        </label>
                        <Field
                            name="phoneNumber"
                            id="phoneNumber"
                            type="tel"
                            placeholder="0912345678"
                            className={`${styles.formInput} ${styles.formInputLtr}`}
                        />
                        <div className={styles.formError}>
                            <ErrorMessage name="phoneNumber" />
                        </div>
                    </FormikStep>
                        
                    <FormikStep validationSchema={tokenSchema}>
                        <label
                            className={styles.formLabel}
                            htmlFor="token"
                        >
                                رمز یکبار مصرف
                        </label>
                        <Field
                            name="token"
                            id="token"
                            type="string"
                            placeholder="123456"
                            className={`${styles.formInput} ${styles.formInputLtr} ${styles.formInputPartitioned}`}
                        />
                        <div className={styles.formError}>
                            <ErrorMessage name="token" />
                        </div>
                    </FormikStep>
                </FormikStepper>
            </div>
        </div>
    );
}



export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema' > {  }

export function FormikStep({ children,}: FormikStepProps) {
    return <>{ children }</>;
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
    const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step] as React.ReactElement<FormikStepProps>;

    function isLastStep() {
        return step === childrenArray.length - 1;
    }
    
    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
            if (isLastStep()) {
                await props.onSubmit(values, helpers);
                
            } else {
                setStep(s => s + 1);
                helpers.setTouched({});
                console.log(values);
            }
            }}>
                <Form className={styles.formContainer} autoComplete="off">
                    {currentChild}

                    {step > 0 ? (
                        <div className={styles.formAction}>
                            <button
                                className={styles.backButton}
                                onClick={() => setStep(s => s - 1)}
                                type='submit'
                            >
                                {/* <i className='bx bxs-key bx-md'></i> */}
                                <i className='bx bx-arrow-back bx-flip-horizontal'></i>
                                <span>بازگشت</span>
                            </button>
                        </div>
                    ) : null}

                    <div className={styles.formAction}>
                        <button
                            className={styles.formButton}
                            type="submit"
                        >
                            {isLastStep() ? (
                                <>
                                    <i className='bx bx-log-in-circle bx-md bx-flip-horizontal'></i>
                                    <span>ورود به حساب کاربری</span>
                                </>
                            ) : (
                                <>
                                    <i className='bx bxs-key bx-md'></i>
                                    <span>دریافت رمز ورود</span>
                                </>
                            )
                            }
                        </button>
                    </div>
                </Form>
        </Formik>
    );
}
