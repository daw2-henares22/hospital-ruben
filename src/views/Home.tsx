import { useState } from "react"
import { PersonalSalut } from "../components/PersonalSalut"
import Popup from "../components/Popup"
import { personalSaluts } from "../domain/personalSaluts"
import { IPersonalSalut } from "../domain/interfaces"
import { PersonalAdministrativo } from "../components/PersonalAdministrativo"
import { personalAdministrativos } from "../domain/personalAdministrativo"
import { IPersonalAdministrativo } from "../domain/interfaces"

export const Home =()=>{
  
  return(
      
      <section className="bg-blue-100">     
         <div className="flex flex-col text-center">
           <h1 className="m-5 text-6xl text-gray-700 font-semibold">Hospital Rubén</h1>
           
           <p className="px-5 py-5 text-gray-500 font-bold text-2xl">Medicos de Barcelona</p>
          </div>
          <img src="" className="bg-center w-full bg-[url('/public/hospital.jpg')] p-36 absolute bg-cover"></img>
        
         <div className="container mx-auto">
            <div className="mt-80 text-gray-500 font-bold text-center text-xl">Hospital Rubén: Trabajamos lo mas rapido posible para los pacientes tanto dentro como fuera con ambulancias.</div>
            <div className="mt-28 text-center font-bold text-yellow-500 text-3xl">Personal de Salud</div>
            <div className="mt-10 text-center font-semibold text-yellow-500 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-4">
              {personalSaluts.map((personalSalut: IPersonalSalut)=>(<PersonalSalut  personalSalut={personalSalut}/>))}
            </div>
            
            <div className="mt-28 text-center font-bold text-yellow-500 text-3xl">Personal de Administracion</div>  
            <div className="mt-10 text-center font-semibold text-yellow-500 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-4">
              {personalAdministrativos.map((personalAdministrativo: IPersonalAdministrativo)=>(<PersonalAdministrativo personalAdministrativo={personalAdministrativo}/>))}
            </div>
         </div>
        
     </section>
    )
}