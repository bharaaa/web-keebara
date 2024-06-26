import { Component } from "react";

export default class Hero extends Component {
    render(){
        return(
            <>
            <div className="hero" id="hero">
                <div className="bigger-jumbotron">
                    <div class="container-fluid py-5 p-5 mb-4">
                        <h1 class="display-5 fw-bold">Welcome to Keebara</h1>
                        <p class="col-md-6 fs-4">
                            Using a series of utilities, you can create this jumbotron, just
                            like the one in previous versions of Bootstrap. Check out the
                            examples below for how you can remix and restyle it to your liking.
                        </p>
                        <button class="btn btn-light btn-lg" type="button">
                            Example button
                        </button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}