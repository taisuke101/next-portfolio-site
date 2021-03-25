import { VFC } from 'react';
import { useForm } from 'react-hook-form';
import SubmitButton from './SubmitButton';

interface InputForm {
    title: string;
    name: string;
    email: string;
    text: string;
}

const ContactForm: VFC<{}> = () => {
    const { register, handleSubmit, errors } = useForm<InputForm>();
    const onSubmit = (data: InputForm ) => console.log(data);
    
    return (
        <article className='flex items-center h-screen bg-gray-100'>
            <form 
                className='flex flex-col p-10 mx-auto mt-6 space-y-5 text-center bg-white rounded-lg backdrop-blur-30'
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className='text-2xl font-semibold text-navy-800'>お問い合わせ</h1>
                <input 
                    className='p-2 border-2 border-gray-600 rounded-md'
                    name='name'
                    placeholder='名前'
                    ref={register({ required: true })}
                />
                {errors.name && <span className='text-red-600'>必須項目です！</span>}
                <input 
                    className='p-2 border-2 border-gray-600 rounded-md'
                    name='email'
                    placeholder='Eメールアドレス'
                    ref={register({ required: true })}
                />
                {errors.email && <span className='text-red-600'>必須項目です！</span>}
                <input
                    className='p-2 border-2 border-gray-600 rounded-md'
                    name='title'
                    placeholder='タイトル'
                    ref={register({ required: true })}
                />
                {errors.title && <span className='text-red-600'>必須項目です！</span>}
                <textarea
                    className='p-2 border-2 border-gray-600 rounded-md' 
                    name='text'
                    placeholder='本文'
                    rows={10}
                    ref={register({ required: true })}
                />
                {errors.text && <span className='text-red-600'>必須項目です！</span>}

                <SubmitButton 
                    onSubmit={handleSubmit(onSubmit)}
                    text='送信'
                />
            </form>
        </article>
    );
}
export default ContactForm;