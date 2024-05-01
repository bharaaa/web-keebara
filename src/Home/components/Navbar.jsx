import { Component } from "react";

export default function Navbar() {
    return(
            <>
            <nav className="navbar navbar-expand-lg sticky-top my-2 bg-light">
                <div className="d-flex align-items-center">
                <div className="containe-fluid ms-3">
                    <a className="navbar-brand text-black fs-3" href="#">
                        <b>Keebara</b>
                    </a>    
                </div>
                <div className="container-fluid">
                    <button
                        type="button"
                        className="btn text-black ms-3"
                    >
                        Home
                    </button>
                    <button
                        type="button"
                        className="btn text-black"
                    >
                        Store
                    </button>
                    <button
                        type="button"
                        class="btn text-black"
                    >
                        About Us
                    </button>    
                </div>
                </div>
            </nav>
            </>
        )
}