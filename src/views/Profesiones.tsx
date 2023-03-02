import { Especialidad } from "../components/Especialidad"
import { especialidades } from "../domain/especialidades"
import { IEspecialidad } from "../domain/interfaces"

export const Profesiones = ()=>{
    return(
        <section className="flex flex-col bg-blue-900">
          <div className="flex justify-center">
            {/* <div className="flex bg-gradient-to-r from-yellow-500 to-yellow-900"> */}
            <div className="flex m-5">
              {especialidades.map((especialidad: IEspecialidad)=>(<Especialidad especialidad={especialidad}/>))}
              {/* <Tabla apartado="Apartado1" titulo="Especialistas" operaciones="Operaciones" consultas="Consultas" terapias="Terapias" informacion="Mas información" derechos="Derechos de autor Rubén Henares Hidalgo"/>
              <Tabla apartado="Apartado2" titulo="Especialistas" operaciones="Operaciones" consultas="Consultas" terapias="Terapias" informacion="Mas información" derechos="Derechos de autor Rubén Henares Hidalgo"/>
              <Tabla apartado="Apartado1" titulo="Especialistas" operaciones="Operaciones" consultas="Consultas" terapias="Terapias" informacion="Mas información" derechos="Derechos de autor Rubén Henares Hidalgo"/> */}
            </div>
          </div>
  
          <div className="flex p-6">
            <div className="text-yellow-500">Contacts</div>
            <div>
              <img className="sm:h-52" src="./src/images/avatar.jpg" alt="hospital"></img>
              <div className="flex flex-col">
                <div className="text-white">Andrew Alfred</div>
                <strong className="text-white">Profesional en autopsia</strong>
              </div>
            </div>
            <div>
              <img className="sm:h-52 ml-5" src="./src/images/avatar2.jpg" alt="hospital"></img>
              <div className="flex flex-col">
                <div className="text-white">Debra Houston</div>
                <strong className="text-white">Profesional en autopsia</strong>
              </div>
            </div>
          </div>
        </section>
    )
}