import { Paciente } from "../components/Paciente"
import { pacientes } from "../domain/pacientes"
import { IPaciente } from "../domain/interfaces"

export const Pacientes = ()=>{
    return(
        <body className="bg-blue-100">
            <section className="m-5">
                <div className="mb-6 flex justify-center text-4xl text-gray-700 font-semibold">Clientes</div>
        <div className="table w-full text-2xl bg-blue-500">
            <div className="table-header-group">
              <div className="table-row">
                <div className="table-cell text-yellow-500 font-semibold">id</div>
                <div className="table-cell text-yellow-500 font-semibold">Nombre</div>
                <div className="table-cell text-yellow-500 font-semibold">Apellido</div>
                <div className="table-cell text-yellow-500 font-semibold">password</div>
              </div>
            </div>
            <div className="table-row-group">
                {pacientes.map((paciente: IPaciente)=>(<Paciente paciente={paciente}/>))}
            </div>
        </div>
  </section>
        </body>
        
    )
}