import { IPersonalSalut } from "../domain/interfaces"
import { IPersonalAdministrativo } from "../domain/interfaces"
import Popup from "../components/Popup";
import imgMedico from '/medicos.jpg';

export interface PersonalSalutProps{
    personalSalut: IPersonalSalut
    
}
export interface PersonalAdministrativoProps{
    personalAdministrativo: IPersonalAdministrativo
}


import { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export const Carousel=(propsAdministrativo: PersonalAdministrativoProps, propsSalut: PersonalSalutProps)=> {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div className="container">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={3} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider>
                            <div id="slider" className="md:grid md:grid-cols-3 gap-4 h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto hover:scale-x-105 hover:scale-y-105 transition duration-150">
                                        <img className=" rounded-xl" onClick={()=> setShowPopup(true)} src="./medicos.jpg" alt="black chair and white table" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Salut</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Medicos</h3>
                                            </div>
                                        </div>
                                        {/* <Popup visible={showPopup} onClose={() => setShowPopup(false)}>
                                            <div className="bg-white dark:bg-gray-600 rounded p-6">
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
                                                    {props.personalSalut.nombre}
                                                </h3>
                                                <p className="mb-5 font-normal text-gray-500 dark:text-blue-100">
                                                    {props.personalSalut.descripcion}
                                                </p>
                                            </div>
                                        </Popup> */}
                                    </div>
                                </Slide>
                                
                                </div>
                            </Slider>
                    <ButtonBack role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}