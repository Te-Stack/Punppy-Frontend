import Link from "next/link";
import "./logout.css"

export const metadata = {
    title: "Log in"
  };

const Logout = () => {
    return ( 
        <div className="login">
    <form>
      <div className="text-center">
        <img src="/img/Punppy_icon 1.png"/>
      <h6 className="fw-bold">Sign in to Punppy as an Admin</h6>
      <p>Login to your admin account</p>

      </div>
      
        <div className="mb-3 text-center">
        <img className="email mt-2 " src="/img/Message.png" />
          <input type="email" placeholder="Email Address" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 text-center">
          <img className="lock mt-2" src="/img/Lock.png" alt=""/>
          
          <input type="password" className="form-control text-center" id="exampleInputPassword1" placeholder="Password"/>
          <Link href="./logout/reset" className="form-text text-primary">Reset password</Link>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary  "><Link href="../admin" className="text-white">Login</Link></button>
        </div>
        
        
      </form>

  </div>
     );
}
 
export default Logout;