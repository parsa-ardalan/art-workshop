import Image from "next/image";

export default function Header() {

    return (

        <div className="h-1/2 w-full pt-12" id="header">

            <header className="w-full h-20 bg-black/50 flex py-6" dir="rtl">

                <button className="bg-amber-800 border-0 rounded-md w-24 h-full mr-3 text-sm shadow-md shadow-black/35 duration-300 hover:bg-amber-900">
                    ثبت نام دوره
                </button>

                <button className="text-white h-full text-sm text-center mr-6"> درباره ما </button>
                <button className="text-white h-full text-sm text-center mr-6">  تماس با ما </button>
                <button className="text-white h-full text-sm text-center mr-6"> دوره های ما </button>

                <Image width={40} height={40} alt="logo" src={"/images/general/logo.png"} className="mr-7" />

            </header>

        </div>
    )
}