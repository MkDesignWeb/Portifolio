import CharMkW from '../Assets/Img/CharMkW.png'
import CharMkG from '../Assets/Img/CharMkG.png'

interface props {
    side: 'left' | 'rigth',
    text: string
}

export function SobreMim(props: props) {
    return (
        <section className="text-white">

            <div className="flex flex-col md:flex-row gap-7 mb-20">
                <div className={`md:max-w-[40vw] ${props.side == 'rigth' ? 'md:order-1 text-end' : 'md:order-0'}`}>
                    <h1 className="font-Roboto-Medium text-3xl">Sobre <span className="text-primary">mim</span></h1>
                    <p className="font-Roboto-Light text-sm mb-5">Veja um pouco sobre mim</p>
                    <p className="text-sm">
                        {props.text}
                    </p>
                </div>

                <div className="flex justify-center relative w-full items-center">                    
                        <img src={props.side == 'rigth' ? CharMkG : CharMkW} alt="" className='w-auto max-h-64 object-cover bg-no-repeat' />
                </div>
            </div>
        </section>
    )
}