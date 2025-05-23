import { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

import gitHub from '../../assets/img/github.svg';
import linkedin from '../../assets/img/linkedin.svg';
import gmail from '../../assets/img/gmail.svg';
import whatsapp from '../../assets/img/WhatsApp_icon.svg';

import '../../styles/section-five.css';

import { ClassMenu } from '../App';

type Props = {
    setClaseMenu: (claseMenu: ClassMenu) => void;
}

export const SectionFive = ({ setClaseMenu }: Props) => {

    const refSection = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(refSection.current)
            if(refSection.current.getBoundingClientRect().top > 0 && refSection.current.getBoundingClientRect().top < 60) {
                setClaseMenu('five');
            }
        })
    }, [setClaseMenu])

    const handleClick = () => {
        navigator.clipboard.writeText('kevinmartinezbarra@gmail.com');
        Swal.fire({
            icon: 'success',
            title: 'Copiado al portapapeles',
            showConfirmButton: false,
            timer: 1000,
        })
    }

    return (
        <section className="pt-4 pb-5 text-center" id='five' ref={ refSection }>
            <hr id="contacto" />
            <h5 className='fs-1 mt-5'>Contacto</h5>
            <div className="mt-5 d-flex justify-content-evenly">
                <a className='text-decoration-none text-dark' href="https://github.com/K3yr0nym0us" target="_blank" rel="noreferrer">
                    <img className='img__contact' src={ gitHub } alt="github" />
                    <p className='fs-4 fw-bold mt-2'>GitHub</p>
                </a>
                <a className='text-decoration-none text-dark' href="https://www.linkedin.com/in/kevin-martinez-barra/" target="_blank" rel="noreferrer">
                    <img className='img__contact' src={ linkedin } alt="linkedin" />
                    <p className='fs-4 fw-bold mt-2'>LinkedIn</p>
                </a>
                <div className='text-decoration-none text-dark bg-white'>
                    <img className='img__contact' style={{ cursor: 'pointer' }} src={ gmail } onClick={ handleClick } alt="gmail" />
                    <p className='fs-4 fw-bold mt-2'>Gmail</p>
                </div>
                <a className='text-decoration-none text-dark' href="https://api.whatsapp.com/send?phone=56958407177" target='_blank' rel="noreferrer">
                    <img className='img__contact' src={ whatsapp } alt="whatsapp" />
                    <p className='fs-4 fw-bold mt-2'>WhatsApp</p>
                </a>
            </div>
        </section>
    )
}