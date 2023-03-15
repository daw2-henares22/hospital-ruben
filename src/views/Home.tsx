export const Home =()=>{
    return(
      
      <section className="bg-blue-900">
          
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
             <img className="bg-center bg-[url('./public/medicos.jpg')] p-36 ml-28 bg-cover"></img>
             <img className="bg-center bg-[url('./public/bioanalista.jpg')] p-36 ml-28 bg-cover"></img>
             <img className="bg-center bg-[url('./public/enfermera.jpg')] p-36 ml-28 bg-cover"></img>
             <div className="text-2xl">Tecnico en Radiologia</div>
             <div className="text-2xl">Camillero</div>
             <div className="text-2xl">Paramédicos</div>
             <img className="bg-center bg-[url('./public/tecnicoRadiologia.jpg')] p-36 ml-28 bg-cover"></img>
             <img className="bg-center bg-[url('./public/camillero.jpg')] p-36 ml-28 bg-cover"></img>
             <img className="bg-center bg-[url('./public/paramedicos.jpg')] p-36 ml-28 bg-cover"></img>
            </div>

            <div className="mt-28 text-center font-bold text-yellow-500 text-3xl">Personal de Administrativo</div>
            <div className="mt-10 text-center font-semibold text-yellow-500 grid grid-cols-3 gap-4">
             <div className="text-2xl">Contadores</div>
             <div className="text-2xl">Administradores</div>
             <div className="text-2xl">Relacionista Industrial</div>
             <img className="bg-center bg-[url('./public/contadores.jpg')] p-36 ml-28 bg-cover"></img>
             <img className="bg-center bg-[url('./public/administradores.jpg')] p-36 ml-28 bg-cover"></img>
             <img className="bg-center bg-[url('./public/relacionistaIndustrial.jpg')] p-36 ml-28 bg-cover"></img>
             <div className="text-2xl">Limpieza</div>
             <div className="text-2xl">Chofer</div>
             <div className="text-2xl">Sanitarios</div>
             <img className="mb-10 bg-center bg-[url('./public/limpieza.jpg')] p-36 ml-28 bg-cover"></img>
             <img className="mb-10 bg-center bg-[url('./public/chofer.jpg')] p-36 ml-28 bg-cover"></img>
             <img className="mb-10 bg-center bg-[url('./public/sanitarios.jpg')] p-36 ml-28 bg-cover"></img>
            </div>
         </div>
        
     </section>
    )
}