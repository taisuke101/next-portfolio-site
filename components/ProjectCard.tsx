import { VFC } from 'react'

import { Project } from '../types';
import LinkButton from './LinkButton';
import Title from './Title';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: VFC<ProjectCardProps> = ({ project }) => {
        return (
            <div className='h-auto px-4 py-20 space-y-5 text-center bg-gradient-to-b from-navy-300 via-navy-200 to-navy-500 dark:from-gray-800 dark:via-gray-600 dark:to-gray-700'>
                <Title  title="Latest Project" />
                {/* TODO: ダークモード時画像を暗くする */}
                <div> 
                    <img 
                        src={project.image.url}
                        width='auto'
                        height='auto' 
                        className='block object-cover mx-auto dark:bg-opacity-60 lg:w-2/3'
                        alt='最近の参加プロジェクトの画像'
                        loading='lazy'
                    />
                </div>
                <LinkButton 
                    goto='/projects'
                    text='詳しく見る'
                />
            </div>
        );
}
export default ProjectCard;