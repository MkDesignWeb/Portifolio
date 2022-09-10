import { PresentationControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { CharMKW } from "../Assets/Models/CharMKW"

export function SobreMim() {
    return (
        <div className="text-white">
            <h1 className="font-Roboto-Medium text-3xl">Sobre <span className="text-primary">mim</span></h1>
            <p className="font-Roboto-Light text-sm">Veja um pouco sobre mim</p>

            <div className="flex flex-col md:flex-row  gap-10">
                <div className="mt-8 md:max-w-[40vw]">
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
                            <pointLight position={[10,10,10]} intensity={2.4}/>

                            <PresentationControls
                                global
                                config={{ mass: 2, tension: 500 }}
                                snap={{ mass: 4, tension: 1500 }}
                                polar={[-Math.PI / 3, Math.PI / 3]}
                                azimuth={[-Math.PI / 1.4, Math.PI / 2]}>

                                <CharMKW scale={1.7} rotation={[0.2, -0.8, 0]} position={[-0.3, -1, 0]} />
                            </PresentationControls>

                        </Canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}