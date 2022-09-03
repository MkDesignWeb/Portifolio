import useWindowDimensions from "../Components/windowDimensions"

import LogoW from "../Assets/Logo/Logo MKW.svg"
import BrilhoMobile from "../Assets/SVG/Brilho-mobile.svg"
import Brilho from "../Assets/SVG/Brilho.svg"


export default function App() {
    const { width } = useWindowDimensions()

    return (
        <section className='bg-fundo w-screen h-screen overflow-hidden flex flex-col '>

            <div className="w-screen h-1/2 relative group flex justify-center items-center">

                <div className="flex flex-row w-full max-w-[550px] gap-5 justify-around px-3 z-20 relative">

                    <div className="CaixaTexto flex flex-col text-white w-[11.8rem]">
                        <h1 className="text-3xl font-UniSans whitespace-nowrap">Front-END</h1>
                        <p className="text-xs font-Roboto-Light">De uma olhada nas minhas especificações em desenvolvimento de sites </p>
                    </div>


                    <img src={LogoW} alt="" className="w-[4.3rem] " />

                </div>

                <div className="absolute bottom-8 z-20 self-center flex flex-col gap-2 justify-center items-center w-auto">
                    <p className="text-white font-Roboto-Medium">Segure aqui</p>
                    <div className="h-[0.1rem] w-full bg-primary" />
                </div>

                <img src={width > 950 ? Brilho : BrilhoMobile} alt="" className="z-10 object-cover absolute top-0 left-0 w-screen max-h-screen group-hover:opacity-100 opacity-0 transition-all pointer-events-none" />
            </div>

            <div className="w-screen flex justify-around items-center">
                <div className="h-[0.1rem] w-full bg-[#2D2D2D] mx-5"/>
                <p className="text-white text-center font-Roboto-Medium text-lg whitespace-nowrap">choose <br /> your destiny</p>
                <div className="h-[0.1rem] w-full bg-[#2D2D2D] mx-5"/>
            </div>

            <div className="w-full h-1/2 relative group flex justify-center items-center">

                <div className="flex flex-row w-full max-w-[550px] gap-5 justify-around px-3 z-20 relative">

                    <div className="CaixaTexto flex flex-col text-white w-[11.8rem]">
                        <h1 className="text-3xl font-UniSans whitespace-nowrap">Front-END</h1>
                        <p className="text-xs font-Roboto-Light">De uma olhada nas minhas especificações em desenvolvimento de sites </p>
                    </div>


                    <img src={LogoW} alt="" className="w-[4.3rem] " />

                </div>

                <div className="absolute top-8 z-20 self-center flex flex-col gap-2 justify-center items-center w-auto">
                    <div className="h-[0.1rem] w-full bg-primary" />
                    <p className="text-white font-Roboto-Medium">Segure aqui</p>
                </div>


                <img src={width > 950 ? Brilho : BrilhoMobile} alt="" className="object-cover absolute bottom-0 left-0 w-screen max-h-screen rotate-180 group-hover:opacity-100 opacity-0 transition-all pointer-events-none" />

            </div>

        </section>
    )
}

