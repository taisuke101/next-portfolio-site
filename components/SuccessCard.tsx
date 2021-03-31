import { VFC } from 'react'
import LinkButton from './LinkButton';

interface SuccessCardProps {

}

const SuccessCard: VFC<SuccessCardProps> = ({}) => {
        return (
            <div className='py-24 space-y-10 text-center h-75vh dark:bg-gray-700'>
                <h1 className='mt-10 text-2xl dark:text-gray-200'>
                    お問い合わせを受け付けました！！
                </h1>
                <p className='dark:text-gray-300'>
                    返信までに数日を要する場合がございますので、ご了承下さい。
                </p>
                <LinkButton 
                    goto='/'
                    text='Homeに戻る'
                />
            </div>
        );
}
export default SuccessCard;