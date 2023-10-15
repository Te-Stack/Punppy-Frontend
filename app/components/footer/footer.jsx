import Link from "next/link";

const Footer = () => {
    return (    
        <footer>
        <div className="row bg-dark p-4">
            <div className="col-lg-6 mfoot">
            <img src="/images/logo/logo-white.png" width="100"  className="mb-4"/>
            <p className="text-white">Connect with others, share your stories, <br />
            and get relationship advice from a diverse <br/>
            community of users</p>
        </div>
    <div className="col-lg-6 foot">
        <h4><Link href="#" className="footer-link">COMPANY RESOURCES</Link></h4>
        <p><Link href="#" className="footer-link">Terms of use</Link></p>
        <p><Link href="#" className="footer-link">Privacy Policy</Link></p>
      <div className="socials">
        <img src="images/socials/Ftwitterpng.png" className="me-3"/>
        <img src="images/socials/instagram.png" className="me-3"/>
        <img src="images/socials/facebook.png" className="me-3"/>
        <img src="images/socials/gmail.png" className="me-3"/>
      </div>
    </div>

        </div>
            <div className="row">
            <div style={{background: "#FD69B2"}} className="p-2 text-center">
            <p>Copyright  2023 Punppy Inc. | All rights reserved</p>
            </div>
            </div>
        </footer>
     );
}
 
export default Footer;