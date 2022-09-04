interface Props {
    conter: number
}

export function LoadBar({conter}: Props){
    return(
        <div className="w-screen h-auto flex items-start justify-start">
        <div className={`${conter > 0 ? 'w-full' : 'w-0'} h-[0.1rem] bg-primary transition-all duration-[3000ms]`} />
        </div>
        )
}