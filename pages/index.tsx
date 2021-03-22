import { GetStaticProps } from "next";
import { FC } from "react";
import Experience from "../components/Experience";

import Hero from "../components/Hero";
import Services from "../components/Services";

interface HomeProps { 
}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <Services />
      <Experience/>
    </>
  )
}


// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch('https://next-portfolio.microcms.io/api/v1/services', {
//     headers: {"X-API-KEY":process.env.API_KEY}
//   })
//   .then(res => res.json())
//   .catch(() => null);
  
//   return {
//       props: {
//         posts: res.contents
//       }
//   }
// }





export default Home;
