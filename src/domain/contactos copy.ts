import { IContactoCopy } from "./interfaces";


    export const contactos = async ()=> {
        const peticion = await axios.get('https://rickandmortyapi.com/api/character')
        console.log(peticion.data.results)
}