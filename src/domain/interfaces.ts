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

export interface IPopup{}

export interface IModal{}

export interface IPersonalSalut{
    nombre: String;
    imagen: String;
    descripcion: String;
}

export interface IPersonalAdministrativo{
    nombre: String;
    imagen: String;
    descripcion: String;
}

export interface IContacto{
    img: String;
    nombre: String;
    profesion: String;
}
export interface IContactoCopy{
    img: String;
    nombre: String;
    profesion: String;
}