import { GetStaticProps } from "next";
import { FC } from "react";
import Experience from "../components/Experience";

import Hero from "../components/Hero";
import Services from "../components/Services";
import { Jobs } from "../types";

interface HomeProps {
  jobs: Jobs[];
}

const Home: FC<HomeProps> = ({ jobs }) => {
  return (
    <>
      <Hero />
      <Services />
      <Experience 
        jobs={jobs}
        showLink={true}
      />
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://next-portfolio.microcms.io/api/v1/experience', {
    headers: {"X-API-KEY":process.env.API_KEY}
  })
  .then(res => res.json())
  .catch(() => null);

  return {
      props: {
        jobs: res.contents,
      }
  }
}





export default Home;
