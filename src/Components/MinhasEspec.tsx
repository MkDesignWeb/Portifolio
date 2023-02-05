import { EspecRow } from "./EspecRow";
import reactIcon from "../Assets/SVG/React Icon.svg"
import cssIcon from "../Assets/SVG/Css Icon.svg"
import htmlIcon from "../Assets/SVG/HTML Icon.svg"
import jsIcon from "../Assets/SVG/Js Icon.svg"
import tailwindIcon from "../Assets/SVG/tailwind-css-icon.svg"
import styledComponent from "../Assets/SVG/styled-components.svg"
import useWindowDimensions from "./windowDimensions";

export function MinhasEspec(){

    const { width } = useWindowDimensions() 

    return(
        <section className="mt-20">
            <div className='w-full flex flex-col items-center text-white mb-10'>
                <h1 className="font-Roboto-Medium text-2xl md:text-3xl text-center">Veja minhas <span className="text-primary">especificações</span></h1>
                <p className="font-Roboto-Light text-sm text-center max-w-xs">{width <= 768 ? 'Toque nas faixas a baixo e veja minhas especificações' : 'Passe o mouse nas faixas a baixo e veja minhas especificações'}</p>
            </div>

            <EspecRow esq={reactIcon} textEsq={"Desemvolvimento de sites com ReactJs. Perfomtico e moderno."}
            dir={jsIcon} textDir={"Desemvolvimento de sites com ReactJs. Perfomtico e moderno."} />

            <EspecRow esq={htmlIcon} textEsq={"Desemvolvimento de sites com ReactJs. Perfomtico e moderno."} dir={cssIcon} textDir={"Desemvolvimento de sites com ReactJs. Perfomtico e moderno."} />     

            <EspecRow esq={tailwindIcon} textEsq={"Desemvolvimento de sites com ReactJs. Perfomtico e moderno."} dir={styledComponent} textDir={"Desemvolvimento de sites com ReactJs. Perfomtico e moderno."} />
      
        </section>
    )
}