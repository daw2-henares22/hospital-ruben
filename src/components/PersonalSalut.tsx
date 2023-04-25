import { IPersonalSalut } from "../domain/interfaces"
import { useState } from "react"
import Popup from "./Popup"
import imgMedico from '/medicos.jpg';

export interface PersonalSalutProps{
    personalSalut: IPersonalSalut
    imagenSalut: String
}

export const PersonalSalut = (props: PersonalSalutProps)=>{
    const [showPopup, setShowPopup] = useState(false)
    // var imgLink;
    // imgLink=[
    //   "./public/medicos.jpg",
    //   ""
    // ]
    return(
        <div>
            <div className="text-2xl pb-3">{props.personalSalut.nombre}</div>
              {/* <button className="ease-out duration-300" onClick={()=> setShowPopup(true)}><img src={imgMedico} alt="medicos" className="bg-[url('/public/medicos.jpg')] ease-out duration-300 p-36 rounded bg-cover"></img></button> */}
              <button className="ease-out duration-300" onClick={()=> setShowPopup(true)}><img src={`${props.imagenSalut}`} alt="medicos" className="hover:scale-x-105 hover:scale-y-105 transition duration-150 w-80 rounded bg-cover"></img></button>
              <Popup visible={showPopup} onClose={() => setShowPopup(false)}>
               <div className="bg-white rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-5">
                    {props.personalSalut.nombre}
                 </h3>
                 <p className="mb-5 font-normal text-gray-500">
                   {props.personalSalut.descripcion}
                 </p>
               </div>
              </Popup>
        </div>
    )
}