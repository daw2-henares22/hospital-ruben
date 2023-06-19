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
              {/* <button className="ease-out duration-300" onClick={()=> setShowPopup(true)}><img src={`${props.personalAdministrativo.imagen}`} alt="medicos" className="hover:scale-x-105 hover:scale-y-105 transition duration-150 w-80 rounded bg-cover"></img></button> */}
              <div className="mt-26 relative">
        <div className="w-100 relative overflow-hidden">
            <input className="static opacity-100" type="radio" id="carousel-1" name="carousel"/>
            <div className="absolute opacity-0 transition-opacity duration-600 ease-out">
                <img className="hover:scale-x-105 hover:scale-y-105 transition duration-150" onClick={()=> setShowPopup(true)} src={`${props.personalAdministrativo.imagen}`} alt="medicos" />
            </div>
            <label htmlFor="carousel-1" className="bg-black bg-opacity-28 rounded-full text-white cursor-pointer hidden text-40 h-40 leading-35 absolute top-1/2 transform -translate-y-1/2 text-center w-40 z-10 left-2 control-1">‹</label>
            <label htmlFor="carousel-1" className="bg-black bg-opacity-28 rounded-full text-white cursor-pointer hidden text-40 h-40 leading-35 absolute top-1/2 transform -translate-y-1/2 text-center w-40 z-10 right-2 control-1">‹</label>
            <ol className="list-none m-0 p-0 absolute bottom-2 left-0 right-0 text-center z-10">
                <li><label htmlFor="carousel-1"></label></li>
            </ol>
        </div>
    </div>    
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