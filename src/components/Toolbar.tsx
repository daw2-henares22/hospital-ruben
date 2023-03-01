import { Link } from 'react-router-dom'
import { routes } from '../router'


export const Toolbar= ()=>{
    return (
    <div className='flex flex-row gap-4 bg-red-600 text-white'>
    <Link to={routes.home}>Home</Link>
    <Link to={routes.profesiones}>Profesiones</Link>
    <Link to={routes.trabajo}>Trabajo</Link>
    <Link to={routes.clientes}>Clientes</Link>
    <Link to={routes.somos}>Quienes somos</Link>
  </div>)
}