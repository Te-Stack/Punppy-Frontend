
import "../css/auth.css";
import Header from "../components/header";
import SetPassword from "../components/setpassword";


const NewPassword = () => {
    return ( 
        <div className="card shadow-lg">
        <div className="card-body">

       <Header 
        name="Set New Password" 
        sub="Include an uppercase and special character" 
        progress={{display: "none"}}
        progress2={{display: "none"}}

        />
       <SetPassword />
       
        </div>
        </div>
     );
} 
 
export default NewPassword;