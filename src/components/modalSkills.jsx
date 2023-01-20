// con esta libreria creamos ventanas modales
import { Modal } from "reactstrap";
import '../styles/skills.css'
import imgHtml from '../assets/img/html.png'
import imgCss from '../assets/img/css.png'
import imgJs from '../assets/img/javascript.png'
import imgNode from '../assets/img/NodeJS.png'
import imgMySql from '../assets/img/MySQL.webp'
import imgVsCode from '../assets/img/vscode.png'
import imgGitGitHub from '../assets/img/git+github.webp'
import imgTerminal from '../assets/img/terminal-icono.png'

export const ModalSkills = ({state, change, modalType}) => {
    if(modalType === 'front') {
        return <Modal isOpen={state} className='container__skills'>
            <h1 className="h1__skills">Front-End</h1>
            <p className="p__skills">Mis habilidades como desarrollador Front-End se especializan en:</p>
            <h2 className="h2__skills">HTML</h2>
            <img className="img__skills" src={imgHtml} alt="HTML" />
            <p className="p__skills">Manejo de etiquetas:</p>
            <p className="p__skills">
                Creacion de formularios,<br />
                construccion de tablas,<br />
                manejo de listas, navegacion entre otros.
            </p>
            <h2 className="h2__skills">CSS</h2>
            <img className="img__skills" src={imgCss} alt="CSS" />
            <p className="p__skills">Entre mis conocimientos en CSS se encuentran:</p>
            <p className="p__skills">
                CSS Grid simplificado de layouts,<br />
                CSS Flex-Box posicionado de elementos,<br />
                y CSS layouts responsivos utilizando media querys.
            </p>
            <h2 className="h2__skills">JavasScript</h2>
            <img className="img__skills" src={imgJs} alt="JavasScript" />
            <p className="p__skills">Entre mis conocimientos en JavasScript se encuentran:</p>
            <p className="p__skills">
                Manipulacion del DOM con JavasScript,<br />
                CRUD con JavasScript asíncrono,<br />
                almacenamiento de datos en el navegador,<br />
                y validacion de formularios.
            </p>
            <button className="btn__cv" onClick={change}>Cerrar</button>
        </Modal>
    } else if (modalType === 'back') {
        return <Modal isOpen={state} className='container__skills'>
            <h1 className="h1__skills">Back-End</h1>
            <p className="p__skills">Aunque mis conocimientos en Back-End aun son basicos, mis habilidades son las siguientes:</p>
            <img className="img__skills img__back" src={imgNode} alt="NodeJS" />
            <p className="p__skills">Creacion de ApiRest:</p>
            <p className="p__skills">
                Uso de librerias como Express,<br />
                MySQL, jwt, cors, dotenv,<br />
                morgan, entre otros.
            </p>
            <img className="img__skills img__back" src={imgMySql} alt="MySQL" />
            <p className="p__skills">Entre mis conocimientos en MySQL se encuentran:</p>
            <p className="p__skills">
                Creacion y configuracion de bases de datos,<br />
                Creacion de consultas basicas,<br />
                Uso de comandos INSERT, REPLACE, UPDATE, DELETE,<br />
                indices y restricciones, entre otros.
            </p>
            <button className="btn__cv" onClick={change}>Cerrar</button>
        </Modal>
    } else if (modalType === 'herramientas') {
        return <Modal isOpen={state} className='container__skills'>
            <h1 className="h1__skills">Herramientas</h1>
            <p className="p__skills">Mis herramientas de desarrollo habituales son:</p>
            <h2 className="h2__skills">Visual Studio Code</h2>
            <img className="img__skills" src={imgVsCode} alt="VSCode" />
            <p className="p__skills">Editor de codigo:</p>
            <p className="p__skills">
                Uso de multi cursores,<br />
                Edicion rapida,<br />
                Atajos, entre otros.
            </p>
            <h2 className="h2__skills">Git & GitHub</h2>
            <img className="img__skills github" src={imgGitGitHub} alt="GitHub" />
            <p className="p__skills">Mis habilidades en control de versiones son:</p>
            <p className="p__skills">
                Creacion de repositorios GitHub,<br />
                Uso de comandos basicos como:,<br />
                git pull, git push, git checkout, entre otros.
            </p>
            <h2 className="h2__skills">Consola de comandos</h2>
            <img className="img__skills" src={imgTerminal} alt="CMD" />
            <p className="p__skills">Conozco el uso basico de las consolas:</p>
            <p className="p__skills">
                Windows CMD, PowerShell,<br />
                y Linux Bach, en usos tales como:<br />
                Configuracion de permisos con mkdir,<br />
                Navegacion entre directorios,<br />
                Manipulacion de archivos, entre otros.
            </p>
            <button className="btn__cv" onClick={change}>Cerrar</button>
        </Modal>
    }
}