export default function Navbar(){
    return <nav style={{ backgroundColor: "#0B090E" }} className="navbar navbar-expand-lg  " >
    <div className="container-fluid" style={{ color:"#D678A4" }}>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
        <a style={{ color:"#D678A4" }} className="navbar-brand col-lg-3 me-0" href="#">Event Management Company</a>
        <ul className="navbar-nav col-lg-6 justify-content-lg-center">
          <li className="nav-item">
            <a style={{ color:"#D678A4" }} className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a  style={{ color:"#D678A4" }} className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a style={{ color:"#D678A4" }} className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a style={{ color:"#D678A4" }} className="dropdown-item" href="#">Action</a></li>
              <li><a style={{ color:"#D678A4" }}className="dropdown-item" href="#">Another action</a></li>
              <li><a style={{ color:"#D678A4" }} className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <div className="d-lg-flex col-lg-3 justify-content-lg-end">
          <button style={{ color:"#D678A4" }} className="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  </nav>
  
}