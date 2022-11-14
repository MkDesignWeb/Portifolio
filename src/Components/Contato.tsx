import useWindowDimensions from './windowDimensions'



import Celular from '../Assets/SVG/Celular.svg'
import Notebook from '../Assets/SVG/Notebook.svg'


import { MainBotton } from './MainBotton'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

interface props {
    side: 'left' | 'rigth' 
}

export function Contato(props: props){

    const { width } = useWindowDimensions()

    return(
        <>
        <section className='text-white flex flex-col md:flex-row relative'>
            <div className={` ${props.side == 'rigth' ? 'md:order-0 text-start' : 'md:order-1 text-end'}`}>
                <div className={`w-full flex flex-col ${props.side == 'rigth' ? 'items-start' : 'items-end'}`}>
                    <h1 className="font-Roboto-Medium text-3xl ">Entre em <span className="text-primary">contato</span></h1>
                    <p className="font-Roboto-Light text-sm ">Fale comigo diretamente pelo Email ou pelas minhas redes sociais.</p>
                </div>

                <div className={`flex ${props.side == 'rigth' ? 'justify-start' : 'justify-end'} my-7 gap-2`}>
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
           
            <div className='w-full flex justify-center md:w-auto md:mx-10 mt-5 md:mt-0 z-20 relative'>
             <img src={width >= 930 ? Notebook : Celular} alt="" className='w-32 h-auto  md:max-w-[500px] md:w-full'/>
            </div>



        </section>

        <div className='text-white font-Roboto-Light max-w-md text-center mx-auto py-10 md:py-20 opacity-60'>
            <p>Você pode sempre entrar em contato com seu designer pelos principais meios de comunicação e pedir já seu orçamento</p>
        </div>
        </>
    )
}