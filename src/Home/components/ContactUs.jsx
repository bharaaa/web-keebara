export default function ContactUs() {
    return(
        <>
        <section className="py-5 bg-primary" id="kontak-kami">
            <div className="container p-5 text-white">
                <h2><b>Contact Us</b></h2>
                <div className="row">
                    <div className="col-8 col-sm-12">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail"
                                       aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text text-white">We`ll never share your email with anyone
                                    else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputComments">Comments</label>
                                <textarea className="form-control" placeholder="Leave a comment here" rows={6}
                                          id="exampleInputComments"></textarea>
                            </div>
                            <button type="submit" className="btn btn-light rounded-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}