import Link from "next/link";
import "../../logout.css"

export const metadata = {
    title: "Reset Password"
  };

const Code = () => {
    return ( 
        <div className="login">
    <form>
      <div className="text-center">
        <img src="/img/Punppy_icon 1.png"/>
      <h6 className="fw-bold">You've got mail!</h6>
      <p>Enter the six digit code we sent to your email</p>
      

      </div>
      
        <div className="m-3">
          
            
          <input type="email" placeholder="_ _ _ _ _ _" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <Link href="" className="form-text text-danger">Resend in 3s</Link>
        </div>
        
        <div className="text-center m-3">
           
                <button type="submit" className="btn btn-primary">Submit</button>

          
        </div>
        
        
      </form>

  </div>
    
     );
}
 
export default Code;