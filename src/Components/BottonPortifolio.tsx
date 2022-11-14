import { useState } from "react";
import useWindowDimensions from "./windowDimensions";

import { ChoseBotton } from "./ChoseBotton";
import { LoadBar } from "./LoadBar";

import BrilhoMobile from "../Assets/SVG/Brilho-mobile.svg"
import Brilho from "../Assets/SVG/Brilho.svg"
import { useNavigate} from "react-router-dom";

interface Props {
    logo: string,
    desc: string,
    title: string,
    position: 'Baixo' | 'Cima',
    link: string
}

export function BottonPortifolio({logo, desc, title, position, link}: Props){

    const navigate = useNavigate()

    const { width } = useWindowDimensions()
    const [conter, setConter] = useState(0)
    const [load, setload] = useState(0)
        
    
    function StarLoad(){
        setload(setInterval(() => {setConter((conter) => conter + 1)}, 150))
    }
    
    function StopLoad(){
        clearInterval(load)
        setload(0)
        setConter(0)
    }

    function GoTo(){
        navigate(`/${link}`)
    }

    if(conter > 8){
        navigate(`/${link}`)
    }

    return(
        <div onMouseDown={StarLoad} onMouseUp={width > 768 ? GoTo : StopLoad} onTouchStart={StarLoad} onTouchEnd={StopLoad} onTouchCancel={StopLoad} className={`
            md:w-1/2 md:h-screen
            w-screen h-1/2 relative group grayscale hover:grayscale-0 transition-all flex justify-center items-center md:p-0  ${position == 'Baixo' ? 'pt-14' : 'pb-14'}`}>

                <ChoseBotton desc={desc} logo={logo} title={title}/>
                
                    <div className={`
                    md:hidden
                    absolute ${position == 'Baixo' ? 'top-14' : 'bottom-14'}  z-20 self-center flex flex-col gap-2 justify-center items-center w-auto
                    `}>
                    <p className="text-white font-Roboto-Light text-xs">Segure aqui</p>
                    <div className="h-[0.1rem] w-full bg-primary" />
                    <div className="absolute bottom-0">
                    <LoadBar conter={conter}/>
                    </div>
                </div>

                

                <img src={width > 768 ? Brilho : BrilhoMobile} alt="" className={`
                md:h-screen md:max-w-screen md:w-auto
                object-cover absolute ${position == 'Baixo' ? 'bottom-0 right-0 rotate-180' : 'top-0 left-0'}  w-screen max-h-screen group-hover:opacity-100 opacity-0 transition-all pointer-events-none`} />
            </div>
    )
}