import { Especialidad } from "../components/Especialidad"
import { especialidades } from "../domain/especialidades"
import { IEspecialidad } from "../domain/interfaces"

import { Contacto } from "../components/Contacto"
import { contactos } from "../domain/contactos"
import { IContacto } from "../domain/interfaces"

export const Profesiones = ()=>{
    return(
        <section>
          <div className="flex justify-center">
            <div className="sm:grid sm:grid-cols-3 m-4">
              {especialidades.map((especialidad: IEspecialidad)=>(<Especialidad especialidad={especialidad}/>))}
            </div>
          </div>
          <div className="flex p-6">
              {contactos.map((contacto: IContacto)=>(<Contacto contacto={contacto}/>))}
          </div>
        </section>
    )
}