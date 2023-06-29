import { Route, Routes } from "react-router-dom"
import { Home } from "../views/Home"
import { Profesiones } from "../views/Profesiones"
import { Pacientes } from "../views/Pacientes"
import { Somos } from "../views/Somos"
import { BuscTrabajos } from "../views/BuscTrabajos"
import { Error404 } from "../views/Error404"
import { redirect } from "react-router-dom"
import { Carousel } from "../views/Carousel"
import { PersonasApi } from "../views/personasApi"
import * as path from 'path';
 redirect("https://hospitalruben.netlify.app/");
 new Response("", {
     status: 302,
     headers: {
       Location: 'https://hospitalruben.netlify.app/',
     },
   });
   new Response("", {
     status: 404,
     headers: {
       Location: 'https://hospitalruben.netlify.app/',
     },
   });
export const mainRoute = '/';
export const routes ={
    home: '/home',
    profesiones: '/profesiones',
    pacientes: '/pacientes',
    somos: '/somos',
    busctrabajos: '/busctrabajos',
    error404: '/error404',
    carousel: '/carousel',
    personasApi: '/personasApi',
} 



export const AppRouter = ()=>{
    return(
        <Routes>
            <Route path={mainRoute} element={<Home />}/>
            <Route path={routes.home} element={<Home />}/>
            <Route path={routes.profesiones} element={<Profesiones />}/>
            <Route path={routes.pacientes} element={<Pacientes />}/>
            <Route path={routes.somos} element={<Somos />}/>
            <Route path={routes.busctrabajos} element={<BuscTrabajos />}/>
            <Route path="*" element={<Error404 />}/>
            <Route path={routes.carousel} element={<Carousel />}/>
            <Route path={routes.personasApi} element={<PersonasApi />}/>
        </Routes>
    )
}