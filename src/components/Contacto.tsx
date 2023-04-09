import { IContacto } from "../domain/interfaces";

export interface ContactoProps{
    contacto: IContacto
}

export const Contacto = (props: ContactoProps)=>{
    return(
        <div>
            <div className="text-yellow-500">Contacts</div>
            <div>
                <img className="sm:h-52" src="./public/avatar.jpg" alt="hospital"></img>
                <div className="flex flex-col">
                    <div className="text-white">{props.contacto.nombre}</div>
                    <strong className="text-white">{props.contacto.profesion}</strong>
                </div>
            </div>
        </div>
    )
}