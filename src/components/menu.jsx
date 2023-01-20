import { useEffect } from 'react';
import '../styles/menu-fixed.css'

export const Menu = () => {

    useEffect(() => {
        document.title = 'Portfolio';
        window.addEventListener('scroll', () => {
            const menus = document.querySelectorAll('li');
            const hrs = document.querySelectorAll('hr');

            hrs.forEach( (hr) => {
                const position = hr.getBoundingClientRect().top;
                if (position <= 150 && position >= -50) {
                    const id = hr.id;
                    
                    menus.forEach( (menu) => {
                        const capturaMenu = menu.childNodes[0];
                        const containMenu = capturaMenu.innerHTML.toLowerCase();

                        capturaMenu.removeAttribute('id');
                        if (id === containMenu) {
                            menu.childNodes[0].setAttribute("id", "active");
                        };
                    });
                };
            });
        });
        
    }, []);

    return <header>
        <div className="menu-fixed">
            <nav>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#habilidades">HABILIDADES</a></li>
                    <li><a href="#formacion">FORMACION</a></li>
                    <li><a href="#proyectos">PROYECTOS</a></li>
                    <li><a href="#contacto">CONTACTO</a></li>
                </ul>
            </nav>
        </div>
    </header>
};