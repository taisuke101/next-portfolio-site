import { VFC } from 'react'
import services from '../data/services';
import Title from './Title'

interface ServicesProps {
    
}

const Services: VFC<ServicesProps> = () => {
        return (
            <div className='block h-auto px-4 py-20 text-center bg-gradient-to-b from-navy-300 via-navy-200 to-navy-500'>
                <Title title='Services'/>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8'>
                        {services.map(service => {
                            const { id, icon, title, text } = service;
                            return (
                                <article key={id}>
                                    <div className='relative block w-24 h-24 bg-red-100 rounded-full top-24'/>
                                    <section className='z-2 relative px-6 py-12 mt-8 space-y-3 duration-500 transform bg-gray-100 border-0.2 border-white rounded-lg backdrop-blur-10 bg-opacity-10 bg-clip-padding lg:py-24  hover:-translate-y-5'>
                                        <p className='text-navy-1000'>
                                            {icon}
                                        </p>
                                        <h4 className='text-3xl font-semibold text-gray-800 lg:text-4xl'>
                                            {title}
                                        </h4>
                                        <div className='w-20 h-1 mx-auto mb-5 bg-navy-600 sm:w-full'></div>
                                        <p className='text-lg font-normal text-gray-800 break-words lg:text-xl'>
                                            {text}
                                        </p>
                                    </section>
                                    <div className='relative hidden w-12 h-12 bg-indigo-400 rounded-lg z-1 bottom-11 lg:block' />
                                    <div className='relative hidden float-right w-32 h-32 bg-green-300 rounded-full z-1 bottom-24 right-6 lg:block'/>
                                </article>
                            )
                        })}
                    </div>
            </div>
        );
}

export default Services;