import React, { FC } from 'react'

import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

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