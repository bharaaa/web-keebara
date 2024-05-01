import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Testimony from "./components/Testimony";
import ContactUs from "./components/ContactUs";

export default function Home() {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <AboutUs/>
            <Testimony/>
            <ContactUs/>
        </div>
    )
}