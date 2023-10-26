
import "../css/auth.css";
import Header from "../components/header";
import Form from "../components/form";
import Socials from "../components/socials"


const Signup = () => {
    return ( 
        <div className="card shadow-lg">
        <div className="card-body">

       <Header 
        name="Register an Account" 
        sub="Create your free account"  
        progress2={{display: "none"}}/>
       <Form 
        button="Sign Up" 
        password="Create a Strong Password" 
        account1="Already have an account?" 
        account2="Login" 
        href="/auth/login/" 
        style={{display: "none"}}
        otpGroup={{display: "none"}}

        />
       <Socials 
        name="Continue with Google" 
        img="../images/auth/google.svg"

        />
       <Socials 
       name="Continue with Apple" 
       img="../images/auth/apple.svg"

       />
       <Socials 
       name="Continue with Facebook" 
       img="../images/auth/facebook.svg"

       />
        </div>
        </div>
     );
} 
 
export default Signup;