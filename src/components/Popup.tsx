import { IPopup } from "../domain/interfaces";

export interface IPopupProps{
    popup: IPopup
}
export default function Popup({ visible, onClose, children}){
    const handleOnClose = (e) => {
        if(e.target.id === "container") onClose();
    }//Es para cuando se dé un click dentro del Modal, no se cierre el Modal.
    
    if(!visible) return null;
    
    return(
         <div id='container' onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
             
             <div className="flex flex-col w-[600px]">
                {/* <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button> */}
                <div className="bg-white p-2 rounded">{children}</div>
            </div>
        </div>
    )
}