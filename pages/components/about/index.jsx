import Image from "next/image";

export default function About() {

    return (

        <div className="w-full h-1/5 pt-6" id="about">

            <h1 className="text-black text-xl text-center font-bold"> درباره ما </h1>

            <p className="text-black text-center text-sm w-5/6 mx-auto mt-3">

                ما یک فضای خلاقانه برای هنرمندان و علاقه به هنر طراحی کردیم تا با حضور شما
              هر هفته یک کارگاه هنری برگزار کنیم

            </p>

            <Image alt="logo" width={180} height={180} src={"/images/general/side-pic.png"} className="-mt-5 -ml-5"/>

        </div>
    )
}