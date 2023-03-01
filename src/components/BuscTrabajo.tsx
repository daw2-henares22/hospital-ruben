export interface BuscTrabajoProps{
    nombre: String,
    apellido1: String,
    apellido2: String,
    tel: String,
}

export const BuscTrabajo = (props: BuscTrabajoProps)=>{
    return(
        <tbody>
            <td>{props.nombre}</td>
            <td>{props.apellido1}</td>
            <td>{props.apellido2}</td>
            <td>{props.tel}</td>
        </tbody>
    )
}