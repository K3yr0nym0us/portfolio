import '../styles/section-five.css'
import gitHub from '../assets/img/github.webp'
import linkedin from '../assets/img/linkedin.webp'
import gmail from '../assets/img/gmail.png'

export const SectionFive = () => {
    return <section className="section__five">
        <h5>Contacto</h5>
        <div className="imgs__contact">
            <a href="https://github.com/K3yr0nym0us" target="_blank" rel="noreferrer">
                <img className="img__github" src={gitHub} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/kevin-martinez-barra/" target="_blank" rel="noreferrer">
                <img className="img__linkedin" src={linkedin} alt="linkedin" />
            </a>
            <a href="mailto:kevinmartinezbarra@gmail.com" rel="noreferrer">
                <img className="img__gmail" src={gmail} alt="gmail" />
            </a>
        </div>
    </section>
}