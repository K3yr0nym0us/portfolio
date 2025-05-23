import imgVsCode from '../../assets/img/vscode.png';
import imgGit from '../../assets/img/git+github.webp';
import imgTerminal from '../../assets/img/terminal-icono.png';

type Props = {
    onHide: () => void;
}

export const ModalHerramientas = ({ onHide }: Props) => {
    return (
        <div className='modal__window text-center p-4'>
            <h1 className="h1__skills fs-1">Herramientas</h1>
            <p className="fs-5 mt-3">Mis herramientas de desarrollo habituales son:</p>
            <img className="img__skills mt-3" src={ imgVsCode } alt="VSCode" />
            <h2 className="fs-3 mt-2">VSCode</h2>
            <p className="fs-5">Editor de codigo</p>
            <img className="w-25 mt-3" src={ imgGit } alt="GitHub" />
            <p className="fs-5 mt-2">
                Mis habilidades en control de versiones son:<br />
                Creacion de repositorios GitHub, uso de comandos basicos como:<br />
                git pull, git push, git checkout, entre otros.
            </p>
            <img className="img__skills mt-3" src={ imgTerminal } alt="CMD" />
            <h2 className="h2__skills">Terminal</h2>
            <p className="fs-5">
                Uso basico de las consolas Windows CMD, PowerShell y Linux Bach.<br />
                Configuracion de permisos con mkdir, navegacion entre directorios,<br />
                Manipulacion de archivos, entre otros.
            </p>
            <button 
                className="btn__cv rounded-5 border text-secondary fs-5 mt-4 fw-bold bg-white p-2 pe-3 ps-3" 
                onClick={ onHide }
            >Cerrar</button>
        </div>
    )
}