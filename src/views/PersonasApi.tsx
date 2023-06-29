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
              .then(data => setUsuarios(data))
              .catch(error => console.log('Error al obtener la lista de usuarios:', error));
          };
        
          const agregarUsuario = (e: React.FormEvent) => {
            e.preventDefault();
        
            const nuevoUsuario: Usuario = {
              name: name,
              gender: gender,
            };
        
            fetch('https://ejemplo.com/api/usuarios', {
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
            <div>
                <h1>Lista de usuarios</h1>
                <ul>
                  {usuarios.map((usuario, index) => (
                    <li key={index}>
                      {usuario.name} - {usuario.gender} años
                    </li>
                  ))}
                </ul>

                <h2>Agregar nuevo usuario</h2>
                <form onSubmit={agregarUsuario}>
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required /><br />

                  <label htmlFor="edad">Edad:</label>
                  <input type="text" id="gender" value={gender} onChange={e => setGender(e.target.value)} required /><br />

                  <button type="submit">Agregar</button>
      </form>
    </div>
        )
}