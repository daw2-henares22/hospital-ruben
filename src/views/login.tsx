import { Pacientes } from "./Pacientes";
import { useState } from "react";

export const login = ()=>{
    const [email, setEmail] = useState("");

    return(
        <div>
            <form>
                <input type="email" name="email" placeholder="your@email.com" onChange={e => setEmail(e.target.value)}/>
                <button>Enviar</button>
            </form>
        </div>
    )
}