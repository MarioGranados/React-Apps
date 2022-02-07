import './Hero.css';

let heightAndWidth = {
    height: '50%',
    width: '100%',
    margin: 'auto',
    borderRadius: '50px'
}

function Hero({lgBackground, title, contentText, picture, img, alt, left, table}) {
    function hasImg(picture) {
        if (picture) {
            return (<div className='container'><img src={img} style={heightAndWidth} alt={alt}/></div>)
        } else {
            return (<div className='container' id='chart1'>{table}</div>)
        }
    }

    function contentLeft(left) {
        if (left) {
            return (
                <>
                    <div className='col-lg' data-aos={'fade-up'} data-aos-duration="2000" data-aos-once="false"
                         data-aos-mirror="true">
                        <div className={'display-4 red-text text-md-center'}>{title}</div>
                        <div className={'text-left text-md-center'}>{contentText}</div>
                    </div>
                    <div className="col-lg" data-aos={'fade-up'} data-aos-duration="2000" data-aos-once="false"
                         data-aos-mirror="true">
                        {hasImg(picture)}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="col" data-aos={'fade-up'} data-aos-duration="2000" data-aos-once="false"
                         data-aos-mirror="true">
                        {hasImg(picture)}
                    </div>
                    <div className='col' data-aos={'fade-up'} data-aos-duration="2000" data-aos-once="false"
                         data-aos-mirror="true">
                        <div className={'display-4 red-text'}>{title}</div>
                        <div className={'text-left'}>{contentText}</div>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className={lgBackground ? 'light_bg jumbotron my-0' : "blue_bg text-white jumbotron my-0"}>
                <div className="my-0 py-5">
                    <div className="row ">
                        {contentLeft(left)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;