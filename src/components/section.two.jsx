import '../styles/section-two.css'
import htmlCssJsLogo from '../assets/img/html-css-js-logo.webp'
import nodeMysql from '../assets/img/nodejs-mysql.webp'
import herramientas from '../assets/img/herramientas.webp'
import { ModalSkills } from './modalSkills'
import { useState } from "react"

export const SectionTwo = () => {

    const [ state, setState ] = useState(false)
    const [ modalType, setModalType ] = useState('')

    return <section className="section__two">
        <h2>Mis habilidades</h2>
        <div className="skills__container">
            <div className="square__white" onClick={() => {
                setState(true) 
                setModalType('front')
                }}>
                <img className="img__square" src={htmlCssJsLogo} alt="HTML CSS JavasScript" />
                <p className="description">Front-End</p>
            </div>
            <div className="square__white" onClick={() => {
                setState(true) 
                setModalType('back')
                }}>
                <img className="img__square" src={nodeMysql} alt="NodeJS MySql" />
                <p className="description">Back-End</p>
            </div>
            <div className="square__white" onClick={() => {
                setState(true) 
                setModalType('herramientas')
                }}>
                <img className="img__square" src={herramientas} alt="Git Github Consola VSCode" />
                <p className="description">Herramientas</p>
            </div>
            <ModalSkills state={state} change={() => {setState(false)}} modalType={modalType}/>
        </div>
    </section>
}