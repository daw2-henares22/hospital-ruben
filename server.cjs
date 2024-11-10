const express = require('express');
const app = express();

app.use((req, res, next)=>{
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next()
})

app.get('/api', (req, res)=>{
  res.send(` 
  <section>
  <div className="text-center m-5 mb-6 text-4xl text-gray-700 font-semibold">
    Lista de usuarios
  </div>
  <div className="flex justify-center">
    <div className="table">
      <div className="table-header-group">
        <div className="table-cell">Name</div>
        <div className="table-cell">Gender</div>
      </div>
      <div className="text-center">
        <div className="table-row-group text-gray-700 font-semibold">
          <div className="table-cell">
            {usuarios.map((usuario, index) => (
              <div key={index}>{usuario.name}</div>
            ))}
          </div>
          <div className="table-cell">
            {usuarios.map((usuario, index) => (
              <div key={index}>{usuario.gender}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-center">
    <div className="mt-7">
      <div className="text-center mb-5">Agregar nuevo usuario</div>
      <form onSubmit={agregarUsuario}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#E5E7EB',
            color: '#374151',
            marginLeft: '2px',
            marginBottom: '3px',
            padding: '0.375rem 0.75rem',
            borderRadius: '0.25rem',
            borderColor: 'transparent',
          }}
        /><br />

        <label htmlFor="edad">Edad:</label>
        <input
          type="text"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          style={{
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#E5E7EB',
            color: '#374151',
            marginLeft: '2px',
            padding: '0.375rem 0.75rem',
            borderRadius: '0.25rem',
            borderColor: 'transparent',
          }}
        /><br />
        <div className="text-center">
          <button
            onClick={async () => {
              const res = await fetch('http://localhost:3000/api');
            }}
            type="submit"
            style={{
              cursor: 'pointer',
              color: '#374151',
              backgroundColor: '#F3F4F6',
              borderRadius: '0.25rem',
              padding: '0.5rem 1rem',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
            }}
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

  `)
})

app.listen(3000)
  console.log('Servidor en ejecución en el puerto 3000');