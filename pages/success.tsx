import { VFC } from 'react'
import LinkButton from '../components/LinkButton';
import SEO from '../components/SEO';
import SuccessCard from '../components/SuccessCard';

interface sucessProps {

}

const success: VFC<sucessProps> = ({}) => {
    return (
        <>
            <SEO 
                siteTitle='Success'
                title={'Success'}
                description={'問い合わせに成功した後のページです'}
            />
            <SuccessCard />
        </>
    );
}
export default success;