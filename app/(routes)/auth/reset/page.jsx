
import "../css/auth.css";
import Header from "../components/header";
import Form from "../components/form";


const Reset = () => {
    return ( 
        <div className="card shadow-lg">
        <div className="card-body">

       <Header 
        name="Reset your password" 
        sub="" 
        progress={{display: "none"}}
        progress2={{display: "none"}}

        />
       <Form 
        button="Reset" 
        password="Password" 
        account1="Don't have an account?" 
        account2="Signup" 
        smallHref="/auth/login/" 
        href="/auth/signup/" 
        small="Back to Login" 
        style={{display: "block"}} 
        passwordGroup={{display: "none"}}
        otpGroup={{display: "none"}}

        />
       
        </div>
        </div>
     );
} 
 
export default Reset;