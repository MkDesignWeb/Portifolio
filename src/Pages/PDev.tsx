import useWindowDimensions from '../Components/windowDimensions';
import Curve from '../Assets/SVG/Curve.svg'
import CurvePc from '../Assets/SVG/Curve-pc.svg'
import brilhoMobile from '../Assets/SVG/BrilhoMobile.svg'
import LogoMKW from '../Assets/Logo/Logo MKW.svg'

import { Header } from "../Components/Header";
import { MainBotton } from '../Components/MainBotton';

import { FaUser } from 'react-icons/fa';
import { SobreMim } from '../Components/SobreMim';

export function PDev(){

    const {width} = useWindowDimensions()

    return(
        <section className='max-w-screen overflow-x-hidden bg-fundo'>
            <img src={brilhoMobile} alt="" className='absolute top-0 right-0 z-10 w-full' />
            <div className="Header w-full flex justify-center items-center z-20 relative">
            <Header desc="Desenvolvedor Front-END focado em React JS" logo={LogoMKW}/>
            </div>

            <div className="Sobre-mim mt-16 h-[7000px] w-full relative z-20">
            <nav className='nav-botton w-full flex flex-wrap justify-center gap-2 z-30 relative'>
                <MainBotton name='Sobre mim' icon={<FaUser />}/>
                <MainBotton name='Sobre mim' icon={<FaUser />}/>
                <MainBotton name='Sobre mim' icon={<FaUser />}/>
            </nav>
                <img src={width > 786 ? CurvePc : Curve} alt="" className="h-32 w-full object-cover object-top absolute top-5 lef-0 z-10"/>
                <div className='bg-black-scudary relative top-14 w-full h-[300px]'>
                    <div className='relative z-20 px-7'>
                        <SobreMim />
                    </div>
                </div>
            </div>
        </section>
    )
}