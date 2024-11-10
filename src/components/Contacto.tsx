import { IContacto } from "../domain/interfaces";
import imgAvatar from "/public/avatar.jpg";
export interface ContactoProps{
    contacto: IContacto
}

export const Contacto = (props: ContactoProps)=>{
    return(
        <div className="p-4">
            <div className="text-yellow-500 font-semibold">Contacts</div>
            <div>
                <img className="sm:h-52" src={imgAvatar} alt="hospitals"></img>
                <div className="flex flex-col">
                    <div className="text-gray-700 dark:text-white">{props.contacto.nombre}</div>
                    <strong className="text-gray-700 dark:text-white">{props.contacto.profesion}</strong>
                </div>
            </div>
        </div>
    )
}