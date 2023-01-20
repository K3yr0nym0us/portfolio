import ReactDOM from "react-dom/client";
// estos estilos son necesarios para la visualizacion de la ventana modal
import 'bootstrap/dist/css/bootstrap.css'
import './styles/reset.css'
import './styles/html-body.css'
import { Menu } from "./components/menu";
import { SectionOne } from "./components/section.one";
import { SectionTwo } from "./components/section.two";
import { SectionThree } from "./components/section.three";
import { SectionFourt } from "./components/section.fourt";
import { SectionFive } from "./components/section.five";
import { Footer } from "./components/footer";

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <>
        <Menu />
        <hr id="home" />
        <SectionOne />
        <hr id="habilidades" />
        <SectionTwo />
        <hr id="formacion" />
        <SectionThree />
        <hr id="proyectos" />
        <SectionFourt />
        <hr id="contacto" />
        <SectionFive />
        <Footer />
    </>
);