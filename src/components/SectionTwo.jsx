import '../styles/section-two.css';
import htmlCssJsLogo from '../assets/img/html-css-js-logo.webp';
import nodeMysql from '../assets/img/nodejs-mysql.webp';
import herramientas from '../assets/img/herramientas.webp';
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

    const [ state, setState ] = useState(false);
    const [ modalType, setModalType ] = useState('');

    const classBoxWhite = 'square__white border rounded-4 pt-4 ps-5 pe-5';

    return (
        <section className="text-center pt-4" ref={ refSection }>
            <hr id="habilidades" />
            <h2 className='fs-1'>Mis habilidades</h2>
            <div className="d-flex justify-content-evenly mt-5 mb-5">
                <button 
                    className={ classBoxWhite }
                    onClick={() => {
                        setState(true);
                        setModalType('front');
                    }}
                >
                    <img className="img__square" src={ htmlCssJsLogo } alt="HTML CSS JavasScript" />
                    <p className="fw-bold mt-4 fs-3">Front-End</p>
                </button>
                <button 
                    className={ classBoxWhite }
                    onClick={() => {
                        setState(true);
                        setModalType('back');
                    }}
                >
                    <img className="img__square" src={nodeMysql} alt="NodeJS MySql" />
                    <p className="fw-bold mt-4 fs-3">Back-End</p>
                </button>
                <button 
                    className={ classBoxWhite }
                    onClick={() => {
                        setState(true);
                        setModalType('herramientas');
                    }}
                >
                    <img className="img__square" src={herramientas} alt="Git Github Consola VSCode" />
                    <p className="fw-bold mt-4 fs-3">Herramientas</p>
                </button>
                <ModalSkills 
                    state={ state } 
                    change={ () => { setState(false) } } 
                    modalType={ modalType }
                />
            </div>
        </section>
    );
}