import { VFC } from 'react'

import LinkButton from './LinkButton'
import SocialLinks from './SocialLinks'

interface HeroProps {

}

const Hero: VFC<HeroProps> = ({}) => {
        return (
            <div className='relative h-screen text-5xl bg-navy-100 dark:bg-gray-900 sm:flex sm:justify-center'>
                <section className='absolute ml-6 top-1/4 sm:text-center sm:space-y-7 sm:ml-0'>
                    <div className='h-1 mb-5 w-60 bg-navy-600 sm:w-full dark:bg-navy-800'></div>
                    <h1 className='text-5xl font-bold tracking-wider break-words sm:text-6xl text-navy-1000 dark:text-gray-200'>
                        Taisuke Yamamoto
                    </h1>
                    <h5 className='mt-4 text-xl font-semibold tracking-wider text-gray-800 dark:text-navy-600 sm:text-3xl'>
                        WebEngineer,Developper
                    </h5>
                    <div className='pt-5'>
                        <LinkButton
                            goto='/contact'
                            text='お問い合わせ'
                        />
                    </div>
                    <div className=''>
                        <SocialLinks 
                            styleClass='text-navy-1000 dark:text-navy-600 hover:text-navy-300 dark:hover:text-navy-400 sm:text-4xl'
                            containerClass='flex sm:justify-center'
                        />
                    </div>
                </section>
            </div>
        );
}
export default Hero;