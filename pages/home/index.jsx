import About from "../components/about";
import Courses from "../components/courses";
import Header from "../components/header";

export default function HomePage() {

    return (

        <div className="h-screen w-screen">

            <Header />

            <About />

            <Courses />

        </div>
    )
}