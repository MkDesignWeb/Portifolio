import { useState } from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BiLinkAlt} from 'react-icons/bi'
import { ModalWebs } from './ModalWebs'
import {GrFormClose} from 'react-icons/gr'
import useWindowDimensions from './windowDimensions'
import { MainBotton } from './MainBotton'

interface props {
    git: string,
    link?: string,
    desc?: string,
    thumb?: string,
    titulo: string
}

export function CardWeb(props: props) {

    const [modalOn, setModalOn] = useState(false)
    const closeModal = () => setModalOn(false)
    const { width } = useWindowDimensions()
    

    return(
        <>
        <div className="group flex flex-col w-full md:w-auto md:max-w-none max-w-[11rem] relative after:content-[''] after:absolute after:w-[calc(100%+1rem)] after:h-[calc(100%+1rem)] after:transition-all after:rounded-xl after:border-primary after:-top-2 after:-left-2 after:pointer-events-none  md:after:hover:border-2  transition-all" onClick={() => setModalOn(true)}>


        <img src={props.thumb} className="w-full h-24 md:w-72 md:h-44 object-cover border-2 border-white rounded-xl overflow-hidden bg-white" />
        
        {props.git || props.link || props.desc ?
        (<div className='hidden md:block -mt-10 relative opacity-0 md:group-hover:top-0 transition-all md:group-hover:opacity-100 md:group-hover:my-3'>
            <div className='flex gap-2'>
                {props.git ?  (<MainBotton link={props.git} name='Abra no git' icon={<AiFillGithub color='#ffff'/>}/>) : "" }
                {props.link ?  (<MainBotton link={props.link} name='visite' icon={<BiLinkAlt color='#ffff'/>}/>) : "" }
            </div>
            <div className='mt-2 hidden	md:group-hover:block'>
                <p className='text-white max-w-[11rem] text-sm'>
                {props.desc}
                </p>
            </div>
        </div>) : ""}

        <div className='flex items-center justify-between'>
            
        <strong className="text-white font-Roboto-Light">{props.titulo}</strong>
        <div className='flex'>
        {props.git ? (<AiFillGithub color='#ffff'/>) : "" }
        {props.link ? (<BiLinkAlt color='#ffff'/>) : "" }
        </div>
        </div>

        

        </div>

        {modalOn && width <= 768 ? (
            <ModalWebs thumb={props.thumb} title={props.titulo} desc={props.desc} git={props.git} link={props.link} Modal={closeModal}/>
        ) : ''}

        </>
    )
}