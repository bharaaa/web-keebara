import { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

export default function Home() {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <AboutUs/>
        </div>
    )
}