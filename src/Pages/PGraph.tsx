import useWindowDimensions from '../Components/windowDimensions';
import Curve from '../Assets/SVG/Curve.svg'
import CurvePc from '../Assets/SVG/Curve-pc.svg'
import brilhoMobile from '../Assets/SVG/BrilhoMobile.svg'
import LogoMKG from '../Assets/Logo/Logo MKG.svg'

import { Header } from "../Components/Header";
import { MainBotton } from '../Components/MainBotton';
import { RodaPe } from '../Components/RodaPe';
import { BotãoTroca } from '../Components/BotãoTroca';
import { SobreMim } from '../Components/SobreMim';
import { Contato } from '../Components/Contato';
import { TrabalhosDes } from '../Components/TrabalhosDes';

import { HiChevronDoubleDown } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa';
import { SiBehance } from 'react-icons/si'
import { MdContentPaste } from 'react-icons/md'

import { Link } from 'react-scroll';


export function PGraph() {


    const { width } = useWindowDimensions()



    return (
        <section className='max-w-screen overflow-x-hidden bg-fundo'>
            <BotãoTroca linkTo='/p-web' nameSide='Designer Gráfico' side='left' />

            <img src={brilhoMobile} alt="" className='absolute top-0 right-0 z-10 w-full -scale-x-100' />
            <div className="w-full h-auto flex justify-center items-center z-20 relative">
                <Header desc="Freelancer em Designer Gráfico" logoDir={LogoMKG} />
            </div>

            <div className="h-auto w-full relative z-20 mt-20">

                <nav className='absolute w-full flex flex-wrap justify-center gap-2 z-30 -top-3'>
                    <Link to='contatos' smooth={true} offset={-150} className="cursor-pointer" >
                        <MainBotton name='Contato' icon={<FaUser />} />
                    </Link>
                    <MainBotton link='https://www.behance.net/matheuskauan' name='Behance' icon={<SiBehance />} />
                    <Link to='trabalhosDes' smooth={true} className="cursor-pointer" >
                        <MainBotton name='Trabalhos' icon={<MdContentPaste />} />
                    </Link>
                </nav>

                <img src={width > 786 ? CurvePc : Curve} alt="" className="h-32 w-full object-cover object-top top-5 lef-0 z-10" />

                <div className='bg-black-scudary relative  w-full h-auto'>
                    <div className='relative z-20 px-7 md:px-20 xl:px-40 max-w-[1728px]'>

                        <SobreMim side='rigth' />

                        <div className='flex w-full justify-center font-Roboto-Medium  md:mb-5 md:-top-20 -top-10 relative'>
                            <span className='text-x text-[#2e2e2e]'>Veja mais</span>
                            <HiChevronDoubleDown size={23} color='#2e2e2e' />
                        </div>

                        <Contato subTexto='Você pode sempre entrar em contato com seu designer pelos principais meios de comunicação e pedir já seu orçamento' side='rigth' />

                    </div>
                </div>

                <TrabalhosDes />

                <RodaPe />

            </div>
        </section>
    )
}

