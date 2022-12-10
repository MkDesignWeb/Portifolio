import useWindowDimensions from '../Components/windowDimensions';
import Curve from '../Assets/SVG/Curve.svg'
import CurvePc from '../Assets/SVG/Curve-pc.svg'
import brilhoMobile from '../Assets/SVG/BrilhoMobile.svg'
import LogoMKW from '../Assets/Logo/Logo MKW.svg'

import { Header } from "../Components/Header";
import { MainBotton } from '../Components/MainBotton';

import { HiChevronDoubleDown } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa';
import { SobreMim } from '../Components/SobreMim';
import { Contato } from '../Components/Contato';
import { MinhasEspec } from '../Components/MinhasEspec';
import { TrabalhosWeb } from '../Components/TrabalhosWeb';

export function PDev() {

    const { width } = useWindowDimensions()

    return (
        <section className='max-w-screen overflow-x-hidden bg-fundo'>
            <img src={brilhoMobile} alt="" className='absolute top-0 right-0 z-10 w-full' />
            <div className="w-full h-auto flex justify-center items-center z-20 relative">
                <Header desc="Desenvolvedor Front-END focado em React JS" logo={LogoMKW} />
            </div>

            <div className="h-auto w-full relative z-20 mt-20">

                <nav className='absolute w-full flex flex-wrap justify-center gap-2 z-30 -top-3'>
                    <MainBotton name='Contato' icon={<FaUser />} />
                    <MainBotton name='GitHub' icon={<FaUser />} />
                    <MainBotton name='Trabalhos' icon={<FaUser />} />
                </nav>

                <img src={width > 786 ? CurvePc : Curve} alt="" className="h-32 w-full object-cover object-top top-5 lef-0 z-10" />

                <div className='bg-black-scudary relative  w-full h-auto'>
                    <div className='relative z-20 px-7 md:px-20 xl:px-40 max-w-[1728px]'>

                        <SobreMim side='left'/>

                        <div className='flex w-full justify-center font-Roboto-Medium  md:mb-5 md:-top-20 -top-10 relative'>
                            <span className='text-x text-[#2e2e2e]'>Veja mais</span>
                            <HiChevronDoubleDown size={23} color='#2e2e2e'/>
                        </div>
                        
                        <Contato side='left' />

                    </div>
                </div>

                    <MinhasEspec />

                    <TrabalhosWeb />

            </div>
        </section>
    )
}