import { ReactNode } from 'react'
import {FaUser} from 'react-icons/fa'

export function MainBotton({icon, name, link}: {icon: ReactNode, name: string, link?:string}){
    return(
        <a href={link} target="_blank" className="relative w-28 h-10 bg-blck-smoth flex justify-center gap-3 items-center rounded-md
        hover:bg-black-smoth-hover transition-all
        ">
            <div className='text-primary'>
                {icon}
            </div>
            <p className="text-xs text-white font-Roboto-Medium">{name}</p>
        </a>
    )
}