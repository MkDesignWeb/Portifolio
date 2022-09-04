import useWindowDimensions from "../Components/windowDimensions"

import LogoW from "../Assets/Logo/Logo MKW.svg"
import LogoG from "../Assets/Logo/Logo MKG.svg"
import BrilhoMobile from "../Assets/SVG/Brilho-mobile.svg"
import Brilho from "../Assets/SVG/Brilho.svg"
import { ChoseBotton } from "../Components/ChoseBotton"
import { useEffect, useState } from "react"


export default function App() {
    const { width } = useWindowDimensions()

    const [conter, setConter] = useState(0)
    const [load, setload] = useState(0)
    
    function StarLoad(){
        setload(setInterval(() => {setConter((conter) => conter + 1)}, 300))
    }
    
    function StopLoad(){
        clearInterval(load)
        setload(0)
        setConter(0)
    }
    

    return (
        <section className='
        md:flex-row
        bg-fundo w-screen h-screen overflow-hidden flex flex-col relative'>

            <div onMouseDown={StarLoad} onMouseUp={StopLoad} className="
            md:w-1/2 md:h-screen
            w-screen h-1/2 relative group flex justify-center items-center pb-14">

                <ChoseBotton logo={LogoW} title="FONT-END"/>

                <div className="
                md:hidden
                absolute bottom-14 z-20 self-center flex flex-col gap-2 justify-center items-center w-auto
                ">
                    <p className="text-white font-Roboto-Light text-xs">Segure aqui</p>
                    <div className="h-[0.1rem] w-full bg-primary" />
                </div>


                <img src={width > 768 ? Brilho : BrilhoMobile} alt="" className="
                md:h-screen md:max-w-screen md:w-auto
                object-cover absolute top-0 left-0 w-screen max-h-screen group-hover:opacity-100 opacity-0 transition-all pointer-events-none" />
            </div>



            <div className="
            md:flex-col
            h-screen w-screen flex justify-around items-center absolute z-20 self-center place-content-center pointer-events-none">
                <div className="
                md:w-[0.1rem] md:h-full md:mx-0 md:my-10
                h-[0.1rem] w-full bg-[#2D2D2D] mx-5"/>

                <p className="text-white text-center font-Roboto-Medium text-lg whitespace-nowrap">choose <br /> your destiny</p>

                <div className="
                md:w-[0.1rem] md:h-full md:mx-0 md:my-10
                h-[0.1rem] w-full bg-[#2D2D2D] mx-5"/>
            </div>



            <div className="
            md:w-1/2 md:h-screen
            w-screen h-1/2 relative group flex justify-center items-center pt-14">

                <div className="
                md:hidden
                absolute top-14 z-20 self-center flex flex-col gap-2 justify-center items-center w-auto
                ">
                    <div className="h-[0.1rem] w-full bg-primary" />
                    <p className="text-white font-Roboto-Light text-xs">Segure aqui</p>
                </div>

                <ChoseBotton logo={LogoG} title="D. GRÁFICO"/>

                <img src={width > 768 ? Brilho : BrilhoMobile} alt="" className="
                md:h-screen md:max-w-screen md:w-auto
                object-cover absolute bottom-0 right-0 w-screen max-h-screen rotate-180 group-hover:opacity-100 opacity-0 transition-all pointer-events-none" />

            </div>

        </section>
    )
}

