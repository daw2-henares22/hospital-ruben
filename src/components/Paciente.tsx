import { IPaciente } from "../domain/interfaces"
import Popup from "../components/Popup"
import { useState } from "react"
import axios from "axios"

export interface PacienteProps{
    paciente: IPaciente
}

export const Paciente =(props: PacienteProps)=>{
  const url =""
  const [data, setData] = useState({
    name: "",
    surname: "",
    password: ""
  })

  function submit (e){
    e.preventDefault();
    axios.post(url,{
      name: data.name,
      surname: data.surname,
      password: data.password
    })
    .then(res=>{
      console.log(res.data)
    })
  }

  function handleChange(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  const [showPopup, setShowPopup] = useState(false)
  const handleOnClose = ()=> setShowPopup(false)
    return(
        <div className="table-row-group text-gray-700 dark:text-gray-300 font-semibold">
              <Popup visible={showPopup} onClose={() => setShowPopup(false)}>
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                  <div className="bg-white rounded p-2 w-72">
                    <h1 className="font-semibold text-center text-xl text-gray-700">
                      Welcome back
                    </h1>
                    <p className="text-center text-gray-700 mb-5">
                      Sign in
                    </p>
                    

                    <form onSubmit={(e)=> submit(e)} className="flex flex-col">
                      <input 
                        type="text"
                        value={data.name}
                        className="border border-gray-700 p-2 rounded mb-5" 
                        placeholder="Name"
                        onChange={(e)=>handleChange(e)}
                        id= "name"
                      />
                      <input 
                        type="text"
                        value={data.surname}
                        className="border border-gray-700 p-2 rounded mb-5" 
                        placeholder="Surname"
                        onChange={(e)=>handleChange(e)}
                        id= "surname"
                      />
                      <input 
                        type="password"
                        value={data.password}
                        className="border border-gray-700 p-2 rounded mb-5" 
                        placeholder="Password"
                        onChange={(e)=>handleChange(e)}
                        id = "password"
                      />
                    
                    <div className="text-center">
                      <button  className="px-5 py-2 bg-gray-700 text-white rounded">
                        Submit
                      </button>
                    </div>
                    </form>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <button onClick={()=> setShowPopup(false)}>X</button>
                  </div>
                </div>
              </Popup>
              <button onClick={()=> setShowPopup(true)} type="button" className="bg-gradient-to-r from-blue-400 to-blue-900 hover:from-blue-900 hover:to-blue-400 text-white text-sm leading-6 font-medium sm:py-2 sm:px-3 rounded-lg">{/*<Link to={routes.somos}>Quienes somos</Link>*/}Submit</button>
            <div className="table-cell">{props.paciente.id}</div>
            <div className="table-cell">{props.paciente.name}</div>
            <div className="table-cell">{props.paciente.surname}</div>
            <div className="table-cell">{props.paciente.password}</div>
          </div>
    )
}