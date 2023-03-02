import { ICliente } from "../domain/interfaces"

export interface ClienteProps{
    cliente: ICliente
}

export const Cliente =(props: ClienteProps)=>{
    return(
    <div className="table-row">
      <div className="table-cell">{props.cliente.id}</div>
      <div className="table-cell">{props.cliente.name}</div>
      <div className="table-cell">{props.cliente.surname}</div>
      <div className="table-cell">{props.cliente.password}</div>
    </div>
    )
}