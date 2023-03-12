import { IPaciente } from "../domain/interfaces"

export interface PacienteProps{
    paciente: IPaciente
}

export const Paciente =(props: PacienteProps)=>{
    return(
    <div className="table-row">
      <div className="table-cell">{props.paciente.id}</div>
      <div className="table-cell">{props.paciente.name}</div>
      <div className="table-cell">{props.paciente.surname}</div>
      <div className="table-cell">{props.paciente.password}</div>
    </div>
    )
}