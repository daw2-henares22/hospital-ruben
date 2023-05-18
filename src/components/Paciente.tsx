import { IPaciente } from "../domain/interfaces"

export interface PacienteProps{
    paciente: IPaciente
}

export const Paciente =(props: PacienteProps)=>{
    return(
        <div className="table w-full text-2xl">
          <div className="table-header-group text-yellow-600 dark:text-yellow-500 font-semibold">
            <div className="table-cell">id</div>
            <div className="table-cell">Nombre</div>
            <div className="table-cell">Apellido</div>
            <div className="table-cell">password</div>                  
          </div>
          <div className="table-row-group text-gray-700 dark:text-gray-300 font-semibold">
            <div className="table-cell">{props.paciente.id}</div>
            <div className="table-cell">{props.paciente.name}</div>
            <div className="table-cell">{props.paciente.surname}</div>
            <div className="table-cell">{props.paciente.password}</div>
          </div>
        </div>
    )
}