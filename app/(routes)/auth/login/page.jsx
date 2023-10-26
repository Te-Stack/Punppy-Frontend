
import "../css/auth.css";
import Header from "../components/header";
import Form from "../components/form";
import Socials from "../components/socials"


const Login = () => {
    return ( 
        <div className="card shadow-lg">
        <div className="card-body">

       <Header 
        name="Sign in to Punppy" 
        sub="Login to your account" 
        progress={{display: "none"}}
        progress2={{display: "none"}}

        />
       <Form 
        button="Login" 
        password="Password" 
        account1="Don't have an account?" 
        account2="Signup" 
        small="Reset Password" 
        smallHref="/auth/reset/" 
        href="/auth/signup/" 
        style={{display: "block"}}
        otpGroup={{display: "none"}} 

        />

       <Socials 
        name="Continue with Google" 
        img="../images/auth/google.svg"/>

       <Socials 
        name="Continue with Apple" 
        img="../images/auth/apple.svg"/>

       <Socials 
        name="Continue with Facebook" 
        img="../images/auth/facebook.svg"/>

        </div>
        </div>
     );
} 
 
export default Login;