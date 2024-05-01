import { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
    return(
        <div className="background-container">
            <Navbar/>
            <Hero/>
        </div>
    )
}