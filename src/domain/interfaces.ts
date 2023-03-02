export interface IEspecialidad{
    apartado: string,
    titulo: string,
    operaciones: string,
    consultas: string,
    terapias: string,
    informacion: string,
    derechos: string;
    medicos: IMedico[];
}

export interface ICliente{
    id: string;
    name: string;
    surname: string;
    password: string;
}

export interface IMedico{
    avatar: string;
    nombre: string;
    profesion: string;
}