import '../../styles/section-two.css';
import logoFront from '../../assets/img/front.png';
import LogoBack from '../../assets/img/LogoBack.svg';
import herramientas from '../../assets/img/herramientas.webp';
import logoOtros from '../../assets/img/LogoOtros.svg';
import { ModalSkills } from './ModalSkills';
import { useEffect, useRef, useState } from "react";

export const SectionTwo = ({ setClaseMenu }) => {

    const refSection = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(refSection.current.getBoundingClientRect().top > 0 && refSection.current.getBoundingClientRect().top < 60) {
                setClaseMenu('two');
            }
        })
    }, [])

    const [ modalType, setModalType ] = useState('');
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const vpwidth = window.innerWidth > 768;
    const classBoxWhite = vpwidth ? 'square__white border rounded-4 pt-4 ps-5 pe-5' : 'square__white border rounded-4 pt-4 ps-5 pe-5 w-75 m-auto mt-4';

    return (
        <section className="text-center" ref={ refSection }>
            <hr id="habilidades" />
            <h2 className='fs-1 mt-5'>Mis habilidades</h2>
            <div className={ vpwidth ? "d-flex justify-content-evenly mt-5 mb-5" : 'd-flex flex-column'} >
                <button 
                    className={ classBoxWhite }
                    onClick={() => {
                        handleShow();
                        setModalType('front');
                    }}
                >
                    <img className={ vpwidth ? "img__square" : 'w-50'} src={ logoFront } alt="HTML CSS JavasScript" />
                    <p className="fw-bold mt-2 fs-3">Front-End</p>
                </button>
                <button 
                    className={ classBoxWhite }
                    onClick={() => {
                        handleShow();
                        setModalType('back');
                    }}
                >
                    <img className={ vpwidth ? "img__square" : 'w-50'} src={ LogoBack } alt="NodeJS MySql" />
                    <p className="fw-bold mt-2 fs-3">Back-End</p>
                </button>
                <button 
                    className={ classBoxWhite }
                    onClick={() => {
                        handleShow();
                        setModalType('herramientas');
                    }}
                >
                    <img className={ vpwidth ? "img__square" : 'w-50'} src={ herramientas } alt="Git Github Consola VSCode" />
                    <p className="fw-bold mt-2 fs-3">Herramientas</p>
                </button>
                <button 
                    className={ classBoxWhite }
                    onClick={() => {
                        handleShow();
                        setModalType('otros');
                    }}
                >
                    <img className={ vpwidth ? "img__square" : 'w-50'} src={ logoOtros } alt="Otros" />
                    <p className="fw-bold mt-2 fs-3">Otros</p>
                </button>
                <ModalSkills 
                    show={ show } 
                    onHide={ handleClose }
                    modalType={ modalType }
                />
            </div>
        </section>
    );
}