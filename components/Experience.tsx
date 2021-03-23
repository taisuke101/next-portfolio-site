import { useState, VFC } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';

import { Jobs } from '../types';
import Title from './Title';

interface ExperienceProps {
    jobs: Jobs[];
}

const Experience: VFC<ExperienceProps> = ({ jobs }) => {
    const [value, setValue] = useState(0);
    const { position, from, until, description } = jobs[value]

    return (
        <div className='px-4 py-20 text-center h-75vh'>
            <Title title='experience'/>    
            <div className='md:flex md:space-x-16 md:ml-16 md:justify-center lg:space-x-48'>
                <div className='flex justify-center mb-3 space-x-4 text-xl text-gray-800 md:space-x-0 md:space-y-4 md:flex-col'>
                    {jobs.map((job, index) => (
                        <button
                            key={job.id}
                            onClick={() => setValue(index)}
                            className={`hover:text-navy-500 transform transition duration-500 ${index === value && ''}`}
                        >
                            {job.title}
                        </button>
                    ))
                    }
                </div>
                <div className='space-y-12 md:space-y-7 md:max-w-lg lg:max-w-full text-navy-800'>
                    <h2 className='mt-10 text-2xl'>{position}</h2>
                    <h4>{from} ~ {until}</h4>
                    <div className='flex justify-start ml-3 md:ml-0'>
                        <FaAngleDoubleRight/>
                        <p className='ml-4 whitespace-pre-wrap md:break-words'>{description}</p>
                    </div>
                </div>
            </div>        
        </div>
    );
}
export default Experience;
