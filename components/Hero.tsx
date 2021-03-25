import { VFC } from 'react'

import LinkButton from './LinkButton'
import SocialLinks from './SocialLinks'

interface HeroProps {

}

const Hero: VFC<HeroProps> = ({}) => {
        return (
            <article className='relative flex justify-center text-5xl h-75vh md:h-screen bg-navy-100'>
                <section className='absolute ml-6 top-1/4 md:text-center md:space-y-7'>
                    <div className='h-1 mb-5 w-60 bg-navy-600 md:w-full'></div>
                    <h1 className='text-6xl font-bold tracking-wider break-words md:text-7xl text-navy-1000'>
                        Taisuke Yamamoto
                    </h1>
                    <h5 className='mt-4 text-2xl font-semibold tracking-wider text-gray-800 md:text-4xl'>
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
                            styleClass='text-navy-1000 hover:text-navy-300 md:text-5xl'
                            containerClass='flex md:justify-center'
                        />
                    </div>
                </section>
            </article>
        );
}
export default Hero;