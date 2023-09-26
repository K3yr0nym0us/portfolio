import { useState } from "react";
import { Menu, SectionOne, SectionTwo, SectionThree, SectionFourt, SectionFive } from "./";

export const App = () => {

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