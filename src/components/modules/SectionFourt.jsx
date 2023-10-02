import '../../styles/section-fourt.css';
import portfolio from '../../assets/img/portafolio.svg';
import minventario from '../../assets/img/Screenshot 2023-09-26 163300.png';
import gitHubCodes from '../../assets/img/github-codes.webp';
import { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

export const SectionFourt = ({ setClaseMenu }) => {

    const refSection = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(refSection.current.getBoundingClientRect().top > 0 && refSection.current.getBoundingClientRect().top < 60) {
                setClaseMenu('fourt');
            }
        })
    }, [])

    const handleNotify = () => {
        const Toast = Swal.mixin({
            toast: true,
            showConfirmButton: false,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
          
        Toast.fire({
            icon: 'warning',
            title: 'Ya estás el el portafolio.',
        })
    }

    const vpwidth = window.innerWidth > 768;
    const classBoxWhite = `square__white border rounded-4 pt-4 ps-5 pe-5 ${ !vpwidth && 'm-auto w-75 mt-4' }`;

    return (
        <section className="text-center pt-4 pb-5" id='fourt' ref={ refSection }>
            <hr id="proyectos" />
            <h4 className='fs-1 mt-5'>Mis Proyectos</h4>
            <div className={ vpwidth ? "d-flex justify-content-evenly mt-5" : 'd-flex flex-column' }>
                <button className={ classBoxWhite } onClick={ handleNotify }>
                    <img className={ vpwidth ? 'img__portfolio' : 'w-50' } src={ portfolio } alt="imagen-portafolio" />
                    <p className="fs-4 fw-bold mt-4">Mi Portafolio</p>
                </button>
                <button className={ classBoxWhite }>
                    <a className='text-decoration-none text-dark' href="https://minventario.cl/" target="_blank" rel="noreferrer">
                        <img className={ vpwidth ? 'img__square' : 'w-75' } src={ minventario } alt="" />
                        <p className="fs-4 fw-bold mt-2">Minventario.cl</p>
                    </a>
                </button>
                <button className={ classBoxWhite }>
                    <a className='text-decoration-none text-dark' href="https://github.com/K3yr0nym0us/Administrador-de-tareas-pendientes" target="_blank" rel="noreferrer">
                        <img className={ vpwidth ? 'img__admin' : 'w-50'} src={ gitHubCodes } alt="imagen-github" />
                        <p className="fs-4 fw-bold mt-4">Más en GitHub</p>
                    </a>
                </button>
            </div>
        </section>
    )
}