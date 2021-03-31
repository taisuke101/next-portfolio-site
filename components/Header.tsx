import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image'

import PageLinks from './PageLinks';
import ToggleDarkMode from './ToggleDarkMode';

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {
        return (
            <section className='fixed z-10 w-full px-2 py-4 bg-navy-100 bg-clip-padding bg-opacity-40'>
                <div className='flex justify-between'>
                    <Link href='/'>
                        <a className='mr-2 text-3xl tracking-widest text-gray-800 lg:text-5xl dark:text-gray-200'>
                            <img 
                                src='/logo.webp'
                                width={175}
                                height={50} 
                                alt='ロゴ画像'
                            />
                        </a>
                    </Link>
                    <ToggleDarkMode />
                    <PageLinks />
                </div>
            </section>
        );
}
export default Header;