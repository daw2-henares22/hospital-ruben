import { IPersonalSalut } from "../domain/interfaces"

import { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
export interface PersonalSalutProps{
    personalSaluts: IPersonalSalut[]
}

export const CSlide = (propsSalut: PersonalSalutProps) =>{
    const [showPopup, setShowPopup] = useState(false)
    return(
        <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={3} step={1} infinite={true}>
            <div className="w-full relative flex items-center justify-center">
                <Slider>
                <div className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                        <Slide onClick={()=> setShowPopup(true)}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto hover:scale-x-105 hover:scale-y-105 transition duration-150">
                            <img className=" rounded-xl" onClick={()=> setShowPopup(true)} src={`${propsSalut.personalSaluts[0].imagen}`} alt="images" />
                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Salut</h2>
                                    <div className="flex h-full items-end pb-6">
                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{propsSalut.personalSaluts[0].nombre}</h3>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </Slider>
            </div>
        </CarouselProvider>

                    
    )
}