import { IPopup } from "../domain/interfaces";

export interface IPopupProps{
    popup: IPopup
}
export default function PopupM({ visible, onClose}){
    const handleOnClose = (e) => {
        if(e.target.id === "container") onClose();
    }//Es para cuando se dé un click dentro del Modal, no se cierre el Modal.
    
    if(!visible) return null;
    
    return(
         <div id='container' onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
             
             <div className="bg-white p-2 rounded w-72">
                <h1 className="font-semibold text-center text-xl text-gray-700">
                    Welcome back
                </h1>
                <p className="text-center text-gray-700 mb-5">
                    Sign in
                </p>
                <div className="flex flex-col">
                    <input type="text" className="border border-gray-700 p-2 rounded mb-5" placeholder="email@example.com"/>
                    <input type="text" className="border border-gray-700 p-2 rounded mb-5" placeholder="*****"/>
                </div>
                <div className="text-center">
                    <button className="px-5 py-2 bg-gray-700 text-white rounded">
                        Sign in
                    </button>
                </div>
             </div>
             {/* <div className="bg-white p-2 rounded">
                <p>My modal</p>
                <button onClick={onClose}>X</button>
             </div> */}
         </div>
         )
}

/*
export const Popup =(props: IPopupProps)=>{
     if(!visible) return null;
    
    return(
         <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
             <div className="bg-white">My modals</div>
         </div>

        /////////Otra manera
        // <div className="popup">
        //     <div className="popup-inner">
        //         <button className="close-btn" onClick={()=> props.setTrigger(false)}>close</button>
        //     </div>
        // </div>
    )
}
*/