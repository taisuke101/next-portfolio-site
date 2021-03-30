import { FC } from 'react';
import Modal from 'react-modal';

interface ModalComponentProps {
    isOpen: boolean
    onRequestClose: any
}

Modal.setAppElement("#__next")

const ModalComponent: FC<ModalComponentProps> = ({ isOpen, onRequestClose, children }) => {
        return (
            <Modal
                isOpen={isOpen} 
                style={customStyle}
                onRequestClose={onRequestClose}
            >
                { children }
            </Modal>
        );
}

const customStyle: ReactModal.Styles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(2px)',
        backgroundClip: 'padding-box',
        zIndex: 20,
    }
}

export default ModalComponent;