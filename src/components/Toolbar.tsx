import { Link } from 'react-router-dom'
import { routes } from '../router'


export const Toolbar= ()=>{
    return (
    <div className='border-t border-b border-yellow-500 text-center grid grid-cols-4 bg-white font-bold sm:text-xl text-blue-900'>
    <Link to={routes.home} className="border-l border-yellow-500 hover:bg-yellow-400">Home</Link>
    <Link to={routes.profesiones} className="border-l border-yellow-500 hover:bg-yellow-400">Profesiones</Link>
    <Link to={routes.pacientes} className="border-l border-yellow-500 hover:bg-yellow-400">Pacientes</Link>
    <Link to={routes.somos} className="border-l border-r border-yellow-500 hover:bg-yellow-400">Quienes somos</Link>
  </div>)
}