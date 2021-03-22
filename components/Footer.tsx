import React, { FC } from 'react'
import SocialLinks from './SocialLinks'

interface FooterProps {
}

const Footer: FC<FooterProps> = () => {
        return (
            <footer className='bg-navy-1000 h-36'>
                <div className='text-center text-white'>
                    <div>
                        <SocialLinks 
                            styleClass='text-white hover:text-navy-500 md:text-5xl'
                            containerClass='flex justify-center'
                        />
                    </div>
                    <h4 className='mt-4 text-xl md:text-2xl'>
                        Created By <span>Taisuke Yamamoto</span>
                    </h4>
                </div>
            </footer>
        );
}
export default Footer;