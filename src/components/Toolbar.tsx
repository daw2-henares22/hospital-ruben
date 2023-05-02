import { Link } from 'react-router-dom'
import { routes } from '../router'


export const Toolbar= ()=>{
  return (
    <div className='bg-white sm:text-3 text-end'>
      <div className='row-4 w-30'>
        <Link to={routes.home} className="hover:bg-gray-300">Home</Link>
        <Link to={routes.profesiones} className="hover:bg-gray-300">Profesiones</Link>
        <Link to={routes.pacientes} className="hover:bg-gray-300">Pacientes</Link>
        <Link to={routes.somos} className="hover:bg-gray-300">Quienes somos</Link>
      </div>
      
    </div>



    // <div className='border-t border-b border-yellow-500 text-center grid grid-cols-4 bg-white font-bold sm:text-xl text-blue-900'>
    //   <Link to={routes.home} className="border-l border-yellow-500 hover:bg-gray-200">Home</Link>
    //   <Link to={routes.profesiones} className="border-l border-yellow-500 hover:bg-gray-200">Profesiones</Link>
    //   <Link to={routes.pacientes} className="border-l border-yellow-500 hover:bg-gray-200">Pacientes</Link>
    //   <Link to={routes.somos} className="border-l border-r border-yellow-500 hover:bg-gray-200">Quienes somos</Link>
    // </div>
  )
}