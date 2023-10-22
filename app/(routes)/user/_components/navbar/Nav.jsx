import Link from "next/link";
import "./navbar.css"
import MobileNav from "./MobileNav";



const Nav = () => {
    return ( 
        <div>
        <nav className="NavbarItems">
        <div className="Part"> 
        <Link href="/"><img className="navbarlogo" src="/img/Punppy 1.png" /></Link>
               
            </div>
            
       
           
            <ul className="navmenu">
                    <li>
                        <Link href="https://github.com/Te-Stack" className="navlinks"><img src="/usericons/Homevector.png" /></Link>
                    </li>
                    <li>
                        <Link className="navlinks" href="https://github.com/Te-Stack" ><img src="/usericons/LovechatVector.png" /></Link>
                    </li> 
                    <li>
                        <Link className="navlinks" href="https://github.com/Te-Stack"><img src="/usericons/Blogvector.png" /></Link>
                    </li>
                    <li>
                        <Link className="navlinks" href="https://github.com/Te-Stack"><img src="/usericons/Campaignvector.png" /></Link>
                    </li>     
                </ul>
                <div className="Search">
                    <div className="input">
                    <img className="btn" src="/icons/Search.png"/>
                    <input type="search" name="" id="" placeholder="Search Punppy" className="text-center form-control"/>

                    </div>
                
                
                <div className="icons">
                    
                    <img src="/usericons/Messengervector.png" />
                </div>
                
                <Link className="icons" href="" >
                   
                    <img src="/usericons/notificationVector.png" />
                
                </Link>
                <div className="user">
                <div className="Admin">

                    <img src="img/Ellipse 2.png"  />
                    <div className="online"></div>
                </div>
                
            
            
                </div>
            </div>        
        </nav>
        

        <MobileNav/>
        
    </div>
        
     );
}
 
export default Nav;