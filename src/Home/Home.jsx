import { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default class Home extends Component {
    render() {
        return(
            <div className="background-container">
                <Navbar/>
                <Hero/>
            </div>
        )
    }
}