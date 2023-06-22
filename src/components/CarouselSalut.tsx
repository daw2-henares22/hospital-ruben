import { IPersonalSalut } from "../domain/interfaces"
import Popup from "./Popup";
import imgMedico from '/medicos.jpg';

export interface PersonalSalutProps{
    personalSalut: IPersonalSalut
}

import { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export const CarouselSalut=(propsSalut: PersonalSalutProps)=> {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={3} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <Slider>
                            <div className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide onClick={()=> setShowPopup(true)}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto hover:scale-x-105 hover:scale-y-105 transition duration-150">
                                    <img className=" rounded-xl" onClick={()=> setShowPopup(true)} src={`${propsSalut.personalSalut.imagen}`} alt="images" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Salut</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{propsSalut.personalSalut.nombre}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                
                                
                            </div>
                        </Slider>
                    </div>
                </CarouselProvider>
                
            </div>
            <Popup visible={showPopup} onClose={() => setShowPopup(false)}>
                <div className="bg-white dark:bg-gray-600 rounded p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
                        {propsSalut.personalSalut.nombre}
                    </h3>
                    <p className="mb-5 font-normal text-gray-500 dark:text-blue-100">
                        {propsSalut.personalSalut.descripcion}
                    </p>
                </div>
            </Popup>
        </div>
        
    );
}