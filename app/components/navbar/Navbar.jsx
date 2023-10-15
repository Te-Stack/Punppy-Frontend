import Link from "next/link";
const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-transparent navbar-expand-lg navbar-dark px-lg-5 py-lg-5">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/"><img src="images/logo/logo-white.png" width="100"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-3">
              <li className="nav-item px-lg-5">
                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item px-lg-5">
                <Link className="nav-link" href="/about">About</Link>
              </li>
              <li className="nav-item px-lg-5">
                <Link className="nav-link px-lg-5 special-link-1" href="#">Login</Link>
              </li>
              <li className="nav-item px-lg-5">
                <Link className="nav-link px-lg-5 special-link" href="#">Signup</Link>
              </li>
            </ul>        
          </div>
        </div>
      </nav>
      
        </div>
     );
}
 
export default Navbar;