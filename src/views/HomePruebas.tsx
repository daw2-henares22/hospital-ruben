export const Home =()=>{
    return(
      
      <section className="bg-blue-900">
        <img className="p-36 ml-44 absolute opacity-70" src="./public/hospital.jpg" alt="hospital"></img>
        {/*<section className="bg-gradient-to-r from-blue-500 to-blue-900">*/}
            {/* <img className="flex relative w-500 h-500 object-cover opacity-70" src="./src/images/hospital.jpg" alt="hospital"></img> */}       
         <div className="flex flex-col text-center">
           <h1 className="m-5 text-6xl text-white">Hospital Rubén</h1>
           
           <p className="px-5 py-5 text-white text-2xl">Medicos de Barcelona</p>
           
           {/* <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
             <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Somos</button>
             <button className="py-1 px-4 focus:outline-none text-yellow-500">Profesiones</button>
             <button className="py-1 px-4 focus:outline-none text-indigo-500">
               <a href="https://www.google.es/maps/place/L'Hospitalet+de+Llobregat,+Barcelona/@41.3578114,2.0944,14z/data=!3m1!4b1!4m6!3m5!1s0x12a498e7672e0317:0x36127a984f4c05d5!8m2!3d41.3661865!4d2.1164942!16zL20vMGp4Nzg?hl=es" target="_blank">
                 Como llegar
               </a>
             </button>
           </div> */}
         </div>
           
             {/* <div className="flex"><Tabla apartado="Apartado1" titulo="Especialistas" operaciones="Operaciones" consultas="Consultas" terapias="Terapias" informacion="Mas información" derechos="Derechos de autor Rubén Henares Hidalgo"/></div>
             <div className="flex"><Tabla apartado="Apartado2" titulo="Especialistas" operaciones="Operaciones" consultas="Consultas" terapias="Terapias" informacion="Mas información" derechos="Derechos de autor Rubén Henares Hidalgo"/></div>
             <div className="flex"><Tabla apartado="Apartado1" titulo="Especialistas" operaciones="Operaciones" consultas="Consultas" terapias="Terapias" informacion="Mas información" derechos="Derechos de autor Rubén Henares Hidalgo"/></div> */}
            <div className="text-center text-yellow-500 grid grid-cols-3 gap-4">
             <div className="text-2xl">Hola</div>
             <div>01</div>
             <div>01</div>
             <div>01</div>
             <div>01</div>
             <div>01</div>
             <div>01</div>
             <div>01</div>
             <div>01</div>
             <div>01</div>
            </div>
            <div></div>
     </section>
    )
}