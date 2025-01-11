export default function Coursel() {
    const BASE_URL="http://event-serverless-management-system.s3-website.ap-south-1.amazonaws.com";
    return (
        <div id="carouselExampleCaptions" className="carousel slide "  data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button 
                    type="button" 
                    data-bs-target="#carouselExampleCaptions" 
                    data-bs-slide-to="0" 
                    className="active" 
                    aria-current="true" 
                    aria-label="Slide 1">
                </button>
                <button 
                    type="button" 
                    data-bs-target="#carouselExampleCaptions" 
                    data-bs-slide-to="1" 
                    aria-label="Slide 2">
                </button>
                <button 
                    type="button" 
                    data-bs-target="#carouselExampleCaptions" 
                    data-bs-slide-to="2" 
                    aria-label="Slide 3">
                </button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={`${BASE_URL}Images\Banquet.jpg`} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Private Parties</h5>
                        <p>Birthday Parties,Anniversary parties,Theme Parties and much more..</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={`${BASE_URL}Images\Dance.jpg`} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Music & Entertainment</h5>
                        <p>From live bands and DJs to mesmerising performers, we have everything you need</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={`${BASE_URL}Images\CorporateMeeting.jpg`} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 style={{color:"black"}} >We offer different types  of corporate events</h5>
                        <p style={{color:"black"}}>Board Meetings,Product Launches,Corporate Dinner,etc</p>
                    </div>
                </div>
            </div>
            <button 
                className="carousel-control-prev" 
                type="button" 
                data-bs-target="#carouselExampleCaptions" 
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button 
                className="carousel-control-next" 
                type="button" 
                data-bs-target="#carouselExampleCaptions" 
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
