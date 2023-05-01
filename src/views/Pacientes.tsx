import { Paciente } from "../components/Paciente"
import { pacientes } from "../domain/pacientes"
import { IPaciente } from "../domain/interfaces"

export const Pacientes = ()=>{
    return(
        <section className="text-center">
            <div className="flex flex-col">
                <div className="m-5 mb-6 text-4xl text-gray-700 font-semibold">Clientes</div>
                    {pacientes.map((paciente: IPaciente)=>(<Paciente paciente={paciente}/>))}
            </div>
        </section>
        
    )
}