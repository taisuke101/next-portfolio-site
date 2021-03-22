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
                    className='p-2 text-lg font-medium tracking-widest text-white transition duration-700 transform rounded-md hover:bg-navy-300 hover:text-black bg-navy-700 hover:-translate-y-0.5'
                >
                    {text}
                </button>
            </Link>
        );
}
export default LinkButton;