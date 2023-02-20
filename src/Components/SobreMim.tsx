import CharMkW from '../Assets/Img/CharMkW.png'
import CharMkG from '../Assets/Img/CharMkG.png'

interface props {
    side: 'left' | 'rigth',
}

export function SobreMim(props: props) {
    return (
        <section className="text-white">

            <div className="flex flex-col md:flex-row gap-7 mb-20">
                <div className={`md:max-w-[40vw] ${props.side == 'rigth' ? 'md:order-1 text-end' : 'md:order-0'}`}>
                    <h1 className="font-Roboto-Medium text-3xl md:text-4xl">Sobre <span className="text-primary">mim</span></h1>
                    <p className="font-Roboto-Light text-sm md:text-base mb-5">Veja um pouco sobre mim</p>
                    <p className="text-sm md:text-base">
                        Desde pequeno tenho muito interesse na área da tecnologia em geral, faço muitos trabalhos de designer gráfico durante muito tempo, e estou cursando independentemente o desenvolvimento Web na área de front END. Tenho muita persistência em aprender novas áreas que tenham um grande impacto visual no cotidiano de todos dentro ou fora da web.
                    </p>
                </div>

                <div className="flex justify-center relative w-full items-center">
                    <img src={props.side == 'rigth' ? CharMkG : CharMkW} alt="" className='w-auto max-h-64 object-cover bg-no-repeat' />
                </div>
            </div>
        </section>
    )
}