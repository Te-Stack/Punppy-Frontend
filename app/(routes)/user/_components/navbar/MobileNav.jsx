import Link from "next/link";


const MobileNav = () => {
    return ( 
        <nav className="MobileNavbarItem">
            <div className="top">
            <Link href="/"><img className="navbarlogo" src="/img/Punppy_white 1.png" /></Link>
            <div className="user">
                <div className="Admin">
                    <img src="img/Ellipse 2.png"  />
                    <div className="online"></div>
                </div>
            </div>

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
                    <li>
                        <Link className="navlinks" href="https://github.com/Te-Stack"><img src="/usericons/Messengervector.png" /></Link>
                    </li>
                    <li>
                        <Link className="navlinks" href="https://github.com/Te-Stack"><img src="/usericons/notificationVector.png" /></Link>
                    </li>     
                </ul>

            
            
            
            

        </nav>
     );
}
 
export default MobileNav;