
export default function SmallCarousel(props) {
    const BASE_URL="http://event-serverless-management-system.s3-website.ap-south-1.amazonaws.com";
    return (
        <div style={{ backgroundColor: '#3E342D', padding: '3rem' }}>
            <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: "40px", margin: "1rem", color: '#FFFFFF' }}>Our Work</h5>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
                {/* Carousel 1 */}
                <div
                    id="carouselExample"
                    className="carousel slide"
                    style={{ width: '25%', height: '200px' }}
                data-bs-ride="carousel">
                    <div className="carousel-inner" style={{ height: '100%' }}>
                        <div className="carousel-item active">
                            <img
                                src={`${BASE_URL}/Images/Dining3.jpg`}
                                className="d-block w-100"
                                alt="..."
                                style={{ height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={`${BASE_URL}/Images/Dining2.jpg`}
                                className="d-block w-100"
                                alt="..."
                                style={{ height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={`${BASE_URL}/Images/Dining 4.jpg`}
                                className="d-block w-100"
                                alt="..."
                                style={{ height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Carousel 2 */}
                <div
                    id="carouselExample3"
                    className="carousel slide"
                    style={{ width: '25%', height: '200px' }}
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner" style={{ height: '100%' }}>
                        <div className="carousel-item active">
                            <img
                                src={`${BASE_URL}/Images/D7.jpg`}
                                className="d-block w-100"
                                alt="..."
                                style={{ height: '100%', objectFit: 'cover' }}
                            /> 
                        
                        </div>
                        <div className="carousel-item">
                            <img
                                src={`${BASE_URL}/Images/D5.jpg`}
                                className="d-block w-100"
                                alt="..."
                                style={{ height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={`${BASE_URL}/Images/D8.jpg`}
                                className="d-block w-100"
                                alt="..."
                                style={{ height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample3"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample3"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Carousel 3 */}
                <div
                    id="carouselExample2"
                    className="carousel slide"
                    style={{ width: '25%', height: '200px' }}
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner" style={{ height: '100%' }}>
                        <div className="carousel-item active">
                            <img
                                src={`${BASE_URL}/Images/D9.jpg`}
                                className="d-block w-100"
                                alt="..."
                                style={{ height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={`${BASE_URL}/Images/D10.jpg`}
                                className="d-block w-100"
                                alt="..."
                                style={{ height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={`${BASE_URL}/Images/D6.jpg`}
                                className="d-block w-100"
                                alt="..."
                                style={{ height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample2"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample2"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
