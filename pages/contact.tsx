import React, { FC } from 'react';
import dynamic from 'next/dynamic';

import SEO from '../components/SEO';
const ContactForm = dynamic(import('../components/ContactForm'));

interface ContactProps {
}

const Contact: FC<ContactProps> = ({}) => {
        return (
            <>
                <SEO 
                    siteTitle='Contact'
                    title={'Contact'}
                    description={'山本泰佑に問い合わせることができるページです'}
                />
                <ContactForm />
            </>
        );
}
export default Contact;