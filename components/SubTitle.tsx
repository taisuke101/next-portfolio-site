import { VFC } from 'react'

interface SubTitleProps {
        subTitle: string;
}

const SubTitle: VFC<SubTitleProps> = ({ subTitle }) => {
        return (
                <>
                        <h3 className='text-2xl font-medium tracking-wider text-center text-gray-800 md:text-3xl'>{subTitle}</h3>
                        <div className='w-24 h-1 mx-auto mt-4 mb-5 bg-green-400'></div>
                </>
        );
}
export default SubTitle;