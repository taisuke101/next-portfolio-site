import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Markdown from 'markdown-to-jsx';
import { useState, VFC } from 'react'

import { Project } from '../types';
import Title from './Title';

interface ProjectsProps {
    projects: Project[];
}

const ProjectCards: VFC<ProjectsProps> = ({ projects }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='h-screen pt-24 bg-gray-100'>
            <Title title='Projects' />
            {projects.map((project) => (
                !open ? (
                    <button 
                        key={project.id}
                        onClick={() => setOpen(true)}
                        className='block mx-auto'
                    >
                        <img 
                            src={project.image.url}
                            className='object-cover w-5/6 mx-auto'
                            alt=""
                        />
                    </button>
                ) : (
                    <section className='left-0 py-10 mx-3 text-center bg-white z-2 top-20 lg:mx-40'>
                        <h1 className='my-5 text-lg font-semibold'>
                            {project.title}
                        </h1>
                        <button
                            type='button'
                            className='absolute text-5xl text-red-700 top-48 right-8 lg:right-44'
                            onClick={() => setOpen(false)}
                        >
                            <FontAwesomeIcon icon={faTimes}/>
                        </button>
                        <img 
                            src={project.image.url}
                            className='object-cover w-4/5 mx-auto lg:w-1/2 lg:h-1/2'
                            alt=""
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
                )
            ))}
        </div>
    );
}
export default ProjectCards;