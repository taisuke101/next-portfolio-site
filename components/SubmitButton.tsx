import { FormEventHandler, VFC } from 'react'

interface SubmitButtonProps {
    onSubmit: FormEventHandler<HTMLButtonElement>;
    text: string;
}

const SubmitButton: VFC<SubmitButtonProps> = ({ onSubmit, text }) => {
        return (
            <button
                className='p-2 text-lg font-medium tracking-widest text-white transition duration-700 transform rounded-md hover:bg-navy-300 hover:text-black bg-navy-700 hover:-translate-y-0.5'
                onSubmit={onSubmit}
            >
                {text}
            </button>
        );
}
export default SubmitButton;