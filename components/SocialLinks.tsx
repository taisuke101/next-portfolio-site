import Link from 'next/link';
import { VFC } from 'react';

import { socialData } from '../data/socialData';

interface SocialLinksProps {
    styleClass?: string;
    containerClass?: string;
}

const SocialLinks: VFC<SocialLinksProps>  = ({ styleClass, containerClass }) => {
        return (
            <ul className={`pt-5 space-x-6 text-4xl ${containerClass ? containerClass : ''}`}>
                {socialData.map(link => (
                    <li key={link.id}>
                        <Link href={link.url}>
                            <a className={`transition duration-200 transform ${styleClass ? styleClass : ''}`}>
                                {link.icon}
                            </a>
                        </Link>
                    </li>
                )) }
            </ul>
        );
}
export default SocialLinks;