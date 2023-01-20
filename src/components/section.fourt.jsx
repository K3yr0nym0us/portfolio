import '../styles/section-fourt.css'
import portfolio from '../assets/img/portafolio.png'
import minventario from '../assets/img/Logo.webp'
import gitHubCodes from '../assets/img/github-codes.webp'

export const SectionFourt = () => {
    return <section className="section__fourt">
        <h4>Mis Proyectos</h4>
        <div className="skills__container">
            <div className="square__white">
                <a href="https://k3yr0nym0us.github.io/portfolio/" target="_blank" rel="noreferrer">
                    <img className="img__portfolio" src={portfolio} alt="" />
                    <p className="description">Mi Portafolio</p>
                </a>
            </div>
            <div className="square__white">
                <a href="https://minventario.cl/" target="_blank" rel="noreferrer">
                    <img className="img__square" src={minventario} alt="" />
                    <p className="description">Minventario.cl</p>
                </a>
            </div>
            <div className="square__white">
                <a href="https://github.com/K3yr0nym0us/Administrador-de-tareas-pendientes" target="_blank" rel="noreferrer">
                    <img className="img__admin" src={gitHubCodes} alt="" />
                    <p className="description">Administrador de Tareas</p>
                </a>
            </div>
        </div>
    </section>
}