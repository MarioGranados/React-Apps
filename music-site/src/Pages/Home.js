const Home = () => {
    return (
        <>
            <div className="jumbotron d-flex align-items-center justify-content-center">
                <div>
                    <h1 className="display-4 text-center">Some Name</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est libero quisquam reiciendis.</p>
                    <hr className="my-4 text-center"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, repellendus.</p>
                    <a className='justify-content-center d-flex text-decoration-none'>
                        <button className="btn btn-primary btn-lg">Products</button>
                    </a>
                </div>
            </div>
            <div className="container py-5">
                <h1 className="display-6 text-center">Deals!</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to
                                    additional content.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This card has even longer content than the first to
                                    show that equal height action.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Home;