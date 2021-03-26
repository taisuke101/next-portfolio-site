import React, { FC } from 'react';
import Link from 'next/link';
import PageLinks from './PageLinks';

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {
        return (
            <section className='fixed z-10 w-full py-4 bg-navy-100 bg-clip-padding bg-opacity-40'>
                <div className='container flex justify-between sm:mx-auto'>
                    <Link href='/'>
                        <a className='ml-4 text-5xl tracking-widest text-gray-800 md:m-0'>taisuke</a>
                    </Link>
                    <PageLinks />
                </div>
            </section>
        );
}
export default Header;