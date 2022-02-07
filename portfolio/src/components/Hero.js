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
                        <h4 className={'red-text text-center'}>{title}</h4>
                        <div className={'text-center'}>{contentText}</div>
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
                        <h4 className={'red-text text-center'}>{title}</h4>
                        <div className={'text-center'}>{contentText}</div>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className={lgBackground ? 'light_bg jumbotron my-0' : "blue_bg text-white jumbotron my-0"} id={'hero'}>
                <div className="my-0">
                    <div className="row padding_x">
                        {contentLeft(left)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;