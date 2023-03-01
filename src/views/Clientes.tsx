import { Cliente } from "../components/Cliente"

export const Clientes = ()=>{
    return(
        <body className="bg-blue-900">
            <section className="m-5">
                <div className="mb-6 flex justify-center text-4xl text-white">Clientes</div>
            {/* <img className="flex relative w-500 h-500 object-cover opacity-70" src="./src/images/hospital.jpg" alt="hospital"></img> */}
        <div className="table w-full text-2xl bg-blue-500">
            <div className="table-header-group">
              <div className="table-row">
                <div className="table-cell text-yellow-500">id</div>
                <div className="table-cell text-yellow-500">Nombre</div>
                <div className="table-cell text-yellow-500">Apellido</div>
                <div className="table-cell text-yellow-500">password</div>
              </div>
            </div>
            <div className="table-row-group">
                <Cliente id="1" name="Ruben" surname="Henares" password="*****"/>
                <Cliente id="2" name="Juan" surname="Silva" password="*****"/>
                <Cliente id="3" name="Marc" surname="Nicolas" password="*****"/>
                <Cliente id="4" name="Nicolas" surname="Barrio" password="*****"/>
            </div>
            {/* <div className="table-row-group"> 
                <div className="table-row">
                    <div className="table-cell ..."><</div>
                    <div className="table-cell ...">{props.name}</div>
                    <div className="table-cell ...">{props.surname}</div>
                    <div className="table-cell ...">{props.password}</div>
                </div>
            </div>*/}
        </div>
  </section>
        </body>
        
    )
}