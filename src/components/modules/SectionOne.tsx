import { useEffect, useMemo, useRef } from 'react';

import caricatura from '../../assets/img/caricatura.svg';
import cv from '../../assets/pdf/Curriculum.pdf';
import imgReact from '../../assets/img/React-icon.svg';

import '../../styles/section-one.css';

import { ClassMenu } from '../App';

type Props = {
    setClaseMenu: (claseMenu: ClassMenu) => void;
}

export const SectionOne = ({ setClaseMenu }: Props) => {
    const refSection = useRef<HTMLDivElement>(null);

    const vpwidth = useMemo(() => {
        return window.innerWidth > 768;
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(refSection.current) {
                if(refSection.current.getBoundingClientRect().top > -60 && refSection.current.getBoundingClientRect().top < 60) {
                    setClaseMenu('one');
                }
            }
        })
    }, [setClaseMenu])

    return (
        <section 
            className='section__one pt-5 pb-4' 
            id='home' 
            ref={ refSection }
        >
            <div 
                className={ vpwidth ? 'd-flex justify-content-center mt-2' : 'text-center' }
            >
                <div 
                    className={ vpwidth ? "col-5 mt-5 pt-5 ps-5 ms-5" : 'col'}
                >
                    <h1 className="hello fs-1 fw-bold mt-5">
                        Hola!
                    </h1>
                    <p className="name fs-2">
                        Mi nombre es Kevin Martinez.
                    </p>
                    <small 
                        className={ vpwidth ? "dev d-flex fs-4" : "dev d-flex fs-4 justify-content-center" }
                    >
                        Soy FullStack software developer
                        <img 
                            className='img__react p-1' 
                            src={imgReact} 
                            alt="ReactJS" 
                        />
                    </small>
                    <a 
                        href={cv} 
                        target='_blank' 
                        rel="noreferrer"
                    >
                        <button 
                            className="btn__cv rounded-5 border text-secondary fs-5 mt-4 fw-bold bg-white p-2 pe-3 ps-3"
                        >
                            Descargar CV
                        </button>
                    </a>
                </div>
                <div 
                    className={ vpwidth ? "col-5" : 'd-none' }
                >
                    <img 
                        className='w-100 mt-5' 
                        src={ caricatura } 
                        alt="Web Developer" 
                    />
                </div>
            </div>
        </section>
    );
}