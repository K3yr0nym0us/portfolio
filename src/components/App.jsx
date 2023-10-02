import { useEffect, useState } from "react";
import { Menu } from "./modules/Menu";
import { SectionOne } from "./modules/SectionOne";
import { SectionTwo } from "./modules/SectionTwo";
import { SectionThree } from "./modules/SectionThree";
import { SectionFourt } from "./modules/SectionFourt";
import { SectionFive } from "./modules/SectionFive";

export const App = () => {

    useEffect(() => {
        document.title = 'Portafolio - Kevin Martinez';
    });

    const [ claseMenu, setClaseMenu ] = useState('one');

    return (
        <>
            <Menu claseMenu={ claseMenu } />
            <SectionOne setClaseMenu={ setClaseMenu } />
            <SectionTwo setClaseMenu={ setClaseMenu } />
            <SectionThree setClaseMenu={ setClaseMenu } />
            <SectionFourt setClaseMenu={ setClaseMenu } />
            <SectionFive setClaseMenu={ setClaseMenu } />
        </>
    )
}