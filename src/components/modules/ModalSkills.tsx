import Modal from 'react-bootstrap/Modal';

import {
    ModalBack,
    ModalFront,
    ModalHerramientas,
    ModalOtros
} from '../modals';

import '../../styles/skills.css';

type Props = {
    show: boolean;
    onHide: () => void;
    modalType: string;
}

export const ModalSkills = ({ show, onHide, modalType }: Props) => {

    switch (modalType) {
        case 'front':
            return (
                <Modal show={ show } size="lg" className='rounded-5 p-4'>
                    <ModalFront onHide={ onHide } />
                </Modal>
            )
        case 'back':
            return (
                <Modal show={ show } size="lg" className='rounded-5 p-4'>
                    <ModalBack onHide={ onHide } />
                </Modal>
            )
        case 'herramientas':
            return (
                <Modal show={ show } size="lg" className='rounded-5 p-4'>
                    <ModalHerramientas onHide={ onHide } />
                </Modal>
            )
        case 'otros':
            return (
                <Modal show={ show } size="lg" className='rounded-5 p-4'>
                    <ModalOtros onHide={ onHide } />
                </Modal>
            )
    }
}