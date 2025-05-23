import { useEffect, useState } from "react";

import {
    Menu,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFourt,
    SectionFive
} from './modules';

export type ClassMenu = 'one' | 'two' | 'three' | 'fourt' | 'five';

export const App = () => {
    const [claseMenu, setClaseMenu] = useState<ClassMenu>('one');

    useEffect(() => {
        document.title = 'Portafolio - Kevin Martinez';
    });

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