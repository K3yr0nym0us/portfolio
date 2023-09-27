// con esta libreria creamos ventanas modales
import { Modal } from "reactstrap";
import { ModalFront } from "./modals/ModalFront";
import { ModalBack } from "./modals/ModalBack";
import { ModalHerramientas } from "./modals/ModalHerramientas";
import '../styles/skills.css';
import { ModalOtros } from "./modals/ModalOtros";

export const ModalSkills = ({ state, change, modalType }) => {
    if(modalType === 'front') {
        return (
            <Modal size="lg" isOpen={ state } className='rounded-5 p-4'>
                <ModalFront change={ change } />
            </Modal>
        )
    } else if (modalType === 'back') {
        return (
            <Modal size="lg" isOpen={ state } className='rounded-5 p-4'>
                <ModalBack change={ change } />
            </Modal>
        )
    } else if (modalType === 'herramientas') {
        return (
            <Modal size="lg" isOpen={ state } className='rounded-5 p-4'>
                <ModalHerramientas change={ change } />
            </Modal>
        )
    } else if (modalType === 'otros') {
        return (
            <Modal size="lg" isOpen={ state } className='rounded-5 p-4'>
                <ModalOtros change={ change } />
            </Modal>
        )
    }
}