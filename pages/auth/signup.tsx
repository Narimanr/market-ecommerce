import type { NextPage } from 'next';
import Head from 'next/head';

import Signup from '@/template/Signup/Signup';


const SignupPage: NextPage = () => {
    

    return (
        <>
            <Head>
                <title>Ecommerce - Sign up</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            

            <Signup />
        </>
    )
}

export default SignupPage
 