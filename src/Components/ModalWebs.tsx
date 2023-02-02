import { MainBotton } from "./MainBotton";
import {AiFillGithub} from 'react-icons/ai'
import { MdOutlineClose } from "react-icons/md";

interface Props {
    Modal: Function,
    git?: string,
    link?: string,
    title?: string,
    desc?: string,
    thumb?: string
}

export function ModalWebs(props: Props){
    return(
        <div className="w-screen h-screen fixed z-30 top-0 left-0 flex justify-center items-center ">
      
        <div className="max-w-[24rem] w-full mx-5 min-h-[16rem] h-auto bg-black-scudary relative z-20 rounded-xl
        p-7 flex flex-wrap justify-between gap-2
        ">
        
        <div className='absolute -top-10 right-3 z-30'> <MdOutlineClose size={35} color='#fff' onClick={() => props.Modal()}/> </div>

        <div>
            <img src={props.thumb} className="object-cover w-[11rem] h-24 rounded bg-white" />

            <div className="flex flex-col mt-2 gap-2">
            <strong className="text-white font-Roboto-Light">{props.title}</strong>
            <p className="text-white font-Roboto-Light text-sm max-w-[11rem]">{props.desc}</p>
            </div>

        </div>

        <div className="flex flex-col gap-3">
            {props.git ? (<MainBotton link={props.git} name="GitHub" icon={<AiFillGithub color="#ffff"/>} />) : ''}
            {props.link ? (<MainBotton link={props.link} name="Visite" icon={<AiFillGithub color="#ffff"/>}/>) : ''}
        </div>

        </div>
        <div className="w-screen h-screen bg-[#000000ef] fixed top-0 left-0 z-10 " onClick={() => props.Modal()}/>
        </div>
    )
}