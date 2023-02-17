import { EspecRow } from "./EspecRow";
import reactIcon from "../Assets/SVG/React Icon.svg"
import cssIcon from "../Assets/SVG/Css Icon.svg"
import htmlIcon from "../Assets/SVG/HTML Icon.svg"
import typeScriptIcon from "../Assets/SVG/Typescript Icon.svg"
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
            dir={typeScriptIcon} textDir={"Linguagem com tipagem adequada para qualquer equipe de desenvolvimento."} />

            <EspecRow esq={htmlIcon} textEsq={"Domínio na linguagem de marcação utilizada para construção da página na web."} dir={cssIcon} textDir={"Conhecimento na área de estilização da página web com css avançado."} />     

            <EspecRow esq={tailwindIcon} textEsq={"Estilização moderna e rápida para acelerar o desenvolvimento web com o TailwindCss. Conhecimento avançado."} dir={styledComponent} textDir={"Tenha o código limpo e totalmente acessível para manutenções com a estilização organizada do Styled Components."} />
      
        </section>
    )
}