import Image from "next/image"

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

                <div className="h-2/4 grid grid-cols-3 p-3 gap-3">

                    {
                        course.map((index) => (

                            <div className="h-52 shadow-md shadow-black rounded-sm course p-1" >

                                <Image src={index?.image} width={50} height={50} className="w-full h-2/5" />

                                <h1 className="text-black text-center text-sm mt-3"> {index?.name} </h1>

                                <hr className="text-black/50 w-4/5 mx-auto mt-3" />

                                <p className="text-center text-xs text-black/70 mt-2"> {index?.info} </p>

                                <div className="h-w-full h-7 px-3 mt-4">
                                    <button className="w-full h-7 mx-auto text-center rounded-md text-xs bg-amber-950 text-white"> جزئیات بیشتر </button>
                                </div>


                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    )
}