import { Route, Router, Routes } from "react-router-dom";
import { Home } from "../Pages/Home"
import { PDev } from "../Pages/PDev";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route  path="/p-web" element={<PDev />}/>
        </Routes>
    )
}