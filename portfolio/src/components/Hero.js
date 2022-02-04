import './Hero.css'

function Hero({lgBackground, title, contentText, picture, img, alt, left, table}) {
    function hasImg(picture) {
        if (picture) {
            return (<div className='container'> <img src={img} alt={alt}/> </div>)
        } else {
            return (<div className='container' id='chart1'>{table}</div>)
        }
    }

    return (
        <>
            <div className={lgBackground ? 'text-white my-0 bg_color jumbotron my-0' : "bg-light jumbotron my-0"}>
                <div className="my-0">
                    <div className="row">
                        <div className='col-6'>
                            <div className={left ? 'display-4' : 'display-4 text-right'}>{title}</div>
                            <div className={left ? 'text-left' : 'text-right'}>{contentText}</div>
                        </div>
                        <div className="col-6">
                            {hasImg(picture)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;