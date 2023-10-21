import Link from "next/link";


const Nav = () => {
    return ( 
        <nav className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">
        <span className="icon"><img className="center-block" src="/img/Punppy 1.png" height="69" alt="Punppy"/></span></Link>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
         <ul className="navbar-nav px-3 d-sm-none">
          <li className="nav-item text-nowrap">
            
          </li>
        </ul>
      
          <div className="user">
            <div className="Admin">
                <img src="img/Ellipse 2.png"  />
                <div className="online"></div>
            </div>
            <div>
                <h5 className="text-bold">Admin</h5>
                <p>online</p>
            </div>
            
            
          </div>
      </nav>
     );
}
 
export default Nav;