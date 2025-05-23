import { useEffect, useMemo, useRef, useState } from 'react';

import imgCiisa from '../../assets/img/ciisa.webp';
import imgOne from '../../assets/img/One.png';
import aluraOracle from '../../assets/img/aluraoracle.webp';

import '../../styles/section-three.css';

import { ClassMenu } from '../App';

type Props = {
    setClaseMenu: (claseMenu: ClassMenu) => void;
}

export const SectionThree = ({ setClaseMenu }: Props) => {
    const [ visibility, setVisibility ] = useState('imgs__formacion--hidden');

    const imgsRef = useRef<HTMLImageElement>(null);
    const refSection = useRef<HTMLDivElement>(null);

    const vpwidth = useMemo(() => {
        return window.innerWidth > 768;
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(refSection.current) {
                if(refSection.current.getBoundingClientRect().top > 0 && refSection.current.getBoundingClientRect().top < 60) {
                    setClaseMenu('three');
                }
    
                if (refSection.current?.getBoundingClientRect().top <= 500 && refSection.current?.getBoundingClientRect()?.top >= -50) {
                    setVisibility('imgs__formacion');
                } else {
                    setVisibility('imgs__formacion--hidden');
                };
            }
        })
    }, []);

    return (
        <section className="text-center pt-4 pb-4" id='three' ref={ refSection }>
            <hr id="formación" />
            <h3 className='fs-1 mt-5'>Mi Formación</h3>
            <div 
                className={ vpwidth ? `d-flex justify-content-evenly ${ visibility } mt-5` : `d-flex flex-column ${ visibility }` } 
                ref={ imgsRef }
            >
                <img 
                    className={ vpwidth ? "w-25" : 'm-auto mt-3 w-75'} 
                    src={ imgCiisa } alt="Ciisa Instituto de ciencias tecnologicas" 
                />
                <img 
                    className={ vpwidth ? "w-25" : 'm-auto mt-3 w-75'} 
                    src={ imgOne } alt="Oracle Next Educations" 
                />
                <img 
                    className={ vpwidth ? "w-25" : 'm-auto mt-3 w-75'} 
                    src={ aluraOracle } alt="alura-latam" 
                />
            </div>
        </section>
    );
}