import { useState } from "react"
import { PersonalPopup } from "../components/PersonalPopup"
import Popup from "../components/Popup"
import { personalSaluts } from "../domain/personalSaluts"
import { IPersonalSalut } from "../domain/interfaces"
import { personalAdministrativos } from "../domain/personalAdministrativo"
import { IPersonalAdministrativo } from "../domain/interfaces"


export const Home =()=>{
  
  return(
      
      <section>
         <div className="flex flex-col text-center">
           <h1 className="mb-5 text-6xl text-gray-700 font-semibold dark:text-white">Hospital Rubén</h1>
           
           <p className="px-5 py-5 text-gray-500 font-bold text-2xl dark:text-gray-300">Medicos de Barcelona</p>
          </div>
          <img src="" className="bg-center w-full bg-[url('/public/hospital.jpg')] p-36 absolute bg-cover"></img>
          <div className="container mx-auto">
            {personalSaluts.map((personalSalut: IPersonalSalut)=>(<PersonalPopup  personalSalut={personalSalut}/>))}
            {personalAdministrativos.map((personalAdministrativo: IPersonalAdministrativo)=>(<PersonalPopup personalAdministrativo={personalAdministrativo}/>))}
          </div>
     </section>
    )
}