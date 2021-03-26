import { VFC } from 'react'

interface SubTitleProps {
        subTitle: string;
}

const SubTitle: VFC<SubTitleProps> = ({ subTitle }) => {
        return (
                <>
                        <h3 className='text-2xl font-medium tracking-wider text-center text-gray-800 sm:text-2xl lg:text-left'>{subTitle}</h3>
                        <div className='w-24 h-1 mx-auto mt-4 mb-5 bg-green-400 lg:mx-0'></div>
                </>
        );
}
export default SubTitle;