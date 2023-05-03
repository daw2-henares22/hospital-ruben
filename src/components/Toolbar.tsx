import { Link } from 'react-router-dom'
import { routes } from '../router'
import { ImContrast } from "react-icons/im";

export const Toolbar= ()=>{
  return (
    <div className='flex justify-end'>
      <div className="dark:bg-slate-800 rounded-lg px-6 py-6 ">
          <button className=" h-7 w-7 bg-gray-700 rounded-md shadow-lg" aria-hidden="true">
            <ImContrast className='w-full text-white'/>
          </button>
      </div>
      <div className='pt-4 sm:text-xl text-blue-900 font-semibold'>
        <Link to={routes.home} className="mr-3"> <button className='hover:text-indigo-500 hover:scale-x-105 hover:scale-y-105 transition duration-150 underline underline-offset-4 shadow-xl hover:shadow-lg'>Home</button></Link>
        <Link to={routes.profesiones} className="mr-3"><button className='hover:text-indigo-500 hover:scale-x-105 hover:scale-y-105 transition duration-150 shadow-xl hover:shadow-lg'>Profesiones</button></Link>
        <Link to={routes.pacientes} className="mr-3"> <button className='hover:text-indigo-500 hover:scale-x-105 hover:scale-y-105 transition duration-150 shadow-xl hover:shadow-lg'>Pacientes</button></Link>
        <Link to={routes.somos} className="mr-3"><button className='hover:text-indigo-500 hover:scale-x-105 hover:scale-y-105 transition duration-150 shadow-xl hover:shadow-lg'>Quienes somos</button></Link>
      </div>
    </div>

    // <div className='border-t border-b border-yellow-500 text-center grid grid-cols-4 bg-white font-bold sm:text-xl text-blue-900'>
    //   <Link to={routes.home} className="border-l border-yellow-500 hover:bg-gray-200">Home</Link>
    //   <Link to={routes.profesiones} className="border-l border-yellow-500 hover:bg-gray-200">Profesiones</Link>
    //   <Link to={routes.pacientes} className="border-l border-yellow-500 hover:bg-gray-200">Pacientes</Link>
    //   <Link to={routes.somos} className="border-l border-r border-yellow-500 hover:bg-gray-200">Quienes somos</Link>
    // </div>



    // <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
    //   <div>
    //     <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
    //       <button className="h-6 w-6 text-white" aria-hidden="true"></button>
    //     </span>
    //   </div>
    //   <div className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</div>
    //   <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    //     The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
    //   </p>
    // </div>
  )
}