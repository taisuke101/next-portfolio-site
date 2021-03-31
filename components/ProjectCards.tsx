import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Markdown from 'markdown-to-jsx';
import { useState, VFC } from 'react'

import { Project } from '../types';
import ModalComponent from './ModalComponent';
import Title from './Title';

interface ProjectsProps {
    projects: Project[];
}


const ProjectCards: VFC<ProjectsProps> = ({ projects }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='h-screen pt-24 bg-gray-100 dark:bg-gray-900'>
            <Title title='Projects' />
            {projects.map((project) => (
                    <div key={project.id}>
                        <button 
                            onClick={() => setOpen(true)}
                            className='block mx-auto'
                        >
                            <img 
                                src={project.image.url}
                                className='object-cover w-5/6 mx-auto'
                                alt="参加プロジェクトの画像"
                            />
                        </button>
                        <ModalComponent
                            isOpen={open}
                            onRequestClose={() => setOpen(false)}
                        >
                            <section className='py-10 text-center bg-white rounded-lg z-2 lg:mx-40'>
                                <h1 className='my-5 text-lg font-semibold'>
                                    {project.title}
                                </h1>
                                <h2 className='mb-3 font-medium'>期間</h2>
                                <p className='mb-3'>{project.period}</p>
                                <button
                                    type='button'
                                    className='absolute text-5xl text-red-700 top-6 right-5 lg:right-44'
                                    onClick={() => setOpen(false)}
                                >
                                    <FontAwesomeIcon icon={faTimes}/>
                                </button>
                                <img 
                                    src={project.image.url}
                                    className='object-cover w-4/5 mx-auto lg:w-1/2 lg:h-1/2'
                                    alt="参加プロジェクトの画像"
                                />
                                <Markdown className='mx-auto my-3 prose' >{project.description}</Markdown>
                                {project.stack.map((skill) => (
                                    <span 
                                        key={skill.id}
                                        className='inline-block p-2 mx-2 mt-3 mr-3 font-light tracking-widest text-gray-600 break-words bg-gray-300 rounded-lg'
                                    >
                                        {skill.stack}
                                    </span>
                                ))}
                            </section>
                        </ModalComponent>
                    </div>
            ))}
        </div>
    );
}
export default ProjectCards;