import { useState } from "react"
import logo from '../Assets/Logo/Logo MKG.svg'
import useWindowDimensions from "./windowDimensions"

interface props {
    esq: string,
    dir: string,
    textEsq: string,
    textDir: string
}

export function EspecRow( props: props ) {

    const [EspecSlect, setEspecSlect] = useState(Math.floor(Math.random() * 2))

    const { width } = useWindowDimensions()

    return (
        <div className="relative w-full h-40 flex">
            {width <= 930 ? (

                <div className="h-full w-full relative z-20 flex items-center px-5" onClick={() => { EspecSlect == 0 ? setEspecSlect(1) : setEspecSlect(0) }}>
                    
                    {EspecSlect == 1 ? (
                    <div className="flex w-full gap-3 justify-start items-center">
                        <img src={props.esq} alt="" className="w-16" />
                        <p className="text-white">{props.textEsq}</p>
                    </div>
                    ) :
                    (
                    <div className="flex w-full gap-4 justify-end items-center">
                        <p className="text-white text-end">{props.textDir}</p>
                        <img src={props.dir} alt="" className="w-16" />
                    </div>
                    )}
                </div>

            )
            :
            (
                <>
                    <div className="w-[50%] h-full relative z-20 flex items-center justify-center pl-52" onMouseOver={() => setEspecSlect(1)}>

                    {EspecSlect == 1 ? (
                        <div className="flex gap-4 justify-end items-center ">
                        <img src={props.esq} alt="" className="w-20" />
                        <p className="text-white">{props.textEsq}</p>
                        </div>
                    ) :
                    (
                        <div className="flex gap-4 justify-end items-center ">
                        <img src={props.esq} alt="" className="w-20 opacity-20" />
                        
                        </div>
                    )
                    }
                    
                    </div>
                    <div className="w-[50%] h-full relative z-20 flex items-center justify-center pr-52" onMouseOver={() => setEspecSlect(0)}>
                    {EspecSlect == 0 ? (
                        <div className="flex gap-4 justify-end items-center">
                        <p className="text-white text-end">{props.textDir}</p>
                        <img src={props.dir} alt="" className="w-20" />
                        </div>
                    ): 
                    (
                        <div className="flex gap-4 justify-end items-center">
                        <img src={props.dir} alt="" className="w-20 opacity-20" />
                        </div>
                    )
                    }  
                    </div>
                </>
            )}



            <div className={`absolute z-10 w-full h-full bg-gradient-to-r from-primary ${EspecSlect == 0 ? 'opacity-0' : 'opacity-100'} transition-all`}>
            </div>

            <div className={`absolute z-10 w-full h-full bg-gradient-to-r from-primary scale-x-[-1] ${EspecSlect == 1 ? 'opacity-0' : 'opacity-100'} transition-all`}></div>

        </div>
    )
}