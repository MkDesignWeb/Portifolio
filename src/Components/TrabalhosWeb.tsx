import { CardWeb } from "./CardWeb";

export function TrabalhosWeb(){
    return(
        <section id="trabalhos" className="mt-20 mb-32 relative">
            <div className='w-full flex flex-col items-center text-white mb-10'>
                <h1 className="font-Roboto-Medium text-2xl md:text-3xl text-center">Meus <span className="text-primary">Trabalhos</span></h1>
                <p className="font-Roboto-Light text-sm text-center max-w-xs">De uma olhada nós meu trabalhos mais relevantes</p>
            </div>

            <div className="flex justify-center gap-3 mx-3">

            <CardWeb titulo="GMPlanejados" desc="Site expositorio da marcenario GMPlanejados" git="https://github.com/MkDesignWeb/GMPlanejados" link="https://gmplanejados.vercel.app/"/>

            <CardWeb titulo="Portifolio" desc="Portifolio duplo feito por mim" git="asdasdw" link="ad"/>
            
            </div>
            
        </section>
    )
}