export function Header({logo, desc}: {logo: string, desc: string}){
    return(
        <header className="flex flex-col justify-center items-center gap-10 mt-10" >
            <img src={logo} alt="Logo MKDesigner" className="w-16"/>
            <div className="flex flex-col items-center justify-center text-white">
                <span className="font-Roboto-Light text-xl">Olá, me chamo</span>
                <h1 className="font-Roboto-Medium text-4xl text-center">Matheus <span className="text-primary">Kauan</span></h1>
                <p className="text-sm font-Roboto-Light text-center">{desc}</p>
            </div>
        </header>
    )
}