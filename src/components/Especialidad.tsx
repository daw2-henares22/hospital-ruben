import { IEspecialidad } from "../domain/interfaces"

export interface EspecialidadProps{
    especialidad: IEspecialidad
}

export const Especialidad = (props: EspecialidadProps)=>{
    return(    
      <div className="p-4">
        <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
          <h2 className="text-sm tracking-widest mb-1 font-medium">{props.especialidad.apartado}</h2>
          <h1 className="sm:text-2xl md:text-2xl lg:text-5xl text-gray-700 font-semibold pb-4 mb-4 border-b border-gray-200 leading-none">{props.especialidad.titulo}</h1>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
            {props.especialidad.operaciones}
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
            {props.especialidad.consultas}
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
            {props.especialidad.terapias}
          </p>
          <button className="flex items-center mt-auto text-white bg-yellow-500 border-0 py-2 px-4 w-full hover:bg-yellow-700 rounded">{props.especialidad.informacion}
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p className="text-xs text-blue-900 mt-3">{props.especialidad.derechos}</p>
        </div>
      </div>
    )
}