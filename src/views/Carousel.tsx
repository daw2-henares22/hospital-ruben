import { useState } from "react"
import { CarouselSalut } from "../components/CarouselSalut"

import Popup from "../components/Popup"
import { personalSaluts } from "../domain/personalSaluts"
import { IPersonalSalut } from "../domain/interfaces"

import { personalAdministrativos } from "../domain/personalAdministrativo"
import { IPersonalAdministrativo } from "../domain/interfaces"
import { CarouselAdministrativo } from '../components/CarouselAdministrativo';


export const Carousel =()=>{
  
  return(
      
    <section>
        {/* {personalSaluts.map((personalSalut: IPersonalSalut)=>(<CarouselSalut  personalSalut={personalSalut}/>))} */}
        {personalAdministrativos.map((personalAdministrativo: IPersonalAdministrativo)=>(<CarouselAdministrativo personalAdministrativo={personalAdministrativo}/>))}
    </section>
    )
}