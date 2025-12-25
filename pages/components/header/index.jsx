// Header.jsx
import { useState } from "react";
import Image from "next/image";

export default function Header() {

    const [open, setOpen] = useState(false);

    const pages = [

        { title: "دوره های ما", url: "/courses", id: 0 },
        { title: "تماس با ما", url: "/contact", id: 1 },
        { title: "درباره ما", url: "/about", id: 2 },
    ];

    return (

        <section id="header" className="w-full h-2/5">

            <header className="bg-black/50 w-full shadow-md shadow-black">

                <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

                    <div className="text-xl font-bold">
                        <Image src="/images/general/logo.png" alt="logo" width={40} height={40} className="w-10 h-10 md:w-14 md:h-14" />
                    </div>

                    <button className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                        &#9776;
                    </button>

                    {/* desktop version */}
                    <nav className="hidden md:flex space-x-6 w-3/4 gap-x-20 pr-20 h-full" dir="rtl">

                        {
                            pages.map((page) => (
                                <a href={page?.url} className="text-3xl" key={page?.id}> {page?.title} </a>
                            ))
                        }

                    </nav>

                </div>

                {/* mobile version */}
                <div className={`md:hidden shadow-md overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>

                    {
                        pages.map((page) => (

                            <a href={page?.url} className="text-lg shadow-md shadow-black text-right block px-4 py-2" key={page?.id}> {page?.title} </a>
                        ))
                    }

                </div>

            </header>

        </section>
    );
}
