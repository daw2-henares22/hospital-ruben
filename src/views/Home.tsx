import { useState } from "react"
import Popup from "../components/Popup"

export const Home =()=>{
  const [showPopup, setShowPopup] = useState(false)
  const [showPopup2, setShowPopup2] = useState(false)
  const [showPopup3, setShowPopup3] = useState(false)
  const [showPopup4, setShowPopup4] = useState(false)
  const [showPopup5, setShowPopup5] = useState(false)
  const [showPopup6, setShowPopup6] = useState(false)
  const [showPopup7, setShowPopup7] = useState(false)
  const [showPopup8, setShowPopup8] = useState(false)
  const [showPopup9, setShowPopup9] = useState(false)
  const [showPopup10, setShowPopup10] = useState(false)
  const [showPopup11, setShowPopup11] = useState(false)
  const [showPopup12, setShowPopup12] = useState(false)
  


  const handleOnClose = ()=> setShowPopup(false)
  
  return(
      
      <section className="bg-blue-900">
          {/* <PopupM onClose={handleOnClose} visible={showPopup} />
          <PopupM onClose={handleOnClose} visible={showPopup2} /> */}

        {/*<section className="bg-gradient-to-r from-blue-500 to-blue-900">*/}
            {/* <img className="flex relative w-500 h-500 object-cover opacity-70" src="./src/images/hospital.jpg" alt="hospital"></img> */}       
         <div className="flex flex-col text-center">
           <h1 className="m-5 text-6xl text-white">Hospital Rubén</h1>
           
           <p className="px-5 py-5 text-white text-2xl">Medicos de Barcelona</p>
          </div>
          <img className="bg-center w-full bg-[url('./public/hospital.jpg')] p-36 absolute bg-cover"></img>
           {/* <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
             <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Somos</button>
             <button className="py-1 px-4 focus:outline-none text-yellow-500">Profesiones</button>
             <button className="py-1 px-4 focus:outline-none text-indigo-500">
               <a href="https://www.google.es/maps/place/L'Hospitalet+de+Llobregat,+Barcelona/@41.3578114,2.0944,14z/data=!3m1!4b1!4m6!3m5!1s0x12a498e7672e0317:0x36127a984f4c05d5!8m2!3d41.3661865!4d2.1164942!16zL20vMGp4Nzg?hl=es" target="_blank">
                 Como llegar
               </a>
             </button>
           </div> */}
        
         <div className="container mx-auto">
            {/* <div className="flex"><Tabla apartado="Apartado1" titulo="Especialistas" operaciones="Operaciones" consultas="Consultas" terapias="Terapias" informacion="Mas información" derechos="Derechos de autor Rubén Henares Hidalgo"/></div>
             <div className="flex"><Tabla apartado="Apartado2" titulo="Especialistas" operaciones="Operaciones" consultas="Consultas" terapias="Terapias" informacion="Mas información" derechos="Derechos de autor Rubén Henares Hidalgo"/></div>
             <div className="flex"><Tabla apartado="Apartado1" titulo="Especialistas" operaciones="Operaciones" consultas="Consultas" terapias="Terapias" informacion="Mas información" derechos="Derechos de autor Rubén Henares Hidalgo"/></div> */}
            <div className="mt-80 text-white text-center text-xl">Hospital Rubén: Trabajamos lo mas rapido posible para los pacientes tanto dentro como fuera con ambulancias.</div>
            <div className="mt-28 text-center font-bold text-yellow-500 text-3xl">Personal de Salud</div>
            <div className="mt-10 text-center font-semibold text-yellow-500 grid grid-cols-3 gap-4">
             <div className="text-2xl">Medicos</div>
             <div className="text-2xl">Bioanalista</div>
             <div className="text-2xl">Enfermeros</div>
             <button onClick={()=> setShowPopup(true)}><img className="bg-center bg-[url('./public/medicos.jpg')] p-36 ml-28 bg-cover"></img></button>
              <Popup visible={showPopup} onClose={() => setShowPopup(false)}>
               <div className="bg-white rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-5">
                   Medicos
                 </h3>
                 <p className="mb-5 font-normal text-gray-500">
                   Los Medicos hacen cosas
                 </p>
               </div>
              </Popup>
              
             <button onClick={()=> setShowPopup2(true)}><img className="bg-center bg-[url('./public/bioanalista.jpg')] p-36 ml-28 bg-cover"></img></button>
              <Popup visible={showPopup2} onClose={() => setShowPopup2(false)}>
               <div className="bg-white rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-5">
                   Bioanalistas
                 </h3>
                 <p className="mb-5 font-normal text-gray-500">
                   Los Bioanalistas hacen cosas
                 </p>
               </div>
              </Popup>
             <button onClick={()=> setShowPopup3(true)}><img className="bg-center bg-[url('./public/enfermera.jpg')] p-36 ml-28 bg-cover"></img></button>
              <Popup visible={showPopup3} onClose={() => setShowPopup3(false)}>
               <div className="bg-white rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-5">
                   Enfermeros
                 </h3>
                 <p className="mb-5 font-normal text-gray-500">
                   Los Enfermeros hacen cosas
                 </p>
               </div>
              </Popup>
             <div className="text-2xl">Tecnico en Radiologia</div>
             <div className="text-2xl">Camillero</div>
             <div className="text-2xl">Paramédicos</div>
             <button onClick={()=> setShowPopup4(true)}><img className="bg-center bg-[url('./public/tecnicoRadiologia.jpg')] p-36 ml-28 bg-cover"></img></button>
              <Popup visible={showPopup4} onClose={() => setShowPopup4(false)}>
               <div className="bg-white rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-5">
                   Tecnico en Radiologia
                 </h3>
                 <p className="mb-5 font-normal text-gray-500">
                   Los Tecnicos en Radiologia hacen cosas
                 </p>
               </div>
              </Popup>
             <button onClick={()=> setShowPopup5(true)}><img className="bg-center bg-[url('./public/camillero.jpg')] p-36 ml-28 bg-cover"></img></button>
              <Popup visible={showPopup5} onClose={() => setShowPopup5(false)}>
               <div className="bg-white rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-5">
                   Camillero
                 </h3>
                 <p className="mb-5 font-normal text-gray-500">
                   Los Camilleros se encargan de llevar a los pacientes todos los lugares.
                 </p>
               </div>
              </Popup>
             <button onClick={()=> setShowPopup6(true)}><img className="bg-center bg-[url('./public/paramedicos.jpg')] p-36 ml-28 bg-cover"></img></button>
              <Popup visible={showPopup6} onClose={() => setShowPopup6(false)}>
               <div className="bg-white rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-5">
                   Paramédico
                 </h3>
                 <p className="mb-5 font-normal text-gray-500">
                   Los Paramédicos hacen cosas
                 </p>
               </div>
              </Popup>
            </div>

            <div className="mt-28 text-center font-bold text-yellow-500 text-3xl">Personal de Administrativo</div>
            <div className="mt-10 text-center font-semibold text-yellow-500 grid grid-cols-3 gap-4">
             <div className="text-2xl">Contadores</div>
             <div className="text-2xl">Administradores</div>
             <div className="text-2xl">Relacionista Industrial</div>
             <button onClick={()=> setShowPopup7(true)}><img className="bg-center bg-[url('./public/contadores.jpg')] p-36 ml-28 bg-cover"></img></button>
              <Popup visible={showPopup7} onClose={() => setShowPopup7(false)}>
               <div className="bg-white rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-5">
                   Contadores
                 </h3>
                 <p className="mb-5 font-normal text-gray-500">
                   Los contadores hacen cosas
                 </p>
               </div>
              </Popup>
             <button onClick={()=> setShowPopup8(true)}><img className="bg-center bg-[url('./public/administradores.jpg')] p-36 ml-28 bg-cover"></img></button>
              <Popup visible={showPopup8} onClose={() => setShowPopup8(false)}>
               <div className="bg-white rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-5">
                   Administradores
                 </h3>
                 <p className="mb-5 font-normal text-gray-500">
                   Los Administradores hacen cosas
                 </p>
               </div>
              </Popup>
             <button onClick={()=> setShowPopup9(true)}><img className="bg-center bg-[url('./public/relacionistaIndustrial.jpg')] p-36 ml-28 bg-cover"></img></button>
              <Popup visible={showPopup9} onClose={() => setShowPopup9(false)}>
               <div className="bg-white rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-5">
                   Tecnico en Radiologia
                 </h3>
                 <p className="mb-5 font-normal text-gray-500">
                   Los Tecnicos en Radiologia hacen cosas
                 </p>
               </div>
              </Popup>
             <div className="text-2xl">Limpieza</div>
             <div className="text-2xl">Chofer</div>
             <div className="text-2xl">Sanitarios</div>
             <button onClick={()=> setShowPopup10(true)}><img className="mb-10 bg-center bg-[url('./public/limpieza.jpg')] p-36 ml-28 bg-cover"></img></button>
             <Popup visible={showPopup10} onClose={() => setShowPopup10(false)}>
               <div className="bg-white rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-5">
                   Limpieza
                 </h3>
                 <p className="mb-5 font-normal text-gray-500">
                   Los Limpiadores trabajan en todo tipo de suciedad.
                 </p>
               </div>
              </Popup>
             <button onClick={()=> setShowPopup11(true)}><img className="mb-10 bg-center bg-[url('./public/chofer.jpg')] p-36 ml-28 bg-cover"></img></button>
              <Popup visible={showPopup11} onClose={() => setShowPopup11(false)}>
               <div className="bg-white rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-5">
                   Chofer
                 </h3>
                 <p className="mb-5 font-normal text-gray-500">
                   Los Chofer se encargan de llevar a los primeros auxileos a sus destinos.
                 </p>
               </div>
              </Popup>
             <button onClick={()=> setShowPopup12(true)}><img className="mb-10 bg-center bg-[url('./public/sanitarios.jpg')] p-36 ml-28 bg-cover"></img></button>
              <Popup visible={showPopup12} onClose={() => setShowPopup12(false)}>
               <div className="bg-white rounded p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-5">
                   Sanitarios
                 </h3>
                 <p className="mb-5 font-normal text-gray-500">
                   Los Sanitarios se encargan de preocuparse por los pacientes 24h.
                 </p>
               </div>
              </Popup>
            </div>
         </div>
        
     </section>
    )
}