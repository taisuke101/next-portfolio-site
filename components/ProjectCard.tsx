import Markdown from 'markdown-to-jsx';
import { VFC } from 'react'

import { Project } from '../types';
import Title from './Title';

interface ProjectsProps {
    projects: Project[];
}

const Projects: VFC<ProjectsProps> = ({ projects }) => {
        return (
            <>
                {projects.map((project) => (
                    <div 
                        key={project.id}
                        className='pt-24'
                    >
                        <Title title='Projects' />
                        <div>{project.title}</div>
                        <Markdown>{project.description}</Markdown>
                        <img 
                            src={project.image.url}
                            className='object-cover' 
                            alt=""
                        />
                    </div>
                ))}
            </>
        );
}
export default Projects;