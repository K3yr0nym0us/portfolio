import '../styles/menu-fixed.css';

export const Menu = ({ claseMenu }) => {

    return (
        <header>
            <div className="menu-fixed pt-2 pb-2 text-center bg-white fs-4">
                <nav className='w-75 m-auto'>
                    <ul className='row w-75 m-auto'>
                        <li className='col'>
                            <a 
                                className='text-decoration-none text-black' href="#one"
                                id={ claseMenu === 'one' ? 'active' : '' }
                            >HOME</a>
                        </li>
                        <li className='col'>
                            <a 
                                className='text-decoration-none text-black' 
                                href="#habilidades"
                                id={ claseMenu === 'two' ? 'active' : '' }
                            >HABILIDADES</a>
                        </li>
                        <li className='col'>
                            <a 
                                className='text-decoration-none text-black' 
                                href="#formacion"
                                id={ claseMenu === 'three' ? 'active' : '' }
                            >FORMACIÓN</a>
                        </li>
                        <li className='col'>
                            <a 
                                className='text-decoration-none text-black' href="#proyectos"
                                id={ claseMenu === 'fourt' ? 'active' : '' }
                            >PROYECTOS</a>
                        </li>
                        <li className='col'>
                            <a 
                                className='text-decoration-none text-black' 
                                href="#contacto"
                                id={ claseMenu === 'five' ? 'active' : '' }
                            >CONTACTO</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};