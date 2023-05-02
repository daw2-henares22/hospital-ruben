import { Link } from 'react-router-dom'
import { routes } from '../router'


export const Toolbar= ()=>{
  return (
    <div className='text-end sm:text-xl text-blue-900 font-semibold'>
      <div className=''>
        <Link to={routes.home} className="mr-3"> <button className='hover:scale-x-105 hover:scale-y-105 transition duration-150'>Home</button></Link>
        <Link to={routes.profesiones} className="mr-3"><button className='hover:scale-x-105 hover:scale-y-105 transition duration-150'>Profesiones</button></Link>
        <Link to={routes.pacientes} className="mr-3"> <button className='hover:scale-x-105 hover:scale-y-105 transition duration-150'>Pacientes</button></Link>
        <Link to={routes.somos} className="mr-3"><button className='hover:scale-x-105 hover:scale-y-105 transition duration-150'>Quienes somos</button></Link>
      </div>
      <div className=" dark:bg-slate-800 rounded-lg px-6 py-8">
        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
        </span>
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