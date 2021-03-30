import { VFC } from 'react'
import LinkButton from '../components/LinkButton';

interface sucessProps {

}

const success: VFC<sucessProps> = ({}) => {
    return (
        <div className='py-24 space-y-10 text-center h-75vh'>
            <h1 className='mt-10 text-2xl'>お問い合わせを受け付けました！！</h1>
            <p>返信までに数日を要する場合がございますので、ご了承下さい。</p>
            <LinkButton 
                goto='/'
                text='Homeに戻る'
            />
        </div>
    );
}
export default success;