import { BuscaTrabajo } from "../components/BuscaTrabajo"
import { buscaTrabajos } from "../domain/buscaTrabajos"
import { IBuscaTrabajo } from "../domain/interfaces"

export const BuscTrabajos = () =>{
    return(
        <table className="table-auto w-full h-full">
            <thead>
                <th>Nombre</th>
                <th>Primer apellido</th>
                <th>Segundo apellido</th>
                <th>Número de teléfono</th>
            </thead>
            <tbody>
                {buscaTrabajos.map((buscaTrabajo: IBuscaTrabajo)=>(<BuscaTrabajo buscaTrabajo={buscaTrabajo}/>))}
                {/* <td><BuscTrabajo nombre="Daniel" apellido1="Ortega" apellido2="Loureiro" tel="670238935"/></td>
                <td><BuscTrabajo nombre="Daniel" apellido1="Ortega" apellido2="Loureiro" tel="670238935"/></td>
                <td><BuscTrabajo nombre="Daniel" apellido1="Ortega" apellido2="Loureiro" tel="670238935"/></td>
                <td><BuscTrabajo nombre="Daniel" apellido1="Ortega" apellido2="Loureiro" tel="670238935"/></td> */}
            </tbody>
        </table>
    )
}