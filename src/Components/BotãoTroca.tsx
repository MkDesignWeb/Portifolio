import { useEffect, useState } from "react"
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom";

interface props {
    side: 'left' | 'right'
    linkTo: string,
    nameSide: string
}

export function BotãoTroca(props: props) {

    const [BotãoAberto, setBotãoAberto] = useState(false)
    const [notification, setNotification] = useState(false)
    const location = useLocation()
    
    useEffect(()=>{
        setNotification(true)
        setTimeout(() => {
            setNotification(false)
        }, 3000);

    },[location])

    return (
        <>
            <div className={`fixed ${props.side == 'right' ? 'right-0' : 'left-0'}  top-20 z-50`}>
                <div className={`bg-primary flex w-auto h-10 ${props.side == 'right' ? 'rounded-tl-xl' : 'rounded-tr-xl'} `}>

                    <div className="w-10 h-full flex justify-center items-center cursor-pointer" onClick={() => { BotãoAberto == false ? setBotãoAberto(true) : setBotãoAberto(false) }}>
                        <div className={`${props.side == 'right' ? '' : 'scale-x-[-1]'}`}>
                            <IoIosArrowBack color="white" size={30} className={`${BotãoAberto == true ? 'rotate-180' : ''} transition-all`} />
                        </div>
                    </div>

                    <Link to={props.linkTo} className={`bg-primary cursor-pointer ${props.side == 'right' ? '' : 'order-first'} ${BotãoAberto == true ? 'w-20' : 'w-0'} transition-all h-full flex justify-center items-center`}>
                        <span className={`text-white font-semibold text-lg ${BotãoAberto == true ? '' : 'hidden'}`}>Trocar</span>
                    </Link>


                </div>
            </div>
            <div className={`z-50 ${notification == true ?'top-5 opacity-100' : 'opacity-0 -top-5'} transition-all  fixed  left-0 right-0 md:left-auto md:right-5 md:px-5 mx-auto max-w-[90%] py-3 md:w-auto w-screen bg-black-smoth`}>
                <div className="text-white font-Roboto-Light text-center">
                    <p>Você está no lado <span className="font-UniSans text-primary">{props.nameSide}</span></p>
                </div>
            </div>
        </>
    )
}