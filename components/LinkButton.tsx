import Link from 'next/link';
import React, { FC, FormEventHandler } from 'react'

interface LinkButtonProps {
    goto:string;
    text: string;
}

const LinkButton: FC<LinkButtonProps> = ({ goto, text,}) => {
        return (
            <Link href={goto}>
                <button
                    className='py-2 px-3 text-lg font-medium tracking-widest text-white transition duration-700 transform rounded-md hover:bg-navy-300 dark:hover:bg-navy-600 hover:text-black dark:hover:text-gray-800 bg-navy-700 dark:bg-navy-900 hover:-translate-y-0.5'
                >
                    {text}
                </button>
            </Link>
        );
}
export default LinkButton;