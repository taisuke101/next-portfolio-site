import { VFC } from 'react'
import services from '../data/services';
import Title from './Title'

interface ServicesProps {
    
}

const Services: VFC<ServicesProps> = () => {
        return (
            <div className='block h-auto px-4 py-20 text-center bg-gradient-to-b from-navy-300 via-navy-200 to-navy-500 dark:from-gray-800 dark:via-gray-600 dark:to-gray-700'>
                <Title title='Services'/>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8'>
                        {services.map(service => {
                            const { id, icon, title, text } = service;
                            return (
                                <article key={id}>
                                    <div className='relative block w-24 h-24 bg-red-100 rounded-full dark:bg-red-300 top-24'/>
                                    <section className='z-2 relative px-6 py-12 mt-8 shadow-xl space-y-3 duration-500 transform bg-gray-100 border-0.2 border-white rounded-lg backdrop-blur-10 bg-opacity-10 bg-clip-padding lg:py-24  hover:-translate-y-5'>
                                        <p className='text-navy-1000 dark:text-navy-400'>
                                            {icon}
                                        </p>
                                        <p className='text-3xl font-semibold text-gray-800 dark:text-gray-300 lg:text-4xl'>
                                            {title}
                                        </p>
                                        <div className='w-20 h-1 mx-auto mb-5 bg-navy-600 sm:w-full'></div>
                                        <p className='text-lg font-normal text-gray-800 break-words dark:text-gray-200 lg:text-xl'>
                                            {text}
                                        </p>
                                    </section>
                                    <div className='relative hidden w-12 h-12 bg-indigo-400 rounded-lg dark:bg-indigo-500 z-1 bottom-11 lg:block' />
                                    <div className='relative hidden float-right w-32 h-32 bg-green-300 rounded-full dark:bg-green-400 z-1 bottom-24 right-6 lg:block'/>
                                </article>
                            )
                        })}
                    </div>
            </div>
        );
}

export default Services;