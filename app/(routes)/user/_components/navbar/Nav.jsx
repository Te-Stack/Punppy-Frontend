"use client"
import Link from "next/link";
import "./navbar.css"
import MobileNav from "./MobileNav";
import {BsChatHeart,BsJournalText, BsMessenger} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai";
import {HiOutlineSpeakerphone} from "react-icons/hi"
import {GrNotification} from "react-icons/gr"
import { usePathname } from 'next/navigation'








const Nav = () => {
    const pathname = usePathname()
    return ( 
        <div>
        <nav className="NavbarItems">
        <div className="Part"> 
        <Link href="/"><img className="navbarlogo" src="/img/Punppy 1.png" /></Link>
               
            </div>
            
       
           
            <ul className="navmenu">
                    <li>
                        <Link href="/user" className={`link ${pathname === '/user' ? 'navlinks active' : 'navlinks'}`}><AiOutlineHome/></Link>
                    </li>
                    <li>
                        <Link className={`link ${pathname === '/user/findMatch' ? 'navlinks active' : 'navlinks'}`} href="/user/findMatch" ><BsChatHeart/></Link>
                    </li> 
                    <li>
                        <Link  className={`link ${pathname === '/user/blog' ? 'navlinks active' : 'navlinks'}`} href="/user/blog"><BsJournalText/></Link>
                    </li>
                    <li>
                        <Link className={`link ${pathname === '/user/ads' ? 'navlinks active' : 'navlinks'}`} href="/user/ads"><HiOutlineSpeakerphone/></Link>
                    </li>     
                </ul>
                <div className="Search">
                    <div className="input">
                    <img className="btn" src="/icons/Search.png"/>
                    <input type="search" name="" id="" placeholder="Search Punppy" className="text-center form-control"/>

                    </div>
                
                
                <div className="icons">
                <Link className={`link ${pathname === '/user/messages' ? 'navlinks ' : 'navlinks'}`} href="/user/messages"><BsMessenger/></Link>
                    
                    
                    
                    <div className="backlog"></div>

                </div>
                
                <div className="icons" >
                <Link className={`link ${pathname === '/user/notification' ? 'navlinks active' : 'navlinks'}`} href="/user/notification"><GrNotification/></Link>
                   
                    
                    <div className="backlog"></div>
                
                </div>
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