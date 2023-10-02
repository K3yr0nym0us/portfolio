import imgCiisa from '../../assets/img/ciisa.webp'
import imgOne from '../../assets/img/One.png'
import aluraOracle from '../../assets/img/aluraoracle.webp'
import '../../styles/section-three.css'
import { useEffect, useRef, useState } from 'react'

export const SectionThree = ({ setClaseMenu }) => {

    const refSection = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(refSection.current.getBoundingClientRect().top > 0 && refSection.current.getBoundingClientRect().top < 60) {
                setClaseMenu('three');
            }
        })
    });

    const imgsRef = useRef();

    const [ visibility, setVisibility ] = useState('imgs__formacion--hidden');

    window.addEventListener('scroll', () => {
        const position = imgsRef.current.getBoundingClientRect();
        if (position.top <= 500 && position.top >= -50) {
            setVisibility('imgs__formacion');
        } else {
            setVisibility('imgs__formacion--hidden');
        };
    });

    const vpwidth = window.innerWidth > 768;

    return (
        <section className="text-center pt-4 pb-4" id='three' ref={ refSection }>
            <hr id="formacion" />
            <h3 className='fs-1 mt-5'>Mi Formación</h3>
            <div className={ vpwidth ? `d-flex justify-content-evenly ${ visibility } mt-5` : `d-flex flex-column ${ visibility }` } ref={ imgsRef }>
                <img className={ vpwidth ? "w-25" : 'm-auto mt-3 w-75'} src={ imgCiisa } alt="Ciisa Instituto de ciencias tecnologicas" />
                <img className={ vpwidth ? "w-25" : 'm-auto mt-3 w-75'} src={ imgOne } alt="Oracle Next Educations" />
                <img className={ vpwidth ? "w-25" : 'm-auto mt-3 w-75'} src={ aluraOracle } alt="alura-latam" />
            </div>
        </section>
    );
}