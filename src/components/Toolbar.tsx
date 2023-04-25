import { Link } from 'react-router-dom'
import { routes } from '../router'


export const Toolbar= ()=>{
    return (
    <div className='border border-yellow-500 text-center grid grid-cols-4 flex bg-red-600 text-white'>
    <Link to={routes.home} className="sm:text-xl border-r border-yellow-500">Home</Link>
    <Link to={routes.profesiones} className="sm:text-xl border-r border-yellow-500">Profesiones</Link>
    <Link to={routes.pacientes} className="sm:text-xl border-r border-yellow-500">Pacientes</Link>
    <Link to={routes.somos} className="sm:text-xl">Quienes somos</Link>
  </div>)
}