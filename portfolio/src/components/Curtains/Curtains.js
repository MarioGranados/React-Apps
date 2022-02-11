import './Curtains.css'
function Curtains() {
    return (
        <>
            <div className='vh-100 bg-dark align-items-center d-flex justify-content-center'>
                <div>
                    <div className="text-center green-text display-3">Hello! <br/>I'm Mario Granados</div>
                    <p className={'text-lead text-center green-text'}>Scroll Down</p>
                </div>
            </div>
            <div className='curtain_right bg-dark' data-aos='fade-in' data-aos-duration='1' data-aos-once={'false'}>
            </div>
            <div className='curtain_left bg-dark' data-aos='fade-in' data-aos-duration='1' data-aos-once={'false'}>
            </div>
        </>
    )
}
export default Curtains