import { VFC } from 'react'

interface TitleProps {
    title: string;
}

const Title: VFC<TitleProps> = ({title}) => {
    return (
        <div>
            <h2 className='text-3xl font-semibold tracking-wider text-gray-800'>{title}</h2>
            <div className='w-24 h-1 mx-auto mt-4 mb-5 bg-navy-600'></div>
        </div>
    );
}
export default Title;