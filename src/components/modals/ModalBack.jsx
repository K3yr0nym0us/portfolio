import imgNode from '../../assets/img/NodeJS.png';
import imgSql from '../../assets/img/SQL.png';

export const ModalBack = ({ onHide }) => {
    return (
        <div className='modal__window text-center p-4'>
            <h1 className="h1__skills fs-1">Back-End</h1>
            <p className="fs-5 mt-3">Mis conocimientos en Back-End son los siguientes:</p>
            <img className="w-25 m-auto" 
                src={ imgNode } 
                alt="NodeJS" 
            />
            <h2 className="fs-3">Creacion de ApiRest:</h2>
            <p className="fs-5">
                Manejo de librerias como Express, MySQL2, better-sqlite-3<br />
                jwt, cors, dotenv, morgan, entre otros.
            </p>
            <img className="img__skills mt-4" 
                src={ imgSql }
                alt="SQL" 
            />
            <p className="fs-5">
                Conocimientos en bases de datos relacionales (MySql, Sqlite).<br />
                Creación de end-points de Querys basicas:<br />
                INSERT, REPLACE, UPDATE, DELETE, WHERE.<br />
            </p>
            <button 
                className="btn__cv rounded-5 border text-secondary fs-5 mt-4 fw-bold bg-white p-2 pe-3 ps-3" 
                onClick={ onHide }
            >Cerrar</button>
        </div>
    )
}