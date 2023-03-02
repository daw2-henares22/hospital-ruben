import { Cliente } from "../components/Cliente"
import { clientes } from "../domain/clientes"
import { ICliente } from "../domain/interfaces"

export const Clientes = ()=>{
    return(
        <body className="bg-blue-900">
            <section className="m-5">
                <div className="mb-6 flex justify-center text-4xl text-white">Clientes</div>
            {/* <img className="flex relative w-500 h-500 object-cover opacity-70" src="./src/images/hospital.jpg" alt="hospital"></img> */}
        <div className="table w-full text-2xl bg-blue-500">
            <div className="table-header-group">
              <div className="table-row">
                <div className="table-cell text-yellow-500">id</div>
                <div className="table-cell text-yellow-500">Nombre</div>
                <div className="table-cell text-yellow-500">Apellido</div>
                <div className="table-cell text-yellow-500">password</div>
              </div>
            </div>
            <div className="table-row-group">
                {clientes.map((cliente: ICliente)=>(<Cliente cliente={cliente}/>))}
            </div>
            {/* <div className="table-row-group"> 
                <div className="table-row">
                    <div className="table-cell ..."><</div>
                    <div className="table-cell ...">{props.name}</div>
                    <div className="table-cell ...">{props.surname}</div>
                    <div className="table-cell ...">{props.password}</div>
                </div>
            </div>*/}
        </div>
  </section>
        </body>
        
    )
}