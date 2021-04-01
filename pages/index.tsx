import { GetStaticProps } from "next";
import { FC } from "react";
import dynamic from 'next/dynamic';

import SEO from "../components/SEO";
const Hero = dynamic(import('../components/Hero'));
const ProjectCard = dynamic(import('../components/ProjectCard'));
const Experience = dynamic(import('../components/Experience'));
const Services = dynamic(import('../components/Services'));
import { Job, FetchJob, FetchProject, Project } from "../types";

interface HomeProps {
  jobs: Job[];
  project: Project;
}

const Home: FC<HomeProps> = ({ jobs, project }) => {
  return (
    <>
      <SEO 
        siteTitle='Home'
        title={'Home'}
        description={'ホームページです'}
      />
      <Hero />
      <Services />
      <Experience 
        jobs={jobs}
        showLink={true}
      />
      <ProjectCard 
        project={project}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const resJobs: FetchJob = await fetch('https://next-portfolio.microcms.io/api/v1/experience', {
    headers: {"X-API-KEY":process.env.API_KEY}
  })
  .then(resJobs => resJobs.json())
  .catch(() => null);

  const resProject: FetchProject = await fetch('https://next-portfolio.microcms.io/api/v1/projects/2jyh1-48lh', {
    headers: {"X-API-KEY":process.env.API_KEY}
  })
  .then(resProject => resProject.json())
  .catch(() => null);

  return {
      props: {
        jobs: resJobs.contents,
        project: resProject,
      }
  }
}

export default Home;
