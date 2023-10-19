import Link from "next/link";

const Sidebar = () => {
    return ( 
        <nav id="sidebarMenu" className="d-md-block col-md-3 col-lg-2  sidebar collapse" >
        <div className="sidebar-sticky pt-5">
          <ul className="nav flex-column ">
              <li className="nav-item">
                <Link className="nav-link active" href="/admin">
                  <span data-feather="file"></span>
                  <span className="icon"><img src="./icons/Combined Shape.png" alt=""/></span>
                  Admin Panel
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" href="/users">
                  <span data-feather="shopping-cart"></span>
                  <span className="icon"><img src="./icons/2 User.png" /></span>
                  Users     
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/posts">
                  <span data-feather="file"></span>
                  <span className="icon"><img src="./icons/Vector.png" /></span>
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blogs">
                  <span data-feather="file"></span>
                  <span className="icon"><img src="./icons/Blog icon.png" /></span>
                  Manage Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/ads">
                  <span data-feather="file"></span>
                  <span className="icon"><img src="./icons/Ads Icon.png" /></span>
                  Manage Ads
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/newsletters">
                  <span data-feather="file"></span>
                  <span className="icon"><img src="./icons/Newletter icon.png" /></span>
                  Newsletter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/admin/settings">
                  <span className="icon"><img src="./icons/Settings.png"/></span>
                  <span data-feather="users"></span>
                  Settings
                </Link>
              </li>
        
          
              <li className="nav-item">
                <Link className="nav-link log" href="">
                  <span className="icon"><img src="./icons/Logout.png" /></span>
                  <span data-feather="users"></span>
                  Log out
                </Link>
              </li>
            
          </ul>
        </div>
    </nav>
     );
}
 
export default Sidebar;