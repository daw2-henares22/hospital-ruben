import { IPersonalAdministrativo } from "../domain/interfaces"
import { useState } from "react"
import Popup from "./Popup"
import imgMedico from '/medicos.jpg';

export interface PersonalAdministrativoProps{
    personalAdministrativo: IPersonalAdministrativo
}

export const PersonalAdministrativo = (props: PersonalAdministrativoProps)=>{
    const [showPopup, setShowPopup] = useState(false)
    // var imgLink;
    // imgLink=[
    //   "./public/medicos.jpg",
    //   ""
    // ]
    return(
        <div>
            <div className="text-2xl pb-3">{props.personalAdministrativo.nombre}</div>
              {/* <button className="ease-out duration-300" onClick={()=> setShowPopup(true)}><img src={imgMedico} alt="medicos" className="bg-[url('/public/medicos.jpg')] ease-out duration-300 p-36 rounded bg-cover"></img></button> */}
              <button onClick={()=> setShowPopup(true)}><img src={`${props.personalAdministrativo.imagen}`} alt="medicos" className="hover:scale-x-105 hover:scale-y-105 transition duration-150 w-80 rounded bg-cover"></img></button>
              <Popup visible={showPopup} onClose={() => setShowPopup(false)}>
               <div className="bg-white dark:bg-gray-600 rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
                   {props.personalAdministrativo.nombre}
                 </h3>
                 <p className="mb-5 font-normal text-gray-500 dark:text-blue-100">
                   {props.personalAdministrativo.descripcion}
                 </p>
               </div>
              </Popup>
        </div>
    )
}