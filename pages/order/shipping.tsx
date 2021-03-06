import type { NextPage } from 'next';
import Head from 'next/head';

import Shipping from '@/template/Shipping/Shipping';
import { DUMMY_ITEMS, FAKE_INVOICE } from '@/DB/fake';


const ShippingPage: NextPage = () => {
    
    const cartItems = DUMMY_ITEMS.filter(items => items.catSlug == 'supermarket');


    return (
        <>
            <Head>
                <title>Ecommerce - Shipping</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            {cartItems && (
                <Shipping
                    subtotal={FAKE_INVOICE.subtotal}
                    shipping={FAKE_INVOICE.shipping}
                    discount={FAKE_INVOICE.discount}
                    total={FAKE_INVOICE.total}
                />
                )
            }
        </>
    )
}

export default ShippingPage
 