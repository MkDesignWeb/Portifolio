import LogoW from "../Assets/Logo/Logo MKW.svg"
import LogoG from "../Assets/Logo/Logo MKG.svg"

import { BottonPortifolio } from "../Components/BottonPortifolio"


export default function App() {


    return (
        <section className='
        md:flex-row
        bg-fundo w-screen h-screen overflow-hidden flex flex-col relative'>

            <BottonPortifolio position="Cima" desc="De uma olhada nas minhas especificações em desemvolvimento de sites." title="FRONT-END" logo={LogoW}/>

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

            <BottonPortifolio position="Baixo" desc="De uma olhada nas minhas especificações em desemvolvimento de sites." title="D. GRÁFICO" logo={LogoG}/>

        </section>
    )
}

