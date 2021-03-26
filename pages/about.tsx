import { GetStaticProps } from 'next';
import React, { FC } from 'react'

import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import { FetchJob, Job, MyInfo, Stack } from '../types';

interface AboutProps {
    myInfo: MyInfo;
    skill: Stack[];
    jobs: Job[];
}

const About: FC<AboutProps> = ({ myInfo, skill, jobs }) => {
        return (
            <>
                <AboutMe 
                    myInfo={myInfo}
                    skill={skill}
                />
                <Experience 
                    jobs={jobs}
                    showLink={false}
                />
            </>
        );
}
export default About;


export const getStaticProps: GetStaticProps = async () => {
    const resMyInfo: MyInfo = await fetch(
        'https://next-portfolio.microcms.io/api/v1/about?draftKey=tJAA5zQe5', 
        { headers: {"X-API-KEY":process.env.API_KEY}}
    )
    .then(resMyInfo => resMyInfo.json())
    .catch(() => null);

    const resJobs: FetchJob = await fetch(
        'https://next-portfolio.microcms.io/api/v1/experience', 
        { headers: {"X-API-KEY":process.env.API_KEY} }
    )
    .then(resJobs => resJobs.json())
    .catch(() => null);

    return {
        props: {
            myInfo: resMyInfo,
            skill: resMyInfo.stack,
            jobs: resJobs.contents,
        }
    }
}  