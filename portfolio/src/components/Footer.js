import React from "react";

function Footer() {
    return (
        <footer>
            <div className="space_bg text-white">
                <div className="container">
                    <div className="row p-5">
                        <div className="col" data-aos="fade-up">
                            <div className="display-4 red-text">Mario Granados</div>
                            <div className="text-muted">Full-Stack Developer</div>
                            <p className="lead">
                                
                            </p>
                            <div className="display-4 red-text">Follow Me!</div>
                            <div className="d-flex justify-content-between w-50">
                                <div className="text-muted">Github</div>
                                <div className="text-muted">LinkedIn</div>
                                <div className="text-muted">Instagram</div>
                            </div>

                        </div>
                        <div className="col" data-aos="fade-up">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6 border-color-red">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" className="form-control bg-transparent text-white" id="firstName"
                                               placeholder="John"/>
                                    </div>
                                    <div className="form-group col-md-6 border-color-red">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" className="form-control bg-transparent text-white" id="lastName"
                                               placeholder="Smith"/>
                                    </div>
                                </div>
                                <div className="form-group border-color-red">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input type="tel" className="form-control bg-transparent text-white" id="phoneNumber"
                                           placeholder="000 000 0000"/>
                                </div>
                                <div className="form-group border-color-red">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control bg-transparent text-white" id="email"
                                           placeholder="example@email.com"/>
                                </div>
                                <div className="form-group border-color-red">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control bg-transparent text-white" id="message" rows="3">Hi, I love your work! Please contact me as soon as possible!</textarea>
                                </div>
                                <div className="form-group border-color-red">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Subscribe
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-light border-color-red">Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="text-center p-2">Mario Granados</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;