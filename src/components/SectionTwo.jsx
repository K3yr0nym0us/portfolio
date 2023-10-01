import '../styles/section-two.css';
import logoFront from '../assets/img/front.png';
import nodeExpresSql from '../assets/img/nodeExpressSql.png';
import herramientas from '../assets/img/herramientas.webp';
import logoOtros from '../assets/img/LogoOtros.svg';
import { ModalSkills } from './modalSkills';
import { useEffect, useRef, useState } from "react";

export const SectionTwo = ({ setClaseMenu }) => {

    const refSection = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(refSection.current.getBoundingClientRect().top > 0 && refSection.current.getBoundingClientRect().top < 60) {
                setClaseMenu('two');
            }
        })
    })

    const [ modalType, setModalType ] = useState('');
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const classBoxWhite = 'square__white border rounded-4 pt-4 ps-5 pe-5';

    return (
        <section className="text-center pt-4" ref={ refSection }>
            <hr id="habilidades" />
            <h2 className='fs-1'>Mis habilidades</h2>
            <div className="d-flex justify-content-evenly mt-5 mb-5">
                <button 
                    className={ classBoxWhite }
                    onClick={() => {
                        handleShow();
                        setModalType('front');
                    }}
                >
                    <img className="img__square" src={ logoFront } alt="HTML CSS JavasScript" />
                    <p className="fw-bold mt-2 fs-3">Front-End</p>
                </button>
                <button 
                    className={ classBoxWhite }
                    onClick={() => {
                        handleShow();
                        setModalType('back');
                    }}
                >
                    <img className="img__square" src={ nodeExpresSql } alt="NodeJS MySql" />
                    <p className="fw-bold mt-2 fs-3">Back-End</p>
                </button>
                <button 
                    className={ classBoxWhite }
                    onClick={() => {
                        handleShow();
                        setModalType('herramientas');
                    }}
                >
                    <img className="img__square" src={ herramientas } alt="Git Github Consola VSCode" />
                    <p className="fw-bold mt-2 fs-3">Herramientas</p>
                </button>
                <button 
                    className={ classBoxWhite }
                    onClick={() => {
                        handleShow();
                        setModalType('otros');
                    }}
                >
                    <img className="img__square" src={ logoOtros } alt="Otros" />
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