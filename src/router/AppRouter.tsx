import { Route, Routes } from "react-router-dom"
import { Home } from "../views/Home"
import { Profesiones } from "../views/Profesiones"
import { Trabajo } from "../views/Trabajo"
import { Clientes } from "../views/Clientes"
import { Somos } from "../views/Somos"
import { BuscTrabajos } from "../views/BuscTrabajos"

export const mainRoute = '/';
export const routes ={
    home: '/home',
    profesiones: '/profesiones',
    trabajo: '/trabajo',
    clientes: '/clientes',
    somos: '/somos',
    busctrabajos: '/busctrabajos',
} 



export const AppRouter = ()=>{
    return(
        <Routes>
            <Route path={mainRoute} element={<Home />}/>
            <Route path={routes.home} element={<Home />}/>
            <Route path={routes.profesiones} element={<Profesiones />}/>
            <Route path={routes.trabajo} element={<Trabajo />}/>
            <Route path={routes.clientes} element={<Clientes />}/>
            <Route path={routes.somos} element={<Somos />}/>
            <Route path={routes.busctrabajos} element={<BuscTrabajos />}/>
        </Routes>
        
    )
}