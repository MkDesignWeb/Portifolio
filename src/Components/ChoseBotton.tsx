interface Props {
    logo: string,
    title: string
    desc: string
}

export function ChoseBotton({ logo, desc, title }: Props) {
    return (
        <div className="
                md:flex-col md:items-center md:gap-12 pointer-events-none
                flex flex-row w-full max-w-[550px] justify-around px-3 z-20 relative ">

            <div className="
                    md:order-2 md:gap-3 
                    CaixaTexto flex flex-col text-white w-[11.8rem]">
                <h1 className="                       
                        md:text-4xl
                        text-3xl font-UniSans whitespace-nowrap">{title}</h1>
                <p className="
                        md:text-sm md:font-Roboto-Medium
                        text-xs font-Roboto-Light">{desc}</p>
            </div>


            <img src={logo} alt="" className="
                    md:w-[5.4rem]
                    w-[4.3rem] " />

        </div>
    )
}