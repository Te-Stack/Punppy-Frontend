import Link from "next/link";
import {BsChatHeart,BsJournalText, BsMessenger} from "react-icons/bs";
import {AiOutlineHome,AiOutlineSearch} from "react-icons/ai";
import {HiOutlineSpeakerphone} from "react-icons/hi"
import {GrNotification} from "react-icons/gr"
import { usePathname } from 'next/navigation'



const MobileNav = () => {
    const pathname = usePathname()

    return ( 
        <nav className="MobileNavbarItem">
            <div className="top">
            <Link href="/"><img className="navbarlogo" src="/img/Punppy_white 1.png" /></Link>
            <div className="user">
                <div className="Admin">
                    {/* <AiOutlineSearch /> */}
                    <img src="img/Ellipse 2.png"  />
                    <div className="online"></div>
                </div>
            </div>

            </div>

        <ul className="navmenu">
                    <li>
                        <Link href="/user" className={`link ${pathname === '/user' ? 'navlinks active' : 'navlinks'}`}><AiOutlineHome/></Link>
                    </li>
                    <li>
                        <Link className={`link ${pathname === '/user/findMatch' ? 'navlinks active' : 'navlinks'}`} href="/user/findMatch" ><BsChatHeart/></Link>
                    </li> 
                    <li>
                        <Link className={`link ${pathname === '/user/blog' ? 'navlinks active' : 'navlinks'}`} href="/user/blog"><BsJournalText/></Link>
                    </li>
                    <li>
                        <Link className={`link ${pathname === '/user/ads' ? 'navlinks active' : 'navlinks'}`} href="/user/ads"><HiOutlineSpeakerphone/></Link>
                    </li>     
                    <li>
                        <Link className={`link ${pathname === '/user/messages' ? 'navlinks active' : 'navlinks'}`} href="/user/messages"><BsMessenger/></Link>
                    </li>
                    <li>
                        <Link className={`link ${pathname === '/user/notification' ? 'navlinks active' : 'navlinks'}`} href="/user/notification"><GrNotification/></Link>
                    </li>     
                </ul>

            
            
            
            

        </nav>
     );
}
 
export default MobileNav;