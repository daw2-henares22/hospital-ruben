import { IPersonalSalut } from "../domain/interfaces"
import { IPersonalAdministrativo } from "../domain/interfaces"
import { useState } from "react"
import Popup from "./Popup"
import imgMedico from '/medicos.jpg';

export interface PersonalSalutProps{
  personalSalut: IPersonalSalut
};

export interface PersonalAdministrativoProps{
  personalAdministrativo: IPersonalAdministrativo
};

export const PersonalPopup = (propsSalut: PersonalSalutProps, propsAdministrativo: PersonalAdministrativoProps)=>{
    const [showPopup, setShowPopup] = useState(false)
    // var imgLink;
    // imgLink=[
    //   "./public/medicos.jpg",
    //   ""
    // ]
    return(
      <div>
        <div>
          <div className="mt-80 text-gray-500 font-bold text-center text-xl dark:text-gray-300">Hospital Rubén: Trabajamos lo mas rapido posible para los pacientes tanto dentro como fuera con ambulancias.</div>
            <div className="mt-28 text-center font-bold text-yellow-600 dark:text-yellow-500 text-3xl">Personal de Salud</div>
            <div className="mt-10 text-center font-semibold text-yellow-600 dark:text-yellow-500 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-4">
            <div className="text-2xl pb-3">{propsSalut.personalSalut.nombre}</div>
              {/* <button className="ease-out duration-300" onClick={()=> setShowPopup(true)}><img src={imgMedico} alt="medicos" className="bg-[url('/public/medicos.jpg')] ease-out duration-300 p-36 rounded bg-cover"></img></button> */}
              <button onClick={()=> setShowPopup(true)}><img src={`${propsSalut.personalSalut.imagen}`} alt="medicos" className="hover:scale-x-105 hover:scale-y-105 transition duration-150 w-80 rounded bg-cover"></img></button>
              <Popup visible={showPopup} onClose={() => setShowPopup(false)}>
               <div className="bg-white dark:bg-gray-600 rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
                    {propsSalut.personalSalut.nombre}
                 </h3>
                 <p className="mb-5 font-normal text-gray-500 dark:text-blue-100">
                   {propsSalut.personalSalut.descripcion}
                 </p>
               </div>
              </Popup>
            </div>
          </div>
          <div>
            <div className="mt-28 text-center font-bold text-yellow-600 dark:text-yellow-500 text-3xl">Personal de Administracion</div>  
            <div className="mt-10 text-center font-semibold text-yellow-600 dark:text-yellow-500 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-4">
            <div className="text-2xl pb-3">{propsAdministrativo.personalAdministrativo.nombre}</div>
              {/* <button className="ease-out duration-300" onClick={()=> setShowPopup(true)}><img src={imgMedico} alt="medicos" className="bg-[url('/public/medicos.jpg')] ease-out duration-300 p-36 rounded bg-cover"></img></button> */}
              <button onClick={()=> setShowPopup(true)}><img src={`${propsAdministrativo.personalAdministrativo.imagen}`} alt="medicos" className="hover:scale-x-105 hover:scale-y-105 transition duration-150 w-80 rounded bg-cover"></img></button>
              <Popup visible={showPopup} onClose={() => setShowPopup(false)}>
               <div className="bg-white dark:bg-gray-600 rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
                   {propsAdministrativo.personalAdministrativo.nombre}
                 </h3>
                 <p className="mb-5 font-normal text-gray-500 dark:text-blue-100">
                   {propsAdministrativo.personalAdministrativo.descripcion}
                 </p>
               </div>
              </Popup>
            </div>
        </div>
      </div>
    )
}