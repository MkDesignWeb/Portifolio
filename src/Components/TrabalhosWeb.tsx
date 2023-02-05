import { gql, useQuery } from '@apollo/client';
import { createRef, useRef } from 'react';
import { CardWeb } from "./CardWeb";

const GET_CARDS = gql`
query {
    webWorking {
        id
        title
        description
        git
        visit
        thumb {
            url
          }
      }
    }
`

interface cardsWork {
    webWorking: {
        id: string,
        title: string,
        description: string,
        git: string,
        visit: string,
        thumb: {
            url: string,
        }
    }[]
}

export function TrabalhosWeb() {

    const { data } = useQuery<cardsWork>(GET_CARDS)


    return (
        <section id="trabalhos" className="mt-20 mb-32 relative">
            <div className='w-full flex flex-col items-center text-white mb-10'>
                <h1 className="font-Roboto-Medium text-2xl md:text-3xl text-center">Meus <span className="text-primary">Trabalhos</span></h1>
                <p className="font-Roboto-Light text-sm text-center max-w-xs">De uma olhada nós meu trabalhos mais relevantes</p>
            </div>
     
                <div className="flex flex-wrap justify-center gap-3 mx-3 ">
                    {data?.webWorking.map(webcard => {
                        return (
                            <CardWeb key={webcard.id} thumb={webcard.thumb.url} titulo={webcard.title} desc={webcard.description} git={webcard.git} link={webcard.visit} />
                        )
                    })}
                </div>

        </section>
    )
}