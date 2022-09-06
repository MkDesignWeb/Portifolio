import { Route, Router, Routes } from "react-router-dom";
import { Home } from "../Pages/Home"

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    )
}