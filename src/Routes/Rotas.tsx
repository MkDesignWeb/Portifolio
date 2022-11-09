import { Route, Router, Routes } from "react-router-dom";
import { Home } from "../Pages/Home"
import { PDev } from "../Pages/PDev";
import { PGraph } from "../Pages/PGraph";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route  path="/p-web" element={<PDev />}/>
            <Route  path="/p-graph" element={<PGraph />}/>
        </Routes>
    )
}