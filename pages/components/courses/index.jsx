import Image from "next/image"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Courses() {

    const course = [
        {
            id: 0,
            name: "photography",
            info: "how to take photo",
            image: "/images/general/header.jpg"
        },
        {
            id: 1,
            name: "photography",
            info: "how to take photo",
            image: "/images/general/header.jpg"
        },
        {
            id: 2,
            name: "photography",
            info: "how to take photo",
            image: "/images/general/header.jpg"
        },
    ]

    return (

        <div className=" w-full h-1/2 backdrop-blur-xl" id="courses">

            <div className="w-full h-full bg-black/30 backdrop-blur-xs">

                <div className="h-1/4 pt-14">
                    <h1 className="text-white text-xl text-center font-bold text-shadow-sm text-shadow-black"> دوره های این هفته </h1>
                </div>

            </div>

        </div>
    )
}