import { gql, useQuery } from "@apollo/client"
import { useState } from "react"
import { MdOutlineClose } from "react-icons/md"

const GET_IMG = gql`
query {
    assets {
        url
      }
    }
    
`

interface AssetsImg {
    assets: {
        url: string
      }[]
    }


export function TrabalhosDes(){

    const { data } = useQuery<AssetsImg>(GET_IMG) 
   
    const [UrlModal, setUrlMoal] = useState('')

    return(
        <section id="trabalhosDes" className="mt-20 mb-32 relative">
            <div className='w-full flex flex-col items-center text-white mb-10'>
                <h1 className="font-Roboto-Medium text-2xl md:text-3xl text-center">Meus <span className="text-primary">Trabalhos</span></h1>
                <p className="font-Roboto-Light text-sm text-center max-w-xs">Veja aqui meus trabalhos de criação e edição de imagens</p>
            </div>

          
                <div className="mx-auto max-w-6xl flex flex-wrap justify-center ">
                    {data?.assets.map((data) => {
                        return(
                        <div className="md:hover:scale-105 md:hover:z-30 relative after:z-30 after:content-[''] after:absolute after:w-[calc(100%+1rem)] after:h-[calc(100%+1rem)] after:transition-all after:rounded-xl after:border-primary after:-top-2 after:-left-2 after:pointer-events-none  md:after:hover:border-2  transition-all"
                        
                        onClick={() => {setUrlMoal(data.url)}}
                        >
                            <img src={data.url} alt="" className="bg-red-600 w-40 h-40 sm:w-52 sm:h-52 object-cover" />
                        </div>
                        )
                    })}
                </div>
                
                {UrlModal ? (
                   <div className="w-screen h-screen fixed z-40 top-0 left-0 flex justify-center items-center">
      
                   <div className="relative z-40
                   ">
                   
                   <div className='absolute -top-10 right-0 z-40'> <MdOutlineClose size={35} color='#fff' onClick={() => setUrlMoal('')}/> </div>
           
                   <img src={UrlModal} alt="" className="max-w-[95vw] max-h-[80vh] md:object-cover"/>
                   
           
                   </div>
                   <div className="w-screen h-screen bg-[#000000ef] fixed top-0 left-0 z-10 " onClick={() => setUrlMoal('')}/>
                   </div>
         
                ): ''}
                

        </section>
    )
}