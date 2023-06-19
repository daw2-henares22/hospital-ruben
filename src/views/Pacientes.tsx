import { Paciente } from "../components/Paciente"
import { pacientes } from "../domain/pacientes"
import { IPaciente } from "../domain/interfaces"

export const Pacientes = ()=>{
    return(
        <section className="text-center">
            <div className="flex flex-col">
                <div className="m-5 mb-6 text-4xl text-gray-700 font-semibold dark:text-white">Pacientes</div>
                    <div className="table w-full text-2xl">
                        <div className="table-header-group text-yellow-600 dark:text-yellow-500 font-semibold">
                            <div className="table-cell">id</div>
                            <div className="table-cell">Nombre</div>
                            <div className="table-cell">Apellido</div>
                            <div className="table-cell">password</div>
                        </div>
                        {pacientes.map((paciente: IPaciente)=>(<Paciente paciente={paciente}/>))}
                    </div>
            </div>
        </section>
    )
}