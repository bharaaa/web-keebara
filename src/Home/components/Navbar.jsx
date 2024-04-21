import { Component } from "react";

export default class Navbar extends Component{
    render() {
        return(
            <>
            <nav className="navbar navbar-expand-lg bg-primary sticky-top">
                <div className="containe-fluid">
                    <a className="navbar-brand text-white fs-3 ms-3" href="#">
                        <b>Keebara</b> Store
                    </a>
                </div>
            </nav>
            </>
        )
    }
}