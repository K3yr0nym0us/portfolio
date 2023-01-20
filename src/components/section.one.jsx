import '../styles/section-one.css'
import caricatura from '../assets/img/caricatura.webp'
import cv from '../assets/pdf/Curriculum Dev.pdf'
import imgReact from '../assets/img/logo.svg'

export const SectionOne = () => {
    return <section className='section__one'>
        <div className='container'>
            <div className="text__container">
                <p className="hello">Hola</p>
                <p className="name">Soy Kevin Martinez</p>
                <p className="dev">Web Developer<img className='img__react' src={imgReact} alt="ReactJS" /></p>
                <a href={cv} target='_blank' rel="noreferrer">
                    <button className="btn__cv">Descargar CV</button>
                </a>
            </div>
            <div className="img__dev">
                <img src={caricatura} alt="Web Developer" />
            </div>
        </div>
    </section>
}