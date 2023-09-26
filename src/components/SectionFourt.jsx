import '../styles/section-fourt.css';
import portfolio from '../assets/img/portafolio.webp';
import minventario from '../assets/img/Screenshot 2023-09-26 163300.png';
import gitHubCodes from '../assets/img/github-codes.webp';
import { useEffect, useRef } from 'react';

export const SectionFourt = ({ setClaseMenu }) => {

    const refSection = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(refSection.current.getBoundingClientRect().top > 0 && refSection.current.getBoundingClientRect().top < 60) {
                setClaseMenu('fourt');
            }
        })
    })

    const classBoxWhite = 'square__white border rounded-4 pt-4 ps-5 pe-5';

    return (
        <section className="text-center pt-4 pb-5" id='fourt' ref={ refSection }>
            <hr id="proyectos" />
            <h4 className='fs-1'>Mis Proyectos</h4>
            <div className="d-flex justify-content-evenly mt-5">
                <button className={ classBoxWhite }>
                    <a className='text-decoration-none text-dark' href="https://k3yr0nym0us.github.io/portfolio/" target="_blank" rel="noreferrer">
                        <img className="img__portfolio" src={ portfolio } alt="imagen-portafolio" />
                        <p className="fs-4 fw-bold mt-4">Mi Portafolio</p>
                    </a>
                </button>
                <button className={ classBoxWhite }>
                    <a className='text-decoration-none text-dark' href="https://minventario.cl/" target="_blank" rel="noreferrer">
                        <img className="img__square" src={ minventario } alt="" />
                        <p className="fs-4 fw-bold mt-2">Minventario.cl</p>
                    </a>
                </button>
                <button className={ classBoxWhite }>
                    <a className='text-decoration-none text-dark' href="https://github.com/K3yr0nym0us/Administrador-de-tareas-pendientes" target="_blank" rel="noreferrer">
                        <img className="img__admin" src={ gitHubCodes } alt="imagen-github" />
                        <p className="fs-4 fw-bold mt-4">Próximamente</p>
                    </a>
                </button>
            </div>
        </section>
    )
}