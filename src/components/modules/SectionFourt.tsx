import { useEffect, useRef } from 'react';

import portfolio from '../../assets/img/portafolio.svg';
import img_kypsystems from '../../assets/img/Logo3.png';
import gitHubCodes from '../../assets/img/github-codes.webp';
import chatoLogo from '../../assets/img/Chato Logo.png';

import '../../styles/section-fourt.css';

import { ClassMenu } from '../App';

type Props = {
    setClaseMenu: (claseMenu: ClassMenu) => void;
}

export const SectionFourt = ({ setClaseMenu }: Props) => {

    const refSection = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(refSection.current)
            if(refSection.current.getBoundingClientRect().top > 0 && refSection.current.getBoundingClientRect().top < 60) {
                setClaseMenu('fourt');
            }
        })
    }, [setClaseMenu]);

    const vpwidth = window.innerWidth > 768;
    const classBoxWhite = `square__white border rounded-4 pt-4 ps-5 pe-5 ${ !vpwidth && 'm-auto w-75 mt-4' }`;

    return (
        <section className="text-center pt-4 pb-5" id='fourt' ref={ refSection }>
            <hr id="proyectos" />
            <h4 className='fs-1 mt-5'>Mis Proyectos</h4>
            <div className={ vpwidth ? "d-flex justify-content-evenly mt-5" : 'd-flex flex-column' }>
                <button className={ classBoxWhite } >
                    <a className='text-decoration-none text-dark' href="https://github.com/K3yr0nym0us/portfolio" target="_blank" rel="noreferrer">
                        <img className={ vpwidth ? 'img__portfolio' : 'w-50' } src={ portfolio } alt="imagen-portafolio" />
                        <p className="fs-4 fw-bold mt-4">Mi Portafolio<br />(codigo)</p>
                    </a>
                </button>
                <button className={ classBoxWhite }>
                    <a className='text-decoration-none text-dark' href="https://kypsystems.cl/" target="_blank" rel="noreferrer">
                        <img className={ vpwidth ? 'img__kypsystems' : 'w-75' } src={ img_kypsystems } alt="img_kypsystems" />
                        <p className="fs-4 fw-bold mt-2">KyPSystems<br />Sistema contable</p>
                    </a>
                </button>
                <button className={ classBoxWhite }>
                    <a className='text-decoration-none text-dark' href="https://chato.com.ar/" target="_blank" rel="noreferrer">
                        <img className={ vpwidth ? 'img__kypsystems' : 'w-75' } src={ chatoLogo } alt="img_kypsystems" />
                        <p className="fs-4 fw-bold mt-2">Chato Store<br />E-Commerce</p>
                    </a>
                </button>
                <button className={ classBoxWhite }>
                    <a className='text-decoration-none text-dark' href="https://github.com/K3yr0nym0us?tab=repositories" target="_blank" rel="noreferrer">
                        <img className={ vpwidth ? 'img__admin' : 'w-50'} src={ gitHubCodes } alt="imagen-github" />
                        <p className="fs-4 fw-bold mt-4">Más proyectos<br />(GitHub)</p>
                    </a>
                </button>
            </div>
        </section>
    )
}