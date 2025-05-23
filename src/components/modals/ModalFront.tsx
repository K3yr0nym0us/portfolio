import imgHtml from '../../assets/img/html-css-js-logo.webp';
import imgReact from '../../assets/img/React-icon.svg';
import imgElectron from '../../assets/img/Electron.png';

type Props = {
    onHide: () => void;
}

export const ModalFront = ({ onHide }: Props) => {

    return (
        <div className='modal__window text-center pb-4'>
            <h1 className="h1__skills fs-1 mt-4">Front-End</h1>
            <p className="fs-5 mt-3">Mis habilidades como desarrollador Front-End se especializan en:</p>
            <img className="w-25 m-auto" src={ imgHtml } alt="HTML" />
            <p className="fs-5">
                Cuento con conocimiento profundo de HTML, CSS y JavaScript.<br />
                Puedo analizar y procesar el código HTML<br />
                Soy capaz de interpretar las reglas de estilo definidas en CSS<br />
                Entiendo la lógica y la interacción en tiempo real en una<br /> 
                página web, eventos, animaciones y manipulación del DOM (Document Object Model).
            </p>
            <img className="w-25" src={ imgReact } alt="JavasScript" />
            <h2 className="fs-3">React</h2>
            <p className="fs-5">
                Conocimientos en React, incluyendo la comprensión de componentes,<br />
                estados, props, ciclos de vida, el uso de hooks y otros conceptos<br />
                básicos y fundamentales para el desarrollo de aplicaciones web.
            </p>
            <img className="img__skills mt-4" src={ imgElectron } alt="JavasScript" />
            <h2 className="fs-3">Electron JS</h2>
            <p className="fs-5">
                Conocimiento en Electron.js, un framework que permite crear<br />
                aplicaciones de escritorio multiplataforma utilizando tecnologías web.<br /> 
                Su capacidad para interactuar con el sistema operativo, acceso<br /> 
                a archivos y ventanas de aplicación.
            </p>
            <button 
                className="btn__cv rounded-5 border text-secondary fs-5 mt-4 fw-bold bg-white p-2 pe-3 ps-3"
                onClick={ onHide }
            >Cerrar</button>
        </div>
    )
}