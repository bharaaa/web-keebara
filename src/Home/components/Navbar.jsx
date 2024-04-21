import { Component } from "react";

export default class Navbar extends Component{
    render() {
        return(
            <>
            <nav className="navbar navbar-expand-lg sticky-top mb-3">
                <div className="containe-fluid">
                    <a className="navbar-brand text-black fs-3 ms-3" href="#">
                        <b>Keebara</b> Store
                    </a>    
                </div>
                <div>
                    <button
                        type="button"
                        className="btn text-black ms-3"
                    >
                        Home
                    </button>
                    <button
                        type="button"
                        class="btn text-black ms-3"
                    >
                        About Us
                    </button>
                    
                </div>
            </nav>
            </>
        )
    }
}