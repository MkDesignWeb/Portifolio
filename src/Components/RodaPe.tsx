import LogoMKW from '../Assets/Logo/Logo MKW.svg'

export function RodaPe(){
    return(
        <footer className="w-full h-20 bg-blck-smoth flex justify-center items-center">
            <div className='flex justify-center items-center gap-4'>
                <span className='text-white'>Made by</span>
                <img src={LogoMKW} alt="" className='w-10'/>
            </div>
        </footer>
    )
}