import { IBuscaTrabajo } from "../domain/interfaces"

export interface BuscaTrabajoProps{
    buscaTrabajo: IBuscaTrabajo
}

export const BuscaTrabajo = (props: BuscaTrabajoProps)=>{
    return(
        <tbody>
            <td>{props.buscaTrabajo.nombre}</td>
            <td>{props.buscaTrabajo.apellido1}</td>
            <td>{props.buscaTrabajo.apellido2}</td>
            <td>{props.buscaTrabajo.tel}</td>
        </tbody>
    )
}