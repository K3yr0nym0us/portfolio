import '../styles/section-one.css'
import caricatura from '../assets/img/caricatura.webp'
import cv from '../assets/pdf/Curriculum Dev.pdf'
import imgReact from '../assets/img/logoReact.svg'
import { useEffect, useRef } from 'react'

export const SectionOne = ({ setClaseMenu }) => {

    const refSection = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(refSection.current.getBoundingClientRect().top > -10 && refSection.current.getBoundingClientRect().top < 60) {
                setClaseMenu('one');
            }
        })
    })

    return (
        <section className='section__one pt-5 pb-4' id='one' ref={ refSection }>
            <div className='d-flex justify-content-center mt-2'>
                <div className="col-4 mt-5 pt-5">
                    <h1 className="hello fs-1 fw-bold mt-5">Hola!</h1>
                    <p className="name fs-2">Mi nombre es Kevin Martinez.</p>
                    <small className="dev d-flex fs-4">
                        Soy Full-Stack Web Developer
                        <img className='img__react' src={ imgReact } alt="ReactJS" />
                    </small>
                    <a href={ cv } target='_blank' rel="noreferrer">
                        <button className="btn__cv rounded-5 border text-secondary fs-5 mt-4 fw-bold bg-white">Descargar CV</button>
                    </a>
                </div>
                <div className="col-4">
                    <img className='w-100 mt-5' src={ caricatura } alt="Web Developer" />
                </div>
            </div>
        </section>
    );
}