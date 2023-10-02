import { useEffect, useState } from "react";
import { Menu } from "./Menu";
import { SectionOne } from "./SectionOne";
import { SectionTwo } from "./SectionTwo";
import { SectionThree } from "./SectionThree";
import { SectionFourt } from "./SectionFourt";
import { SectionFive } from "./SectionFive";

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