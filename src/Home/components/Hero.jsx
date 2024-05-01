import gadget from "../../assets/gadget.png"

export default function Hero() {
    //image link: https://www.vecteezy.com/png/13361342-3d-render-game-equipment-console-headset
    return(
        <>
        <div className="hero bg-dark" id="hero">
            <div className="bigger-jumbotron d-flex">
                <div class="container-fluid py-5 p-5 mb-4 text-white align-items-center">
                    <h1 class="display-4 fw-bold text-primary">Keebara</h1>
                    <h1 class="display-4 fw-bold col-lg-12 mb-3">
                        The online store made for gadgets
                    </h1>
                    <p className="mb-3">
                        Make easier to choose your own gadget
                    </p>
                    <button class="btn btn-light btn-md" type="button">
                        Shop now
                    </button>
                </div>
                <div className='col-lg-4'>
                        <img src={gadget} alt='hero' className='img-fluid'/>
                </div>
            </div>
        </div>
        </>
    )
}