import Footer from "../../_components/footer/footer";
import Navbar from "../../_components/navbar/darknavbar";


const About = () => {
    return ( 
        <div>
            <div classNameName="abheader">
            <Navbar/>
            <div className="row">

                <div className="col-lg-12 text-center my-5 px-5">
                <h3 className="punppy">Welcome to <span>Punppy</span></h3>
                <p>Our mission is to create a safe, friendly, and inclusive platform where people from <br/>
                    all walks of life can connect, share their experiences, and find support and guidance.</p>
                </div>

                </div>
            </div>
            
            <div className="row">
    <div className="col-lg-12">

      <div className="mb-5"> 

      <img src="images/about/people.png" className="img-fluid people big"/>
      <img src="images/about/people-mobile.png" className="img-fluid people small"/>

      </div>
    </div>
  </div>

<div className="row">
  <div className="col-lg-12 rec-cont">

<div className="rectangle">

  <p>We are dedicated to innovation and keeping our platform up-to-date with the latest technologies to make your experience seamless. 
  So, whether you're here to seek advice, share gists, or connect with others, we invite you to join our community and be a part of something special. </p>
  <div className="action">
<a href="#" className="btn me-4">Login</a>
<a href="#" className="btn">Signup</a>
</div>
 
</div>

  </div>
</div>
      <Footer/>

        </div>
     );
}
 
export default About;