import { VFC } from 'react'
import services from '../data/services';
import Title from './Title'

interface ServicesProps {
    
}

const Services: VFC<ServicesProps> = () => {
        return (
            <div className='block min-h-75vh px-4 py-20 text-center bg-gradient-to-b from-navy-300 via-navy-200 to-navy-500 lg:h-75vh'>
                <Title title='Services'/>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8'>
                        {services.map(service => {
                            const { id, icon, title, text } = service;
                            return (
                                <div className='px-6 py-12 mt-8 space-y-3 duration-500 transform bg-red-300 border-0.2 border-white rounded-lg backdrop-blur-10 bg-opacity-10 bg-clip-padding lg:py-24  hover:-translate-y-7' key={id}>
                                    <div className='text-navy-1000'>
                                        {icon}
                                    </div>
                                    <h4 className='text-3xl lg:text-4xl font-semibold text-gray-800'>
                                        {title}
                                    </h4>
                                    <div className='w-20 h-1 mx-auto mb-5 bg-navy-600 md:w-full'></div>
                                    <p className='text-lg lg:text-xl font-normal text-gray-800 break-words'>
                                        {text}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
            </div>
        );
}

export default Services;