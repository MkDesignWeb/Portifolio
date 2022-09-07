import Curve from '../Assets/SVG/Curve.svg'
import brilhoMobile from '../Assets/SVG/BrilhoMobile.svg'
import LogoMKW from '../Assets/Logo/Logo MKW.svg'
import { Header } from "../Components/Header";

export function PDev(){
    return(
        <section className='w-screen overflow-x-hidden bg-fundo'>
            <img src={brilhoMobile} alt="" className='absolute top-0 right-0 z-10 w-full' />
            <div className="w-full flex justify-center items-center z-20 relative">
            <Header desc="Desenvolvedor Front-END focado em React JS" logo={LogoMKW}/>
            </div>

            <div className="mt-16 w-full relative z-20">
                <img src={Curve} alt="" className="w-full"/>
            </div>
        </section>
    )
}