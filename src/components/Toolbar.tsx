import { Link } from 'react-router-dom'
import { routes } from '../router'


export const Toolbar= ()=>{
    return (
    <div className='text-center border border-yellow-500 flex flex-row grid grid-cols-4 gap-4 bg-red-600 text-white'>
    <Link to={routes.home} className="text-xl border-r border-yellow-500">Home</Link>
    <Link to={routes.profesiones} className="text-xl border-r border-yellow-500">Profesiones</Link>
    <Link to={routes.pacientes} className="text-xl border-r border-yellow-500">Pacientes</Link>
    <Link to={routes.somos} className="text-xl">Quienes somos</Link>
  </div>)
}