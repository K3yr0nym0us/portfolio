import imgFigma from '../../assets/img/figmaLogo.png';
import imgBootstrap from '../../assets/img/Bootstrap_logo.png';
import imgSweet from '../../assets/img/SweetLogo.png';

export const ModalOtros = ({ change }) => {
    return (
        <div className='modal__window text-center p-4'>
            <h1 className="h1__skills fs-1">Otros</h1>
            <p className="fs-5 mt-3">Mis herramientas favoritas son:</p>
            <img className="img__skills mt-3" src={ imgFigma } alt="Figma" />
            <h2 className="fs-3 mt-2">Figma</h2>
            <p className="fs-5"> 
                Tengo conocimientos basicos en crear, editar y compartir proyectos de diseño.<br />
                Facilitando la colaboración y la creación de prototipos interactivos.
            </p>
            <img className="w-25 mt-3" src={ imgBootstrap } alt="Bootstrap" />
            <h2 className="h2__skills mt-2">Bootstrap</h2>
            <p className="fs-5 mt-2">
                Tengo un conocimiento extenso de Bootstrap, pero siempre puedo<br />
                aprender más y profundizar en aspectos específicos si es necesario..
            </p>
            <img className="img__skills mt-3" src={ imgSweet } alt="SweetAllert2" />
            <h2 className="h2__skills">SweetAllert2</h2>
            <p className="fs-5">
                Mi libreria favorita de creación de ventanas<br />
                emergentes, de notificación o modales.<br />
                La he usado en todos mis proyectos ya que es muy comoda<br />
                permite crear formulario con buen diseño y es hermosa a la vista.
            </p>
            <button 
                className="btn__cv fs-4 fw-bold rounded-5 m-auto mt-3 mb-4" 
                onClick={ change }
            >Cerrar</button>
        </div>
    )
}