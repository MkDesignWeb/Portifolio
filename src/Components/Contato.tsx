import useWindowDimensions from './windowDimensions'



import Celular from '../Assets/SVG/Celular.svg'
import Notebook from '../Assets/SVG/Notebook.svg'

import { MainBotton } from './MainBotton'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export function Contato(){

    const { width } = useWindowDimensions()

    return(
        <section className='text-white flex flex-col md:flex-row'>
            <div className='md:order-1'>
                <div className='w-full flex flex-col items-end'>
                    <h1 className="font-Roboto-Medium text-3xl text-end">Entre em <span className="text-primary">contato</span></h1>
                    <p className="font-Roboto-Light text-sm text-end">Fale comigo diretamente pelo Email ou pelas minhas redes sociai.</p>
                </div>

                <div className='flex justify-end my-5 gap-2'>
                    <div className='gap-2 flex flex-col'>
                    <MainBotton name='Email' icon={<MdEmail />}/>
                    <MainBotton name='Twitter' icon={<FaTwitter />}/>
                    </div>
                    <div className='gap-2 flex flex-col'>
                    <MainBotton name='Instagram' icon={<FaInstagram />}/>
                    <MainBotton name='Linkedin' icon={<FaLinkedin />}/>
                    </div>
                </div>
            </div>
           
            <div className='w-full flex justify-center md:w-auto md:mx-10'>
             <img src={width > 930 ? Notebook : Celular} alt="" className='w-32 h-auto  md:max-w-[500px] md:w-full'/>
            </div>
        </section>
    )
}