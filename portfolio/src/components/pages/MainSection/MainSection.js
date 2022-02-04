import './MainSection.css'
function MainSection() {
    return (
        <div className='bg_image'>
            <div className="row">
                <div className="col-12">
                    <div className="container-fluid justify-content-center d-flex">
                        <div className="bg_opacity p-4 text-center">
                            <div className="display-4 text-white">Full-Stack Developer</div>
                            <div className="lead text-white">
                                Hello! My name is Mario Granados. I am a professional Web Developer with expert
                                knowledge in <span className="badge badge-primary">JavaScript</span> and
                                <span className="badge badge-danger">JQuery</span>
                                I am well experienced in <span className="badge badge-primary">Object-Oriented Programming,</span>
                                <span className="badge badge-dark">Test-Driven Development,</span> and
                                <span className="badge badge-dark">Version Control With Git</span>
                                I am very passionate about programming by pursuing new methods to improve
                                technology, by helping businesses take their store to the internet.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainSection