import { VFC } from 'react'
import { MyInfo, Stack } from '../types';
import SubTitle from './SubTitle';
import Title from './Title';

interface AboutMeProps {
    myInfo: MyInfo;
    skill: Stack[];
}

const AboutMe: VFC<AboutMeProps> = ({ myInfo, skill }) => {
    return (
        <article className='h-screen pt-24 bg-gray-100'>
            <section className='grid lg:grid-cols-2'>
                <section className='hidden max-w-2xl lg:block lg:ml-10 '>
                    <img src={myInfo.image.url} alt=""/>
                </section>
                <section>
                    <div className='mb-10 text-center'>
                        <Title title='About Me'/>
                    </div>
                    <SubTitle subTitle='出身地' />
                    <h2 className='mb-5 text-2xl text-center'>{myInfo.from}</h2>
                    <SubTitle subTitle='説明' />
                    <p className='mx-3 mb-5 text-lg whitespace-pre-wrap md:text-center'>{myInfo.description}</p>
                    <SubTitle subTitle='趣味' />
                    <p className='mx-3 mb-5 whitespace-pre-wrap md:text-center'>{myInfo.hobby}</p>
                    <SubTitle subTitle='技術スタック'/>
                    <section className='md:mt-5 md:text-center'>
                        {skill.map(skill => (
                            <span 
                                key={skill.id}
                                className='inline-block p-2 mx-2 mt-3 mr-3 font-light tracking-widest text-gray-600 break-words bg-gray-200 rounded-lg'
                            >{skill.stack}</span>
                        ))}
                    </section>
                </section>
            </section>
        </article>
    );
}
export default AboutMe;