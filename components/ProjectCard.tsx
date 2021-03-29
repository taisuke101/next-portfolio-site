import { VFC } from 'react'

import { Project } from '../types';
import LinkButton from './LinkButton';
import Title from './Title';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: VFC<ProjectCardProps> = ({ project }) => {
        return (
            <div className='h-auto px-4 py-20 space-y-5 text-center bg-gradient-to-b from-navy-300 via-navy-200 to-navy-500'>
                <Title  title="Latest Project" />
                <img 
                    src={project.image.url} 
                    className='object-cover mx-auto lg:w-2/3'
                    alt=''
                />
                <LinkButton 
                    goto='/projects'
                    text='詳しく見る'
                />
            </div>
        );
}
export default ProjectCard;