import Markdown from 'markdown-to-jsx';
import { useState, VFC } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';

import { Job } from '../types';
import LinkButton from './LinkButton';
import Title from './Title';

interface ExperienceProps {
    jobs: Job[];
    showLink: boolean;
}

const Experience: VFC<ExperienceProps> = ({ jobs, showLink }) => {
    const [value, setValue] = useState(0);
    const { position, from, until, description } = jobs[value]

    return (
        <div className='h-auto px-4 py-20 text-center bg-white'>
            <Title title='Experience'/>    
            <section className='md:flex md:space-x-16 md:ml-16 md:justify-center lg:space-x-48'>
                <section className='flex flex-col justify-center my-3 space-y-3 text-xl text-gray-800 sm:space-y-0 sm:space-x-4 sm:flex-row md:space-x-0 md:space-y-4 md:flex-col lg:space-y-8'>
                    {jobs.map((job, index) => (
                        <button
                            key={job.id}
                            onClick={() => setValue(index)}
                            className={`hover:text-navy-500 focus:text-navy-500 transform transition duration-500 ${index === value && ''}`}
                        >
                            {job.title}
                        </button>
                    ))
                    }
                </section>
                <section className='space-y-12 md:space-y-7 md:max-w-lg lg:max-w-full text-navy-800'>
                    <h2 className='mt-10 text-2xl'>{position}</h2>
                    <h4>{from} ~ {until}</h4>
                    <div className='flex ml-3 md:ml-0'>
                        <FaAngleDoubleRight className='hidden sm:block'/>
                        <Markdown className='ml-4 prose md:break-words'>
                            {description}
                        </Markdown>
                    </div>
                </section>
            </section>
                { showLink && (
                    <div className='mt-10 md:mt-20'>
                        <LinkButton 
                            goto='/about'
                            text='詳しく見る'
                        />
                    </div> 
                )}
        </div>
    );
}
export default Experience;
