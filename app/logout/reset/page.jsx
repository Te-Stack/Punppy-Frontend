import Link from "next/link";
import "../logout.css"


export const metadata = {
    title: "Reset Password"
  };

const Resetpage = () => {
    return ( 
        <div className="login">
    <form>
      <div className="text-center">
        <img src="/img/Punppy_icon 1.png"/>
      <h6 className="fw-bold">Reset your password</h6>
      

      </div>
      
        <div className="m-3 text-center">
          <img className="email mt-2" src="/img/Message.png" />
          <input type="email" placeholder="Email Address" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <Link href="./" className="form-text text-primary">Back to login</Link>
        </div>
        
        <div className="text-center m-3">
           
                <button className="btn btn-primary text-white"> <Link href="./reset/code" className="text-white">Reset</Link></button>
          
        </div>
        
        
      </form>

  </div>
     );
}
 
export default Resetpage;