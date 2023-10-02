// con esta libreria creamos ventanas modales
import Modal from 'react-bootstrap/Modal';
import { ModalFront } from "../modals/ModalFront";
import { ModalBack } from "../modals/ModalBack";
import { ModalHerramientas } from "../modals/ModalHerramientas";
import { ModalOtros } from "../modals/ModalOtros";
import '../../styles/skills.css';

export const ModalSkills = ({ show, onHide, modalType }) => {

    if(modalType === 'front') {
        return (
            <Modal show={ show } size="lg" className='rounded-5 p-4'>
                <ModalFront onHide={ onHide } />
            </Modal>
        )
    } else if (modalType === 'back') {
        return (
            <Modal show={ show } size="lg" className='rounded-5 p-4'>
                <ModalBack onHide={ onHide } />
            </Modal>
        )
    } else if (modalType === 'herramientas') {
        return (
            <Modal show={ show } size="lg" className='rounded-5 p-4'>
                <ModalHerramientas onHide={ onHide } />
            </Modal>
        )
    } else if (modalType === 'otros') {
        return (
            <Modal show={ show } size="lg" className='rounded-5 p-4'>
                <ModalOtros onHide={ onHide } />
            </Modal>
        )
    }
}