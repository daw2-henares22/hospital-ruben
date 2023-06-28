import { Paciente } from "../components/Paciente"
import { pacientes } from "../domain/pacientes"
import { IPaciente } from "../domain/interfaces"

export const Pacientes = ()=>{
    return(
            <div className="flex flex-col text-center">
                <div className="m-5 mb-6 text-4xl text-gray-700 font-semibold dark:text-white">Pacientes</div>
                    <table className="sm:text-2xl font-semibold">
                        <thead className="text-yellow-600 dark:text-yellow-500">
                            <tr className="">
                                <th className="">id</th>
                                <th className="">Nombre</th>
                                <th className="">Apellido</th>
                                <th className="">password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            
    )
}



{pacientes.map((paciente: IPaciente)=>(<Paciente paciente={paciente}/>))}

<button onClick={()=> setShowPopup(true)} type="button" className="bg-gradient-to-r from-blue-400 to-blue-900 hover:from-blue-900 hover:to-blue-400 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">{/*<Link to={routes.somos}>Quienes somos</Link>*/}Únete</button>
