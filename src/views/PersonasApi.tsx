import { useEffect, useState } from "react";
interface Usuario {
    name: String;
    gender: String;
  }

export const PersonasApi = ()=>{
    // fetch('https://rickandmortyapi.com/api/character')
    //     .then(response => response.json())
    //     .then (json => console.log(json))

        const [usuarios, setUsuarios] = useState<Usuario[]>([]);
        const [name, setName] = useState('');
        const [gender, setGender] = useState('');

        useEffect(()=> {
            obtenerUsuarios();
        }, []);

        const obtenerUsuarios = () => {
            fetch('https://rickandmortyapi.com/api/character')
              .then(response => response.json())
              .then((data) => setUsuarios(data.results))
              .catch(error => console.log('Error al obtener la lista de usuarios:', error));
          };
        
          const agregarUsuario = (e: React.FormEvent) => {
            console.log(name, gender)
            e.preventDefault();
        
            const nuevoUsuario: Usuario = {
              name: name,
              gender: gender,
            };
        
            fetch('https://api.example.com/usuarios', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(nuevoUsuario)
            })
              .then(response => response.json())
              .then(data => {
                setUsuarios([...usuarios, data]);
                setName('');
                setGender('');
              })
              .catch(error => console.log('Error al agregar un nuevo usuario:', error));
          };




        return(
            <section className="">
              <div className="text-center m-5 mb-6 text-4xl text-gray-700 font-semibold dark:text-white">Lista de usuarios</div>
                <div className="flex justify-center">
                <div className="table sm:text-2xl">
                    <div className="table-header-group text-yellow-600 dark:text-yellow-500 font-semibold">
                      <div className="table-cell">Name</div>
                      <div className="table-cell">Gender</div>
                    </div>
                  <div className="text-center">
                    <div className="table-row-group text-gray-700 dark:text-gray-300 font-semibold">
                      <div className="table-cell">
                        {usuarios.map((usuario, index) => (
                          <div key={index}>
                            {usuario.name}
                          </div>
                        ))}
                      </div>
                      <div className="table-cell">
                        {usuarios.map((usuario, index) => (
                          <div key={index}>
                            {usuario.gender}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  

                </div>
                </div>
                <div className="flex justify-center">
                  <div className="mt-7 sm:text-2xl text-yellow-600 dark:text-yellow-500 font-semibold">
                  <div className="text-center mb-5">Agregar nuevo usuario</div>
                  <form onSubmit={agregarUsuario}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input className="shadow-md shadow-gray-700 dark:shadow-md dark:shadow-gray-300 bg-blue-100 dark:bg-slate-800 ml-2 mb-3 text-gray-700 dark:text-gray-300" type="text"
                           id="name"
                           value={name}
                           onChange={e => setName(e.target.value)} required /><br />

                    <label htmlFor="edad">Edad:</label>
                    <input className="shadow-md shadow-gray-700 dark:shadow-md dark:shadow-gray-300 bg-blue-100 dark:bg-slate-800 ml-2 text-gray-700 dark:text-gray-300" type="text"
                           id="gender"
                           value={gender}
                           onChange={e => setGender(e.target.value)} required /><br />
                    <div className="text-center">
                      <button className=" dark:hover:text-indigo-300 hover:text-indigo-500 hover:scale-x-105 hover:scale-y-105 transition duration-150 shadow-xl hover:shadow-lg dark:text-blue-100 text-gray-600" onClick={async ()=>{
                        const res = await fetch('http://localhost:3000/api')
                      }} type="submit">Agregar</button>
                    </div>
                  </form>
                  </div>
                </div>
                
    </section>
        )
}