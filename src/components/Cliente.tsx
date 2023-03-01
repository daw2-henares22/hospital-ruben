export interface ClienteProps{
    id: string;
    name: string;
    surname: string;
    password: string;
}

export const Cliente =(props: ClienteProps)=>{
    return(
    <div className="table-row">
      <div className="table-cell">{props.id}</div>
      <div className="table-cell">{props.name}</div>
      <div className="table-cell">{props.surname}</div>
      <div className="table-cell">{props.password}</div>
    </div>
    )
}