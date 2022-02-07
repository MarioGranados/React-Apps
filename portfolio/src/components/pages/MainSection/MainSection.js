import './MainSection.css'
function MainSection() {
    return (
        <div className='bg_image'>
            <div className="row row-md-6">
                <div className="col col-md-6">
                    <div className="container glass-background" data-aos="flip-up" data-aos-duration="1000" data-aos-once="false" data-aos-mirror="true">
                        <div className="text-center mx-auto my-auto">
                            <div className="display-4 red-text" data-aos="zoom-out" data-aos-duration="2000" data-aos-once="false" data-aos-mirror="true">Full-Stack Developer</div>
                            <div className="lead text-white" data-aos="zoom-in" data-aos-duration="3000" data-aos-once="false" data-aos-mirror="true">
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