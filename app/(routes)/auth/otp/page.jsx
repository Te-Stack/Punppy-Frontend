
import "../css/auth.css";
import Header from "../components/header";
import Form from "../components/form";


const Reset = () => {
    return ( 
        <div className="card shadow-lg">
        <div className="card-body">

       <Header 
        name="You've got mail!" 
        sub="Enter the six digit code we sent to your email" 
        progress={{display: "none"}}
        progress2={{display: "none"}}

        />
       <Form 
        button="Submit" 
        password="Password" 
        smallHref="#" 
        href="/auth/signup/" 
        small="Resend in 3s" 
        style={{display: "block"}} 
        passwordGroup={{display: "none"}}
        emailGroup={{display: "none"}}

        />
       
        </div>
        </div>
     );
} 
 
export default Reset;