// import { routes } from '../router'
import { useState } from "react"
import Popup from "../components/Popup"
import imgAvatar from "/public/avatar.jpg";
import imgAvatar2 from "/public/avatar2.jpg";
import imgAvatar3 from "/public/avatar3.jpg";
// import loginServices from "../services/login";
import { login } from "../services/login";
import axios from "axios"
import md5 from "md5";
import Cookies from "universal-cookie";
const baseUrl = 'http://localhost:8080/somos'
const cookies = new Cookies();

export const Somos = ()=>{
    const url=""
    const [form, setForm] = useState({
       email: '',
       password: '',
   });

   function submit (e){
    e.preventDefault();
    axios.post(url,{
      email: form.email,
      password: form.password
    })
    .then(res=>{
      console.log(res.data)
    })
   }

  //  const handleChange=async(e)=>{
  //    setForm({
  //       ...form,
  //       [e.target.name]: e.target.value
  //    })
  //    console.log(form)
  //  }

  function handleChange(e){
    const newform={...form}
    newform[e.target.id] = e.target.value
    setForm(newform)
    console.log(newform)
  }
   
   const iniciarSesion=async()=>{
    await axios.get(baseUrl, {params: {email: form.email, password: md5(form.password)}})
    .then(response=>{
      return response.data;
    })
    .then(response=>{
      if(response.length>0){
        const respuesta=response[0];
        cookies.set('id', respuesta.id, {path: "/"}) //path "/" es para que sea accesible en todas las páginas
        cookies.set('nombre', respuesta.nombre, {path: "/"}) //path "/" es para que sea accesible en todas las páginas
        cookies.set('apellidos', respuesta.apellidos, {path: "/"}) //path "/" es para que sea accesible en todas las páginas
        alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellidos}`);
      }else{
        alert("El usuario o la contraseña no son correctos")
      }
    })
    .catch(error=>{
      console.log(error);
    })
  }

  // const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()

  //   try{
  //     const user = await login({
  //       email,
  //       password
  //     })
  //     // console.log("This is Submit")
  //     console.log(user)
  //     setUser(user)
  //     setEmail('')
  //     setPassword('')
  //   } catch(e) {
      
  //     setTimeout(() => {
  //       setErrorMessage(null)
  //     }, 5000)
  //   }

  // }


  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [user, setUser] = useState(null)
  // const [errorMessage, setErrorMessage] = useState(null)

  const [showPopup, setShowPopup] = useState(false)

  const handleOnClose = ()=> setShowPopup(false)
  
    return(
        <div className="m-5 bg-gray-400 rounded-lg mx-auto grid grid-cols-1 lg:max-w-5xl">
          <div className="m-5 p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 text-lg font-semibold text-white md:text-2xl">Aquí estamos</h1>
            <p className="text-sm leading-4 font-medium text-yellow-500">Trabajadores</p>
          </div>
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img src={imgAvatar} alt="avatar" className="m-5 w-30 h-20 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"></img>
            <img src={imgAvatar2} alt="avatar2" className="m-5 w-30 h-20 object-cover rounded-lg sm:h-52 sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"></img>
            <img src={imgAvatar3} alt="avatar3" className="m-5 w-30 h-20 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"></img>
          </div>
          <div className="mt-4 text-xs font-medium flex md:mt-2.5 lg:row-start-2">
            <div className="text-indigo-600 flex items-center dark:text-indigo-400">
              <svg className="fill-none w-16 h-16 stroke-indigo-500">
                <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" className="stroke-2" />
              </svg>
              <span className="h-14 w-16 text-white">4.89 <span className="text-yellow-200 font-normal">(128)</span></span>
            </div>
            <div className="flex items-center text-white">
              <svg fill="currentColor" className="w-1 h-10 mx-2 text-slate-300">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <svg className="w-16 h-14 stroke-2 fill-none stroke-yellow-200">
                <a href="https://www.google.es/maps/place/L'Hospitalet+de+Llobregat,+Barcelona/@41.3578114,2.0944,14z/data=!3m1!4b1!4m6!3m5!1s0x12a498e7672e0317:0x36127a984f4c05d5!8m2!3d41.3661865!4d2.1164942!16zL20vMGp4Nzg?hl=es" target="_blank">
                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </a>
              </svg>
              <p className="h-12">
                L'Hospitalet de Llobregat, Barcelona
              </p>
            </div>
          </div>
          <div className="m-5 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
            <button onClick={()=> setShowPopup(true)} type="button" className="bg-gradient-to-r from-blue-400 to-blue-900 hover:from-blue-900 hover:to-blue-400 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">{/*<Link to={routes.somos}>Quienes somos</Link>*/}Únete</button>
              <Popup visible={showPopup} onClose={() => setShowPopup(false)}>
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                  <div className="bg-white rounded p-2 w-72">
                    <h1 className="font-semibold text-center text-xl text-gray-700">
                      Welcome back
                    </h1>
                    <p className="text-center text-gray-700 mb-5">
                      Sign in
                    </p>
                    

                    <form onSubmit={(e)=> submit (e)} className="flex flex-col">
                      <input 
                        type="text"
                        value={form.email}
                        id="email"
                        className="border border-gray-700 p-2 rounded mb-5" 
                        placeholder="email@example.com"
                        onChange={(e)=>handleChange(e)}
                      />
                      <input 
                        type="password"
                        value={form.password}
                        id="password"
                        className="border border-gray-700 p-2 rounded mb-5" 
                        placeholder="Password"
                        onChange={(e)=>handleChange(e)}
                      />
                    
                    <div className="text-center">
                      <button onClick={()=> iniciarSesion} className="px-5 py-2 bg-gray-700 text-white rounded">
                        Sign in
                      </button>
                    </div>
                    </form>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <button onClick={()=> setShowPopup(false)}>X</button>
                  </div>
                </div>
              </Popup>
          </div>
          <p className="m-5 text-white mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1">
            Somos trabajadores de este hospital con años de practicas y conocimiento. Venimos preparados con estudios universitarios para dar lo mejor a nuestros pacientos... Es más eso es lo que queremos.
          </p>
        </div>
    )
}