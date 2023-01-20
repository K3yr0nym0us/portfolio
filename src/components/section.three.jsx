import imgCiisa from '../assets/img/ciisa.webp'
import imgOne from '../assets/img/One.webp'
import aluraOracle from '../assets/img/aluraoracle.webp'
import '../styles/section-three.css'

export const SectionThree = () => {

    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 600) {
            const element = document.querySelector('[data-formacion]');
            const position = element.getBoundingClientRect();
            if (position.top <= 500 && position.top >= -50) {
                element.classList.replace('imgs__formacion--hidden', 'imgs__formacion');
            } else {
                element.classList.remove('imgs__formacion');
                element.classList.add('imgs__formacion--hidden');
            };
        } else {
            const element = document.querySelector('[data-formacion]');
            element.classList.replace('imgs__formacion--hidden', 'imgs__formacion');
        };
    });

    return <section className="section__three">
        <h3>Mi Formación</h3>
        <div className="imgs__formacion--hidden" data-formacion>
            <img className="img__ciisa" src={imgCiisa} alt="Ciisa Instituto de ciencias tecnologicas" />
            <img className="img__one" src={imgOne} alt="Oracle Next Educations" />
            <img className="img__alura" src={aluraOracle} alt="alura-latam" />
        </div>
    </section>
}