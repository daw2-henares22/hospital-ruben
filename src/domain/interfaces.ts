export interface IEspecialidad{
    apartado: String,
    titulo: String,
    operaciones: String,
    consultas: String,
    terapias: String,
    informacion: String,
    derechos: String;
    // medicos: IMedico[
    //     {
    //         id: String,
            
    //     }
    // ];
}

export interface IPaciente{
    id: String;
    name: String;
    surname: String;
    password: String;
}

export interface IMedico{
    avatar: String;
    nombre: String;
    profesion: String;
}

export interface IBuscaTrabajo{
    nombre: String,
    apellido1: String,
    apellido2: String,
    tel: number,
    // medico:[
    //     id: String,
        
    // ]
}