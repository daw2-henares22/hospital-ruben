export interface MedicoProps{
    id: string;
    name: string;
    surname: string;
    experiencieInYears: number;
}

export const Medico = (props: MedicoProps)=>{
    return (<div className="p-4 rounded-sm bg-blue-500 text-white">Medico: {props.name} {props.surname} {props.experiencieInYears} años de experiencia</div>)
}