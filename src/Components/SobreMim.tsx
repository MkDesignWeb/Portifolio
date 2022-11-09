import { PresentationControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { CharMKG } from "../Assets/Models/CharMKG"

import { CharMKW } from "../Assets/Models/CharMKW"

interface props {
    side: 'left' | 'rigth' 
}

export function SobreMim(props: props) {
    return (
        <section className="text-white">

            <div className="flex flex-col md:flex-row  gap-10">
                <div className={`md:max-w-[40vw] ${props.side == 'rigth' ? 'md:order-1 text-end' : 'md:order-0'}`}>
                    <h1 className="font-Roboto-Medium text-3xl">Sobre <span className="text-primary">mim</span></h1>
                    <p className="font-Roboto-Light text-sm mb-5">Veja um pouco sobre mim</p>
                    <p className="text-sm">
                        Trabalho com Designer gráfico e desenvolvimento de sites para web com foco na biblioteca ReactJs para criar sites performáticos e com a mais nova tecnologia do mercado. Tenho muita persistência em aprender novas áreas que tenham um grande impacto visual no cotidiano de todos dentro ou fora da web.
                    </p>
                </div>

                <div className="w-screen flex justify-center h-80 relative">
                    <div className="absolute w-full md:h-96 h-72 md:-top-32 ">
                        <Canvas
                            className="touch-none"
                            shadows
                            flat
                            linear
                        >
                            <ambientLight intensity={0.7} />
                            <pointLight position={[10,10,10]} intensity={0.9}/>

                            <PresentationControls
                                global
                                config={{ mass: 2, tension: 500 }}
                                snap={{ mass: 4, tension: 1500 }}
                                polar={[-Math.PI / 3, Math.PI / 3]}
                                azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
                                {props.side == 'rigth' ? (
                                    <CharMKG scale={1.7} rotation={[0.1, 0.8, 0]} position={[-0.5, -2, 0]} />
                                ) :
                                (
                                    <CharMKW scale={1.7} rotation={[0.2, -0.8, 0]} position={[-0.3, -1, 0]} />
                                )
                                }
                            </PresentationControls>

                        </Canvas>
                    </div>
                </div>
            </div>
        </section>
    )
}