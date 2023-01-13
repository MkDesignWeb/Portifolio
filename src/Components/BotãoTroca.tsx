import { useState } from "react"
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from "react-router-dom"

interface props {
    side: 'left' | 'right'
    linkTo: string
}

export function BotãoTroca(props: props) {

    const [BotãoAberto, setBotãoAberto] = useState(false)
 
    return(
        <div className={`fixed ${props.side == 'right' ? 'right-0' : 'left-0'}  top-20 z-50`}>
            <div className={`bg-primary flex w-auto h-10 ${props.side == 'right' ? 'rounded-tl-xl' : 'rounded-tr-xl'} `}>

                <div className="w-10 h-full flex justify-center items-center cursor-pointer" onClick={() => {BotãoAberto == false ? setBotãoAberto(true) : setBotãoAberto(false)}}>
                    <div className={`${props.side == 'right' ? '' : 'scale-x-[-1]'}`}>
                    <IoIosArrowBack color="white" size={30} className={`${BotãoAberto == true ? 'rotate-180' : ''} transition-all`}/>
                    </div>
                </div>

                <Link to={props.linkTo} className={`bg-primary ${props.side == 'right' ? '' : 'order-first'} ${BotãoAberto == true ? 'w-20' : 'w-0'} transition-all h-full flex justify-center items-center`}>
                    <span className={`text-white font-semibold text-lg ${BotãoAberto == true ? '' : 'hidden'}`}>Trocar</span>
                </Link>
              
            </div>
        </div>
    )
}