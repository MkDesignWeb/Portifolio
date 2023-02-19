import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { BiUpArrowAlt } from 'react-icons/bi'

export function BotaoSubir() {
    const [scrollN, setScrollN] = useState(0)
    useEffect( () => {
        const onScroll = () => setScrollN(window.pageYOffset)
        window.removeEventListener("scroll", onScroll)
        window.addEventListener("scroll", onScroll, {passive: true})
        return () => window.removeEventListener("scroll", onScroll)
      },[])

    function scrollToTop() {
        scroll.scrollToTop();
    }
    return (
        <div onClick={scrollToTop} className={`fixed ${scrollN >= 30 ? 'bottom-4' : '-bottom-10'} transition-all right-4 bg-black-smoth border-primary border-2 cursor-pointer rounded-full z-50`}>
           <BiUpArrowAlt size={35} className="text-primary"/>
        </div>
    )
}