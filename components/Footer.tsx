import React, { FC } from 'react'
import SocialLinks from './SocialLinks'

interface FooterProps {
}

const Footer: FC<FooterProps> = () => {
        return (
            <footer className='bg-navy-1000 h-36'>
                <section className='text-center text-white'>
                    <SocialLinks 
                        styleClass='text-white hover:text-navy-500 sm:text-5xl'
                        containerClass='flex justify-center'
                    />
                    <h4 className='mt-4 text-xl sm:text-2xl'>
                        Created By <span>Taisuke Yamamoto</span>
                    </h4>
                </section>
            </footer>
        );
}
export default Footer;